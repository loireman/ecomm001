<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = (new News())->newQuery();
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
        $news = $news->paginate(20)->appends(request()->query());
        return Inertia::render('News/Index', [
            'news' => $news,
            'filters' => request()->all('search'),
        ]);
    }

    public function article($news) {
        $article = News::where('slug', $news)->first();
        return Inertia::render('News/Item', [
            'article' => $article,
        ]);
    }
}
