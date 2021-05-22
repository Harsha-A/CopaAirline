import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-airline-details',
  templateUrl: './airline-details.component.html',
  styleUrls: ['./airline-details.component.scss']
})
export class AirlineDetailsComponent implements OnInit {

  userForm!: FormGroup;
  constructor(public formBuilder: FormBuilder, public flightform: FormsModule) { }
flightnumber : string = "I am sample text";
active = "'nav-menu1'";
  ngOnInit(): void {
    
  }

   
   getControl(){
    return this.userForm.controls;
  }
  
  onSubmit(){
    console.log(this.userForm);
  }
  
}
