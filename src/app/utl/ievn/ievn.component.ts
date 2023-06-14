import { Component } from '@angular/core';

@Component({
  selector: 'app-ievn',
  templateUrl: './ievn.component.html',
  styleUrls: ['./ievn.component.css']
})
export class IevnComponent {

  
  
  alumnos:any[] = [{
    "matricula":1234,
    "nombre":'Armando',
    "edad":23,
    "Correo":'ejemplo@gmail.com',
    "pago":123.45,
    "foto":"https://th.bing.com/th/id/R.26db6672bad0f7f5eaad8eb46c511f81?rik=%2b0ISU0KrZaXNzA&pid=ImgRaw&r=0"
  },
  {
    "matricula":3456,
    "nombre":'otro vato',
    "edad":80,
    "Correo":'ejemplo2@gmail.com',
    "pago":138.34,
    "foto":"https://th.bing.com/th/id/R.26db6672bad0f7f5eaad8eb46c511f81?rik=%2b0ISU0KrZaXNzA&pid=ImgRaw&r=0"
  },
  {
    "matricula":4858,
    "nombre":'un gato',
    "edad":40,
    "Correo":'gato@gmail.com',
    "pago":20.00,
    "foto":"https://th.bing.com/th/id/R.26db6672bad0f7f5eaad8eb46c511f81?rik=%2b0ISU0KrZaXNzA&pid=ImgRaw&r=0"
  }
  ]
  
}
