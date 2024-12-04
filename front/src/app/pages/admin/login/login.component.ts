import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {

  loginObj: any = {
    userName:'',
    password:""
  };
  constructor(private router: Router){}
  onLogin(){

    if(this.loginObj.userName == "admin" && this.loginObj.password == "1234"){
      this.router.navigateByUrl('/products')
    }else{
      alert('Wrong Credentials')
    }
  }
  // onLogin() {
  //   // Here you would typically have a check for authentication (e.g., a service call)
  //   // For now, we are just directly navigating to the products page
  //   this.router.navigate(['/products']);
  // }

}
