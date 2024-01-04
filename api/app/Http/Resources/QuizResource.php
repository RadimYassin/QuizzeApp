<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'date' => $this->date,
            'time' => $this->time,
            // You can include other quiz properties here
            'created_by' => $this->createdBy->email, // Assuming 'name' is a property on your User model
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
