import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUser } from 'app/models/UpdateUser';
import { ServiceService } from 'app/service.service';
 
 
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  userId: number;
  email: "";

  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: ServiceService,
   private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      login: ['', Validators.required],
      adress: ['', Validators.required],
      numero: ['', Validators.required],
    });
  }
 
 

  ngOnInit(): void {
    // Get userId from cookie
    const user = JSON.parse(this.getCookie('user'));
    this.userId = user.id;
    this.email = user.login
    // Fetch user data
    this.userService.getUserById(this.userId).subscribe(
      (data: any) => {
        // Populate form controls with retrieved values
        this.form.patchValue({
          firstName: data.firstName,
          lastName: data.lastName,
          login: data.login,
          adress: data.adress,
          numero: data.numero,
        });
      },
      error => {
        console.error('Error fetching user:', error);
      }
    );
  }

 onSubmit(): void {
  this.submitted = true;

  if (this.form.invalid) {
    return;
  }

  const userId = JSON.parse(this.getCookie('user')).id; // Replace with the actual user ID
  console.log(userId);

  const updatedUser: UpdateUser = {
    firstName: this.form.get('firstName')?.value,
    lastName: this.form.get('lastName')?.value,
    login: this.form.get('login')?.value,
    adress: this.form.get('adress')?.value,
    numero: this.form.get('numero')?.value,
    password: ''
  };

  // Update user directly within onSubmit
  this.userService.updateUser(updatedUser).subscribe(
    (response) => {
      console.log('User updated successfully:', response);
      // Reset form and submitted flag
      this.submitted = false;

      // Show success message
      this.snackBar.open('Mise à jour réussie !', 'Close', {
        duration: 2000,  // Duration in milliseconds
        panelClass: ['success-snackbar'],  // Optional CSS classes
        verticalPosition: 'top',  // Center vertically
        horizontalPosition: 'center'  // Center horizontally
      });
    },
    error => {
      console.error('Error updating user:', error);
    }
  );
}

  
  


 



 





  getCookie(name: string): string {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
