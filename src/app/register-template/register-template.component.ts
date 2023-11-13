import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.scss']
})
export class RegisterTemplateComponent{

	model = {
		name: '',
		lastname: '',
		username: '',
		password: '',
		email: '',
		phone: ''
	}

	validate(form: any){

		console.log(form)

	}
}
