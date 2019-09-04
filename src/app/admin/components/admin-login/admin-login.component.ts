import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from '../../../shared/models/interfaces/user.interface';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(undefined, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(16)])
  });

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    const user: IUser = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.authService.login(user).subscribe(() => {
      this.router.navigate(['admin', 'dashboard']);
    });
  }
}
