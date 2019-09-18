import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(uName:string,pwd:string){    
    var obj = {
      userName:uName,
      password:pwd
    }
    this.http.post('http://localhost:1123/user/login',obj).subscribe((res)=>{
        console.log(res);
    })
  }
  signUp(user:User){
    this.http.post('http://localhost:1123/user/signup',user).subscribe((res)=>{
      console.log(res);
    })
  }

}
