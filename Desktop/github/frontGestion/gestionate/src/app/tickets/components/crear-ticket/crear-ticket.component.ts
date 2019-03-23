import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder }   from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TicketBDService } from "../../services/TicketBD.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css'],
  providers: [TicketBDService]
})
export class CrearTicketComponent implements OnInit {

  ticketForm: FormGroup;
  ticket: any;
  constructor(private route: ActivatedRoute, private ticketBDService:TicketBDService, private form: FormBuilder) { }
    
  ngOnInit() {
    this.ticketForm = this.form.group({
      subCategory: ['', Validators.required],
      fecha: ['', Validators.required],
      contactid: ['', Validators.required],
      subject: ['', Validators.required],
      description: ['', Validators.required],
      classification: [''],
      assigneeid: [''],
      email: ['', Validators.required],
      departmentid: ['', Validators.required]
    });
  }

  createTicket():void {
    this.ticket = this.extraerDataForm();
    this.ticketBDService.addTicket(this.ticket).subscribe(
	res=>{
        if(res.status == 'SUCCESS'){
            Swal.fire({
              type: 'success',
              title: 'Good',
              text: 'Tu ticket fue creado!'
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

  extraerDataForm() {
    var date = new Date();
    const ticket = {
      dueDate: this.ticketForm.get('fecha').value + 'T' + date.getHours() + ':' + date.getMinutes() + ':00.000Z',
      subCategory: this.ticketForm.get('subCategory').value,
      contactId: this.ticketForm.get('contactid').value,
      subject: this.ticketForm.get('subject').value,
      departmentId: this.ticketForm.get('departmentid').value,
      description: this.ticketForm.get('description').value,
      classification: this.ticketForm.get('classification').value,
      assigneeId: this.ticketForm.get('assigneeid').value,
      email: this.ticketForm.get('email').value,
      status: 'Open'
    };
    return ticket;
  }

  cancelCreateTicket(): void{
      this.ticketForm.reset();
  }

}
