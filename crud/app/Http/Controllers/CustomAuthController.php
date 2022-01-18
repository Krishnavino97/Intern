<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Hash;
use Session;

class CustomAuthController extends Controller
{
    public function login(){
        return view('auth.login');
    }

    public function registration(){
        return view('auth.registration');
    }

    //to get some data through post -> Request $request
    public function registerUser(Request $request){
        echo 'Value Added';
        $request->validate([
            'name'=>'required',
            'email'=>'required|email|unique:users',
            'password'=>'required|min:5|max:12',
        ]);

        $user = new User();
        $user -> name = $request -> name;
        $user -> email = $request -> email;
        $user ->password = Hash::make($request -> password); 
        $res = $user -> save(); //save the data into the
         if($res){
             return back() -> with ('success', 'You have registered Successfully!!!');
         }
        else {
            return back() -> with ('fail', "Something is Wrong!!!");
        }
    }


    public function LoginUser(Request $request){
       $request->validate([ 
           'email'=>'required|email',
           'password' => 'required|min:5,max:12',
       ]);

      $user = User::where('email', '=', $request -> email)-> first();
      if($user){
          if(Hash::check($request->password, $user -> password)){
                $request->session('LoginId', $user->id);
                return redirect ('dashboard');
          }
          else{
              return back() -> with('fail', "The password isn't correct");
          }
      }
      else{
          return back() -> with ('fail', "The email is not regisered");
      }
    }

    public function dashboard(){
      //  return "Welcome";
        
       // return view('dashboard') ;
        $data = array();
        if(Session::has('loginId')){
            $data = User::where('id', '=', Session::get('loginId'))->first();
        }
        return view('dashboard', compact('data'));
        
    }

    public function logout(){
        if(Session::has('loginId')) {
            Session::pull('loginId');
            return redirect('login');
        }
    }
    
    function list() {
        return User::all();
}
}