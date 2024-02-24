<?php

namespace App\Http\Controllers;

use App\Models\Wallet;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $wallet=Wallet::all();
        return response()->json([
            "success"=>true,
            "wallets"=>$wallet,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "wallet_name"=>"required",
            "wallet_description"=>"required",
            "wallet_amount"=>"required",
            "wallet_status_id"=>"required",
        ]);

        $wallet=Wallet::create([
            "wallet_name"=>$request->wallet_name,
            "wallet_description"=>$request->wallet_description,
            "wallet_amount"=>$request->wallet_amount,
            "wallet_status_id"=>$request->wallet_status_id,
        ]);

        return response()->json([
            "success"=>true,
            "wallet"=>$wallet,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $wallet=Wallet::find($id);
        return response()->json([
            "success"=>true,
            "wallet"=>$wallet,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Wallet $wallet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $wallet=Wallet::find($id);

        $wallet->update($request->all());


        return response()->json([
            "success"=>true,
            "message"=>"Wallet has been updated successfully!",
            "wallet"=>$wallet,
        ]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Wallet::find($id)->delete();

        return response()->json([
            "success"=>true,
            "message"=>"The wallet has been deleted successfully!",
        ]);
    }
}
