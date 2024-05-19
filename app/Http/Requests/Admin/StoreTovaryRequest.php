<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class StoreTovaryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255|unique:tovaries,name',
            'body' => 'required',
            'slug' => ['required', 'string', 'max:63', 'unique:tovaries,slug'],
            'property1' => 'required|integer|min:0|max:1024',
            'property2' => 'required|integer|min:0|max:128',
            'price' => 'required|numeric|between:0,99999.99',
            'photo_path' => 'nullable|array'
        ];
    }
}
