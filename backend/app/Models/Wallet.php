<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Expense;

class Wallet extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'wallet_name',
        'wallet_description',
        'wallet_amount',
        'wallet_status_id',
    ];

    public function expenses(){
        return $this->hasMany(Expense::class, 'wallet_id', 'id');
    }

}
