import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  profileForm2 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.warn(this.profileForm2.value);
  }

  
}

