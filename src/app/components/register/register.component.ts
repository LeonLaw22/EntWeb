import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
    ) { 
      this.RegisterForm = this.fb.group({
        name: [''],
        email: [''],
        mobile: [''],
        password: ['']
      }) 
    }

  ngOnInit(): void {
  }
  registerUser() {
    this.authService.signUp(this.RegisterForm.value).subscribe((res) => {
      if (res.result) {
        this.RegisterForm.reset()
        this.router.navigate(['login']);
      }
    })
  }
}
