import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'app/User';
import { credentials } from 'app/models/Credentials';
import { ServiceService } from 'app/service.service';
import { Router } from '@angular/router';
import { loginResponse } from 'app/models/LoginResponse';
 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  newUser: User;
  
  
 

  form: FormGroup = new FormGroup({
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
    
  });


  test: boolean = false;
  testValidation: boolean = false;

 registerUser(newUser: User): void {
  if (this.form.valid) {
    this.userService.register(newUser).subscribe({
      next: (response: any) => {
        location.reload();

        console.log(response);
        
      },
      error: (error: any) => {
        console.error('Error:', error);

        if (error.error.message === 'Login already exists') {
          this.errorMessage = 'Login already exists';
          console.log('errorMessage:', this.errorMessage); 
          this.onReset(); // Reset the form
        } else {
          console.error('Unexpected error:', error);
        }
      }
    });

  } else if (this.form.invalid) {
    console.log('Form is invalid:', this.form);
    console.log('Form errors:', this.form.errors);
    console.log('First name errors:', this.form.get('firstName').errors);
    console.log('Last name errors:', this.form.get('lastName').errors);
    console.log('Login errors:', this.form.get('login').errors);
    console.log('Password errors:', this.form.get('password').errors);

    setTimeout(() => {
      this.errorMessage = '';  // Clear the errorMessage after 6 seconds
      this.onReset(); // Reset the form
    }, 6000);
  }
}

  
  









  hide = true;
  submitted = false;

  constructor(
    private userService: ServiceService, 
    private router: Router, 
    private formBuilder: FormBuilder
  ) {
    this.newUser = { firstName: '', lastName: '', login: '', password: '' };
  }
  ngOnInit(): void {
    // Initialize form with formBuilder
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
      login: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      
    });

    // jQuery code moved to a separate method
    this.initLoginPanel();
  }

  initLoginPanel(): void {
    // jQuery code for login panel
    $(document).ready(() => {
      $('.login-info-box').fadeOut();
      $('.login-show').addClass('show-log-panel');
    });

    $('.login-reg-panel input[type="radio"]').on('change', function() {
      if ($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut();
        $('.login-info-box').fadeIn();

        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');
      } else if ($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();

        $('.white-panel').removeClass('right-log');
        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
      }
    });
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
  
    if (this.form.invalid) {
      return;
    }
  
    this.newUser2.login = this.form.value.login;
    this.newUser2.password = this.form.value.password;
  
    console.log('New user credentials:', this.newUser2);  // Log the newUser2 object
  
    this.loginUser(this.newUser2);
  }
  

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  







  newUser2: credentials = {
    login: "",
    password: ""
  };
  errorMessage: string = '';

  loginUser(newUser2: credentials): void {
    console.log('Attempting to login with:', newUser2);
  
    // Check if login or password is empty
    if (!newUser2.login || !newUser2.password) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      console.log('errorMessage:', this.errorMessage);
      this.onReset(); // Reset the form
      return; // Exit the function if either input is empty
    }
  
    this.userService.login(newUser2).subscribe({
      next: (resp: loginResponse) => {
        this.router.navigate(['/dashboard']);
        var token = resp.token;
        document.cookie = `token=${token}; path=/; expires=`;
        document.cookie =`user=${JSON.stringify(resp)};`; 
      },
      error: (error: any) => {
        console.error('Error:', error);
        console.log('HTTP Error Response:', error.error);
  
        if (error.error.message === 'Unknown user') {
          this.errorMessage = 'Unknown user';
          console.log('errorMessage:', this.errorMessage);
          setTimeout(() => {
            this.errorMessage = ''; // Clear the errorMessage after 2 seconds
          }, 2000);
          this.onReset(); // Reset the form
        } else if (error.error.message === 'Invalid password') {
          this.errorMessage = 'Invalid password';
          console.log('errorMessage:', this.errorMessage);
          setTimeout(() => {
            this.errorMessage = ''; // Clear the errorMessage after 2 seconds
          }, 2000);
          this.onReset(); // Reset the form
        } else {
          console.error('Unexpected error:', error);
        }
      }
    });
  }
  
  
  
  
  
   






 

}
