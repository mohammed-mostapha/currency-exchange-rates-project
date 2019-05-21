import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  
  // this property has to be false by default
  submitted:boolean = false;
  // this property has to be false by default
  success:boolean = false;

  constructor( private formBuilder: FormBuilder ) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
   }


   onSubmit() {
     // to distinguish whether it is submitted or not.
     this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }
    // if eveything is fulfilled , then success = true.
    this.success = true;

   }


  ngOnInit() {
  }

}
