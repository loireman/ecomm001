<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function upload(Request $request)
    {
        // Validate the uploaded file(s)
        $request->validate([
            'file' => 'required|file|max:10240', // Example validation rules
        ]);

        // Handle the file upload
        if ($request->file('file')->isValid()) {
            $path = $request->file('file')->store('public/product_images');
            $outputPath = str_replace('public', 'storage', $path);
            return response()->json(['path' => $outputPath], 200);
        } else {
            return response()->json(['error' => 'File upload failed'], 400);
        }
    }
}
