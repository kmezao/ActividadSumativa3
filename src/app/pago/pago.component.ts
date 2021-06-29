import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  reactiveForm: FormGroup;
  submitted:boolean= false;

  constructor(private formBuilder: FormBuilder) { 
    this.reactiveForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, 
        Validators.minLength(3), Validators.maxLength(30)]),
      last: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.email,
      Validators.required]),
      address: new FormControl(null, [Validators.required,
      Validators.maxLength(50), Validators.minLength(3)]),
      postal: new FormControl(null, [Validators.required, 
        Validators.minLength(7), Validators.maxLength(7)]),
      ccta: new FormControl(null, [Validators.required, 
        Validators.minLength(3)]),
      cta: new FormControl(null, [Validators.required,
      Validators.minLength(13), Validators.maxLength(18)]),
      date: new FormControl(null, [Validators.required, 
        Validators.minLength(5), Validators.maxLength(5)]),
      cvv: new FormControl(null, [Validators.required, 
        Validators.minLength(3), Validators.maxLength(3)])
    })
  }

  get f (){return this.reactiveForm.controls}

  onSubmit(){
    this.submitted = true;
    if(this.reactiveForm.invalid){
      return;
    }
  }

  ngOnInit() {
  }

  

}


