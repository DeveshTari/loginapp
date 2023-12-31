import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:8081"

//   /auth/login

  constructor(private http:HttpClient) { }

// calling the server to generate token

generateToken(credentials:any){

// token generate
return this.http.post(`${this.baseUrl}/auth/login`, credentials)

}



// for login user

loginUser(token: string){

 localStorage.setItem("token", token)

return true;

}

// to check that is logged in or not
isLoggedIn(){

let token = localStorage.getItem("token");

if(token == undefined || token === '' || token == null){
  return false ;
}
else{
  return true;
}

}

//for logout the user
logout(){
  localStorage.removeItem('token')
  return true;
}

//for getting the token
getToken(){
  return localStorage.getItem("token");
}



}
