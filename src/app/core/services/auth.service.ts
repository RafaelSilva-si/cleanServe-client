import { Injectable } from '@angular/core';
import { IUserAuth } from 'src/app/shared/models/user-auth.interface';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'access_token';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private toastr: ToastrService
  ) {}

  login(user: IUserAuth) {
    const token = this.apiService.post('login', user).subscribe(
      (response) => {
        if (response && response.access_token) {
          localStorage.setItem(this.tokenKey, response.access_token);
          const decodedToken = this.jwtHelper.decodeToken(
            response.access_token
          );
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.toastr.error(error.error.message, 'Erro');
      }
    );
  }

  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem(this.tokenKey));
  }

  logout(): void {}
}
