import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Correct import for Angular's Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginnob: any = {
    userName: '',
    password: ''
  };

  constructor(private router: Router) { }

  onLogin() {
    if (this.loginnob.userName === 'admin' && this.loginnob.password === '9756787874') {
      this.router.navigateByUrl('/products'); // Correct method usage for Angular's Router
    } else {
      alert('wrong credential');
    }
  }
}
