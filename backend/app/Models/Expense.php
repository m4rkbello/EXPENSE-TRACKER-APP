<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Wallet;

class Expense extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'expense_name',
        'expense_description',
        'expense_amount',
        'expense_date',
        'expense_status_id',
        'wallet_id',
    ];

    public function wallet(){
        return $this->belongTo(Wallet::class);
    }
}
