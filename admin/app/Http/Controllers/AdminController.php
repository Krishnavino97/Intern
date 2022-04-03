<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

use App\Models\Admin;

use Mail;

class AdminController extends Controller 
{


    public function addAdmin(Request $req)
    {
        $validator = validator::make($req->all(), [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()){
            return  response([
                'errorMessage' => true,
                'message' => $validator->errors()
            ]);
        }

        $result = Admin::where('email', $req->email)->first();

        if($result){
            return response([
                'errorMessage' => true,
                'message'  => "Email Already Registered!!!"
            ]);
        }

        $adminModel = new Admin;

        $adminModel->name = $req->name;
        $adminModel->email = $req->email;
        $adminModel->password = Hash::make($req->password);

        $result = $adminModel->save();

        $emailData = [
            'FirstName' => $adminModel->name,
            'Email' => $adminModel->email,
            'subject' => "Your account has been created successfully!",
            'fromEmail' => "DCA@gmail.com",
            'fromName' => "DCA"
        ];

        $data = array('FirstName'=> $adminModel->name, 'Email'=> $adminModel->email);

        Mail::send('VerifyEmail', $data, function($message) use ($emailData){
            $message->to( $emailData['Email'], 
            $emailData['FirstName'])->subject($emailData['subject']);
            $message->from( $emailData['fromEmail'],$emailData['fromName']);
    });

        return response([
            'errorMessage' => false,
            'message' => "Account has been created!"
        ]);
    }





    function login(Request $request){
        $admin = Admin::where('email', $request->email)->first();

        if (!$admin || Hash::check($request->password, $admin->password)){
            return response([
                'message' => ['These credentials do not match our records'],
            ], 404);
        }

        $token = admin->createToken('my-app-token')->plainTextToken;

        $response = [
            'admin' => $admin,
            'token' => $token
        ];

        return response($response, 201);
    }







    function forgetPasswordOTP(Request $req){

        $email = $req->email;
        $admin = Admin::where('email', $req->email)->first();
       
        if( is_null($admin)){
            return response([
                'errorMessage' => true,
                'message' => 'User is not found'
            ]);
        }
       
            //getting otp from generate random string function
            $otp = $this->generateRandomString();

            $admin->otp = $otp;
            $result = $admin->save();

                if(!$result){
                    return response([
                        'errorMessage' => true,
                        'message' => 'Otp has not been added in Database'
                    ]);
                }
  
            $emailData = [
                'email' => $admin->email,
                'OTP'=> $otp,
                'subject' => "OTP has been sent!",
                'fromEmail' => "mangakiku@gmail.com",
                'fromName' => "DCA"
            ];  
  
            $data = array('email'=> $admin->email,'OTP'=> $otp);

            Mail::send('OtpValidate', $data, function($message) use ($emailData){
                $message->to( $emailData['email'],
                $emailData['OTP'])->subject($emailData['subject']);
                $message->from( $emailData['fromEmail'],$emailData['fromName']);
            });
        

            return response([
                'errorMessage' => false,
                'message' => "OTP has sent sucessfuly!!"
            ]);
    }





    function forgetPasswordOTPValidate(Request $req){

        $admin = Admin::where('email', $req->email)->first();
         
        if (!$admin || $req->otp != $admin->otp) {
            return response([
                'errorMessage' => true,
                'message' => 'Email or Otp incorrect'
            ]);
        }

            $admin->password = Hash::make($req->newPassword);

            $result  = $admin ->save();
            return response([
                'errorMessage' => false,
                'message' => " Changed successfully!!!"
            ]);
    }





    
    function generateRandomString($length = 8) {
            
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            return $randomString;
    }





    function viewAdmin(){
        return Admin::all();
    }





    function updateAdmin(request $req){

        $validator = Validator::make($req->all(), [
            'name' => 'string',
            'email' => 'email',
            'password' => 'string',  
        ]);

        if ($validator->fails()) {
            return response([
                'errorMessage' => true,
                'message' => $validator->errors()
            ]);
        }

        else {
            $adminModel = new Admin;

            $adminModel->name = $req->name;
            $adminModel->email = $req->email;
            $adminModel->password = $req->password;

            $adminModel->save();
        }
    }

}