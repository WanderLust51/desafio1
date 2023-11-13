import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.scss']
})
export class PreferenciasComponent {

  constructor(private formBuilder: FormBuilder){
    
  }
  
  preferenceForm = this.formBuilder.array([
    this.formBuilder.control(''),
  ])
  preferenceGroup = this.formBuilder.group({

    preferences: this.preferenceForm,
  
  })
  get preference() : any {
    return this.preferenceGroup.get('preferences') as FormArray
  }
  addPreference(){
    this.preferenceForm.push(this.formBuilder.control(''))
  }
  popPreference(){
    this.preferenceForm.controls.splice(this.preferenceForm.length - 1, 1)
    this.preferenceForm.value.splice(this.preferenceForm.length - 1, 1)
  }
  mostrar(){
    console.log(this.preference.value)
  }

  

}
