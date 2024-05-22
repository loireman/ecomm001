<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blogs = (new Blog())->newQuery();
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
        $blogs = $blogs->paginate(20)->appends(request()->query());
        return Inertia::render('Blog/Index', [
            'blogs' => $blogs,
            'filters' => request()->all('search'),
        ]);
    }

    public function blog($blog) {
        $blog = Blog::where('slug', $blog)->first();
        return Inertia::render('Blog/Item', [
            'blog' => $blog,
        ]);
    }
}
