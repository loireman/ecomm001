<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreTovaryRequest;
use App\Http\Requests\Admin\UpdateTovaryRequest;
use App\Models\Tovary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TovaryController extends Controller
{
    /**
     * create a new instance of the class
     *
     * @return void
     */
    function __construct()
    {
        $this->middleware('can:tovary list', ['only' => ['index', 'show']]);
        $this->middleware('can:tovary create', ['only' => ['create', 'store']]);
        $this->middleware('can:tovary edit', ['only' => ['edit', 'update']]);
        $this->middleware('can:tovary delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tovaries = (new Tovary)->newQuery();
        if (request()->has('search')) {
            $tovaries->where('name', 'Like', '%' . request()->input('search') . '%');
        }
        if (request()->query('sort')) {
            $attribute = request()->query('sort');
            $sort_order = 'ASC';
            if (strncmp($attribute, '-', 1) === 0) {
                $sort_order = 'DESC';
                $attribute = substr($attribute, 1);
            }
            $tovaries->orderBy($attribute, $sort_order);
        } else {
            $tovaries->latest();
        }
        $tovaries = $tovaries->paginate(10)->onEachSide(2)->appends(request()->query());
        return Inertia::render('Admin/Tovary/Index', [
            'tovaries' => $tovaries,
            'filters' => request()->all('search'),
            'can' => [
                'create' => Auth::user()->can('tovary create'),
                'edit' => Auth::user()->can('tovary edit'),
                'delete' => Auth::user()->can('tovary delete'),
            ]
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Tovary/Create');
    }

    public function edit($tovaries)
    {
        $tovaries = Tovary::where('id', $tovaries)->first();
        return Inertia::render('Admin/Tovary/Edit', [
            'tovaries' => $tovaries
        ]);
    }

    public function show($tovaries)
    {
        $tovaries = Tovary::where('id', $tovaries)->first();
        return Inertia::render('Admin/Tovary/Show', [
            'tovaries' => $tovaries,
        ]);
    }

    public function store(StoreTovaryRequest $request)
    {
        $photoPaths = [];
        // Ensure 'photo_path' exists and is an array
        if ($request->has('photo_path') && is_array($request->photo_path)) {

            // Iterate over each photo in the request
            foreach ($request->photo_path as $photo) {
                // Generate a unique filename based on the current timestamp
                $fileName = time() . '_' . uniqid() . '.' . $photo->extension();

                // Store the photo in the public/product_images directory
                $photo->storeAs('public/product_images', $fileName);

                // Collect the storage path
                $photoPaths[] = 'storage/product_images/' . $fileName;
            }
        }

        Tovary::create([
            // Pass other attributes except photo_path
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'slug' => $request->input('slug'),
            'property1' => $request->input('property1'),
            'property2' => $request->input('property2'),
            'body' => $request->input('body'),
            // Pass the photo_path as a string
            'photo_path' => json_encode($photoPaths),
        ]);

        return redirect()->route('tovary.index')
            ->with('message', __('Tovar created successfully.'));
    }

    public function update(UpdateTovaryRequest $request, $tovaries)
    {

        Tovary::where('id', $tovaries)->update($request->all());

        return redirect()->route('tovary.index')->with('message', __('Tovar updated successfully.'));
    }


    public function destroy($tovaries)
    {
        Tovary::where('id', $tovaries)->delete();

        return redirect()->route('tovary.index')
            ->with('message', __('Tovar deleted successfully'));
    }
}
