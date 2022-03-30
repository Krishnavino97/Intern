<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Testing;
use Validator;

class TestingController extends Controller

    {
        function list() {
            return Testing::all();
    }
    
    function add(Request $req){
    
        $validator = Validator::make($req->all(), [
            'jobid' => 'required',
            'meter_number' => 'required',
        ]);

    
        if ($validator->fails()) {
            
            return response()->json([
                'errorMessage'=> true,
                'message' => $validator->errors()
            ]);
        }
    
        $testing = New Testing;
        $testing -> jobid = $req -> jobid;
        $testing -> availability = $req -> availability;
        $testing -> other_status = $req -> other_status;
        $testing -> usage = $req -> usage;
        $testing -> other_places = $req -> other_places;
        $testing -> connection_status = $req -> connection_status;
        $testing -> remarks = $req -> remarks;
        $testing -> field_officer = $req -> field_officer;
        $testing -> meter_number = $req -> meter_number;

        /*
        if($req->file('meter_number') == null ) {
            $subCategory->image = "null";
        } else {
            $fileName = $req->file('meter_number')->getClientOriginalName();
            $filePath = $req->file('meter_number')->storeAs('users', $fileName, 'public');
            $testing->meter_number = '/storage/' . $filePath;
        }
        */


        $result = $testing -> save();
    
        if($result){
            return ["Result" => "Data has been posted successfully!"];
        }
        else{
            return ["Result" => "Operation Filed!"];
        }
    }
    
    function update(Request $req){
    
        $validator = Validator::make($req->all(), [
            'jobid' => 'required',
            'meter_number' => 'required',
        ]);
    
        if ($validator->fails()) {
            
            return response()->json([
                'errorMessage'=> true,
                'message' => $validator->errors()
            ]);
        }
    
        
        $testing = Testing::find($req -> id);

        $testing -> jobid = $req -> jobid;
        $testing -> availability = $req -> availability;
        $testing -> other_status = $req -> other_status;
        $testing -> usage = $req -> usage;
        $testing -> other_places = $req -> other_places;
        $testing -> connection_status = $req -> connection_status;
        $testing -> remarks = $req -> remarks;
        $testing -> field_officer = $req -> field_officer;
        $testing -> meter_number = $req -> meter_number;
      
        $result = $testing->save();
    
        if($result){
            return ["result" => "Data Updated!"];
        }
        else{
            return ["result" => "Update failed"];
        }
    }
    
    function delete($id){
    
        $testing = Testing::find($id);
        $result = $testing -> delete();
    
        if($result){
            return ["Result" => "Record has been deleted successfully!" .$id];
        }
        else{
            return ["Result" => "Delete operation failed!" .$id];
        }
    
    }
    
    
}
    

