<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreApplicationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->hasRole('pharmacist');
    }

    public function rules(): array
    {
        return [
            'message' => 'nullable|string|max:1000',
        ];
    }
}
