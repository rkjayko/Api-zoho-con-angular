import { Component, OnInit, Input } from '@angular/core';
import { createUser } from "../../model/createUser";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, FormGroup, FormControl, Validators,FormBuilder  }   from '@angular/forms';
import { TicketBDService } from "../../services/TicketBD.service";
import Swal from 'sweetalert2';


@Component({
 selector: 'createUser-tag',
 templateUrl: './createUser.component.html',
 styleUrls: ['./createUser.component.css'],
 providers: [TicketBDService]
})



export class createUserComponent implements OnInit  {
 userForm : FormGroup;
 usuario : any = {};
 createUser: createUser[];

  constructor(private route: ActivatedRoute, private ticketBDService:TicketBDService,private form: FormBuilder) { }

  ngOnInit() {
  	   this.userForm = this.form.group({
       firstName: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
       lastName:['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
       email:['', [Validators.required,Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@(cidenet\.com\.co)")]]
    });
  }


getHero(): void {
this.usuario.firstName = this.userForm.getRawValue().firstName;
this.usuario.lastName = this.userForm.getRawValue().lastName;
this.usuario.ownerId = '245460000000076005';
this.usuario.email= this.userForm.getRawValue().email;


this.ticketBDService.addUser(this.usuario).subscribe(
	res=>{
		this.createUser = res.payload;
        if(res.status == 'SUCCESS'){
            Swal.fire({
              type: 'success',
              title: 'Good',
              text: 'El usuario fue creado con exito!'
            })
        }else{
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'No se procesó tu solicitud: \n' + res.errorMessage
            })
        }

	});
}

  cancelCreateUser(): void{
      this.userForm.reset();
  }
}


