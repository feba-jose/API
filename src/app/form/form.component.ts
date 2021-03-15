import { Component, OnInit } from '@angular/core';
import { FormServiceService } from './form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(public formService: FormServiceService) {}

  ngOnInit() {}

  saveData() {
    this.formService.save(this.email, this.password).subscribe(
      (data) => console.log('API responce : ', data),
      (err) => {
        console.log('API error occurred Error : ', err);
        alert(err); 
      }
    );
  }
}
