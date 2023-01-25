import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  userId: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userId = this.activatedRoute.snapshot.params['id'];
  }
  loginForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{4}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
  });

  name:any;

  get getName() {
    return this.loginForm.controls['name'];
  }
  get getEmail() {
    return this.loginForm.controls['email'];
  }
  get getPassword() {
    return this.loginForm.controls['password'];
  }
  
  login(e: any) {
    if (this.loginForm.status == 'VALID') {
      if(this.userId){
       
        this.userService.edit(this.userId,this.loginForm.value).subscribe((response) => {
          console.log(response);
          
        })
      }else{
        this.userService.add(this.loginForm.value).subscribe((response) => {
        console.log(response);
      });
      }
      
      this.router.navigate(['/user']);
    } else {
      console.log('Error !!');
    }
  }
}
