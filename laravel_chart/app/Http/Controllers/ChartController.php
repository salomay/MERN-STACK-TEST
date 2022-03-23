<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class ChartController extends Controller
{
    //
    public function index(){

         $data_pengunjung = Http::get(env('API_URL')+'/getDataPengunjung');


        return view('/home', compact('data_pengunjung'));
    }
}
