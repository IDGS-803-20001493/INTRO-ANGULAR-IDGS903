import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  alumnoForm!:FormGroup;
  matricula!:string;
  nombre!:string;
  edad!:string;
  correo!:string;
  pago!:string;
  foto!:string;
  calif!:string;



  constructor(private readonly fB:FormBuilder) {
    this.alumnoForm=this.initForm();
  } 

  onSubmit():void{
    //console.log('Form-> ', this.alumnoForm.value);
    this.obtenerValores();
  }

  obtenerValores():void{
    const mat=this.alumnoForm.get('matricula')?.value
    const nom=this.alumnoForm.get('nombre')?.value
    const edad=this.alumnoForm.get('edad')?.value
    const correo=this.alumnoForm.get('correo')?.value
    const pago=this.alumnoForm.get('pago')?.value
    const foto=this.alumnoForm.get('foto')?.value
    const calif=this.alumnoForm.get('calif')?.value


    this.matricula = mat;
    this.nombre = nom;
    this.edad = edad;
    this.correo = correo;
    this.pago = pago;
    this.foto = foto;
    this.calif = calif;

    console.log('matricula: ' , mat);
    console.log('Nombre:' , nom);
  }

  initForm():FormGroup{
    return this.fB.group({
      matricula:['',[Validators.required,Validators.minLength(3)]],
      nombre:['',[Validators.required, Validators.minLength(3)]],
      edad:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      correo:['',[Validators.required]],
      pago:['',[Validators.required]],
      foto:['',[Validators.required]],
      calif:['',[Validators.required]],
    })
  }
}
