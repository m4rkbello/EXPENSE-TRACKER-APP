<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $expense=Expense::all();
        return response()->json([
            "success"=>true,
            "wallets"=>$expense,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      
        $request->validate([
            "expense_name"=>"required",
            "expense_description"=>"required",
            "expense_amount"=>"required",
            "expense_date"=>"required",
            "expense_status_id"=>"required",
            "wallet_id"=>"required",
        ]);

        $expense=Expense::create([
            "expense_name"=>$request->expense_name,
            "expense_description"=>$request->expense_description,
            "expense_amount"=>$request->expense_amount,
            "expense_date"=>$request->expense_date,
            "wallet_id"=>$request->wallet_id,
        ]);

        return response()->json([
            "success"=>true,
            "expense"=>$expense,
        ]);
    }
    

    /**
     * Display the specified resource.
     */
    public function show(Expense $expense)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Expense $expense)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Expense $expense)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Expense $expense)
    {
        //
    }
}
