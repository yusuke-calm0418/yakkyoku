<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJobRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check() && auth()->user()->hasRole('pharmacy');
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'hourly_rate' => 'nullable|integer|min:0',
            'pref' => 'nullable|string|max:16',
            'has_stay' => 'boolean',
            'description' => 'nullable|string',
        ];
    }
}
