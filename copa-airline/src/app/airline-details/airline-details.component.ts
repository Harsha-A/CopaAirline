import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-airline-details',
  templateUrl: './airline-details.component.html',
  styleUrls: ['./airline-details.component.scss']
})
export class AirlineDetailsComponent implements OnInit {

  flightForm!: FormGroup;
  segmentForm!: FormGroup;
  constructor(public formBuilder: FormBuilder, public flightform: FormsModule) { }
  active = 1;
  flight =  {
      groupId:'',
      version:'',
      flightno:''
    };  
  clipboard='';
  dropdown = [
    {id:1,Name:"One"},
    {id:2,Name:"Two"},
    {id:3,Name:"Three"},
  ]
  ngOnInit(): void {
    this.flight.groupId = '20210522GP0000002';
    this.flight.version = 'V0001';
    this.flight.flightno = 'CM 101'
    
    this.flightForm = this.formBuilder.group({
      recordstatus: ['', [Validators.required, Validators.minLength(4)]],
      airlinecc: ['', [Validators.required]],
      flightnumber: ['', [Validators.required]],
      frequencyrate: ['', [Validators.required]],
      scheffdate: ['', [Validators.required, Validators.minLength(4)]],
      schdisdate: ['', [Validators.required]],
      schfrequency: ['', [Validators.required]],
      timemode: ['', [Validators.required]]
    }) 

    this.segmentForm = this.formBuilder.group({
      arrivalcity: ['', [Validators.required, Validators.minLength(4)]],
      aircraftsta: ['', [Validators.required]],
      paxsta: ['', [Validators.required]],
      depterminal: ['', [Validators.required]],
      arrterminal: ['', [Validators.required, Validators.minLength(4)]],
      aircraftconfig: ['', [Validators.required]],
      aircrafttype: ['', [Validators.required]],
      departurecity: ['', [Validators.required]],
      aircraftstd: ['', [Validators.required]],
      paxstd: ['', [Validators.required, Validators.minLength(4)]],
      deptimevarfromutc: ['', [Validators.required]],
      arrtimevarfromutc: ['', [Validators.required]],
      inflightadj: ['', [Validators.required]],
      eqpsertype: ['', [Validators.required]]
    }) 
  }

  copyToClip($event:Event){
    console.log($event)
    this.clipboard = this.flight.groupId
    console.log(this.clipboard)
    this.copyMessage(this.clipboard)
  }
   getControl(){
    return this.flightForm.controls;
  }
  
  onSubmit(){
    console.log(this.flightForm);
    console.log(this.segmentForm)
  }
  
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.innerText = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);    
  }
}

