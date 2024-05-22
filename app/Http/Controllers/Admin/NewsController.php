<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreNewsRequest;
use App\Http\Requests\Admin\UpdateNewsRequest;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * create a new instance of the class
     *
     * @return void
     */
    function __construct()
    {
        $this->middleware('can:news list', ['only' => ['index', 'show']]);
        $this->middleware('can:news create', ['only' => ['create', 'store']]);
        $this->middleware('can:news edit', ['only' => ['edit', 'update']]);
        $this->middleware('can:news delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = (new News)->newQuery();
        if (request()->has('search')) {
            $news->where('name', 'Like', '%' . request()->input('search') . '%');
        }
        if (request()->query('sort')) {
            $attribute = request()->query('sort');
            $sort_order = 'ASC';
            if (strncmp($attribute, '-', 1) === 0) {
                $sort_order = 'DESC';
                $attribute = substr($attribute, 1);
            }
            $news->orderBy($attribute, $sort_order);
        } else {
            $news->latest();
        }
        $news = $news->paginate(10)->appends(request()->query());
        return Inertia::render('Admin/News/Index', [
            'news' => $news,
            'filters' => request()->all('search'),
            'can' => [
                'create' => Auth::user()->can('news create'),
                'edit' => Auth::user()->can('news edit'),
                'delete' => Auth::user()->can('news delete'),
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/News/Create');
    }

    public function edit($news)
    {
        $news = News::where('id', $news)->first();
        return Inertia::render('Admin/News/Edit', [
            'news' => $news
        ]);
    }

    public function show($news)
    {
        $news = News::where('id', $news)->first();
        return Inertia::render('Admin/News/Show', [
            'news' => $news,
        ]);
    }

    public function store(StoreNewsRequest $request)
    {
        $photoPaths = [];
        if ($request->has('photo_path') && is_array($request->photo_path)) {

            foreach ($request->photo_path as $photo) {
                $fileName = time() . '_' . uniqid() . '.' . $photo->extension();

                $photo->storeAs('public/news_images', $fileName);

                // Collect the storage path
                $photoPaths[] = 'storage/news_images/' . $fileName;
            }
        }

        News::create([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'slug' => $request->input('slug'),
            'body' => $request->input('body'),
            'photo_path' => json_encode($photoPaths),
        ]);

        return redirect()->route('news.index')
            ->with('message', __('News created successfully.'));
    }

    public function update(UpdateNewsRequest $request, $news)
    {

        News::where('id', $news)->update($request->all());

        return redirect()->route('news.index')->with('message', __('News updated successfully.'));
    }


    public function destroy($news)
    {
        News::where('id', $news)->delete();

        return redirect()->route('news.index')
            ->with('message', __('News deleted successfully'));
    }
}
