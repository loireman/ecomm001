<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreBlogRequest;
use App\Http\Requests\Admin\UpdateBlogRequest;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class BlogController extends Controller
{
    /**
     * create a new instance of the class
     *
     * @return void
     */
    function __construct()
    {
        $this->middleware('can:blogs list', ['only' => ['index', 'show']]);
        $this->middleware('can:blogs create', ['only' => ['create', 'store']]);
        $this->middleware('can:blogs edit', ['only' => ['edit', 'update']]);
        $this->middleware('can:blogs delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blogs = (new Blog)->newQuery();
        if (request()->has('search')) {
            $blogs->where('name', 'Like', '%' . request()->input('search') . '%');
        }
        if (request()->query('sort')) {
            $attribute = request()->query('sort');
            $sort_order = 'ASC';
            if (strncmp($attribute, '-', 1) === 0) {
                $sort_order = 'DESC';
                $attribute = substr($attribute, 1);
            }
            $blogs->orderBy($attribute, $sort_order);
        } else {
            $blogs->latest();
        }
        $blogs = $blogs->paginate(10)->appends(request()->query());
        return Inertia::render('Admin/Blog/Index', [
            'blogs' => $blogs,
            'filters' => request()->all('search'),
            'can' => [
                'create' => Auth::user()->can('blogs create'),
                'edit' => Auth::user()->can('blogs edit'),
                'delete' => Auth::user()->can('blogs delete'),
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Blog/Create');
    }

    public function edit($blog)
    {
        $blog = Blog::where('id', $blog)->first();
        return Inertia::render('Admin/Blog/Edit', [
            'blog' => $blog
        ]);
    }

    public function show($blog)
    {
        $blog = Blog::where('id', $blog)->first();
        return Inertia::render('Admin/Blog/Show', [
            'blog' => $blog,
        ]);
    }

    public function store(StoreBlogRequest $request)
    {
        $photoPaths = [];
        if ($request->has('photo_path') && is_array($request->photo_path)) {

            foreach ($request->photo_path as $photo) {
                $fileName = time() . '_' . uniqid() . '.' . $photo->extension();

                $photo->storeAs('public/blog_images', $fileName);

                // Collect the storage path
                $photoPaths[] = 'storage/blog_images/' . $fileName;
            }
        }

        Blog::create([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'slug' => $request->input('slug'),
            'body' => $request->input('body'),
            'photo_path' => json_encode($photoPaths),
        ]);

        return redirect()->route('blogs.index')
            ->with('message', __('Blog created successfully.'));
    }

    public function update(UpdateBlogRequest $request, $blog)
    {

        Blog::where('id', $blog)->update($request->all());

        return redirect()->route('blogs.index')->with('message', __('Blog updated successfully.'));
    }


    public function destroy($blog)
    {
        Blog::where('id', $blog)->delete();

        return redirect()->route('blogs.index')
            ->with('message', __('Blog deleted successfully'));
    }
}
