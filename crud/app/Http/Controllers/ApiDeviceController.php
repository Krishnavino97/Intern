<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ApiDeviceController extends Controller
{
    function list() {
            return User::all();
    }

    function add(Request $req){
        $user = New User;
        $user -> name = $req -> name;
        $user -> email = $req -> email;
        // $user -> save(); //save data into the db
        $result = $device -> save();

        if($resullt){
            return ["Result" => "Data has been posted successfully!"];
        }
        else{
            return ["Result" => "Operation Filed!"];
        }
    }

    function update(Request $req){
        $user = User::find($req -> id);
        $user->name = $req->name;
        $user->email = $req->email;
        $result = $user->save();

        if($result){
            return ["result" => "Data Updated!"];
        }
        else{
            return ["result" => "Update failed"];
        }
    }

    function delete($id){

        $user = User::find($id);
        $result = $user -> delete();

        if($result){
            return ["Result" => "Record has been deleted successfully!" .$id];
        }
        else{
            return ["Result" => "Delete operation failed!" .$id];
        }
    
}

    function search($name){
            return User::where("name", "like", "%".$name."%")->get();
    }
}
    