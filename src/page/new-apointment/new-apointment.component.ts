import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-apointment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-apointment.component.html',
  styleUrl: './new-apointment.component.scss'
})
export class NewApointmentComponent {
  appointment = {
    patientName: '',
    email: '',
    mobileno: '',
    city: '',
    address: '',
    appointmentDate: new Date(),
  };
}
