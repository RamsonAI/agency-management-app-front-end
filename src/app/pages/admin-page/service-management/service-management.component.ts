import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-management',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-management.component.html',
  styleUrl: './service-management.component.css'
})
export class ServiceManagementComponent {

}
