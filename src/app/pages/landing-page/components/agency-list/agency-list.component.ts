import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Agency } from './agency-list.model';

@Component({
  selector: 'app-agency-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './agency-list.component.html',
  styleUrl: './agency-list.component.css'
})
export class AgencyListComponent {

  agencies: Agency[] = [

    {
      id: 1,
      name: "Ramson Transportations",
      phoneNumber: "0625048203",
      profileImage: "assets/Road-Transportation.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Deborah Catering",
      phoneNumber: "0625048203",
      profileImage: "assets/cultural-cuisine.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Wasafi Cleaning Service",
      phoneNumber: "0625048203",
      profileImage: "assets/shutterstock_1934018414-1-1-800x534-1.jpeg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Loundry Service",
      phoneNumber: "0625048203",
      profileImage: "assets/loundry.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Mandonga Security Service",
      phoneNumber: "0625048203",
      profileImage: "assets/security.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Ramson Transportations",
      phoneNumber: "0625048203",
      profileImage: "assets/Road-Transportation.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Deborah Catering",
      phoneNumber: "0625048203",
      profileImage: "assets/cultural-cuisine.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Wasafi Cleaning Service",
      phoneNumber: "0625048203",
      profileImage: "assets/shutterstock_1934018414-1-1-800x534-1.jpeg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Loundry Service",
      phoneNumber: "0625048203",
      profileImage: "assets/loundry.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Mandonga Security Service",
      phoneNumber: "0625048203",
      profileImage: "assets/security.jpg",
      location: 'Arusha'
    },{
      id: 1,
      name: "Ramson Transportations",
      phoneNumber: "0625048203",
      profileImage: "assets/Road-Transportation.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Deborah Catering",
      phoneNumber: "0625048203",
      profileImage: "assets/cultural-cuisine.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Wasafi Cleaning Service",
      phoneNumber: "0625048203",
      profileImage: "assets/shutterstock_1934018414-1-1-800x534-1.jpeg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Loundry Service",
      phoneNumber: "0625048203",
      profileImage: "assets/loundry.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Mandonga Security Service",
      phoneNumber: "0625048203",
      profileImage: "assets/security.jpg",
      location: 'Arusha'
    },{
      id: 1,
      name: "Ramson Transportations",
      phoneNumber: "0625048203",
      profileImage: "assets/Road-Transportation.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Deborah Catering",
      phoneNumber: "0625048203",
      profileImage: "assets/cultural-cuisine.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Wasafi Cleaning Service",
      phoneNumber: "0625048203",
      profileImage: "assets/shutterstock_1934018414-1-1-800x534-1.jpeg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Loundry Service",
      phoneNumber: "0625048203",
      profileImage: "assets/loundry.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Mandonga Security Service",
      phoneNumber: "0625048203",
      profileImage: "assets/security.jpg",
      location: 'Arusha'
    },{
      id: 1,
      name: "Ramson Transportations",
      phoneNumber: "0625048203",
      profileImage: "assets/Road-Transportation.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Deborah Catering",
      phoneNumber: "0625048203",
      profileImage: "assets/cultural-cuisine.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Wasafi Cleaning Service",
      phoneNumber: "0625048203",
      profileImage: "assets/shutterstock_1934018414-1-1-800x534-1.jpeg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Loundry Service",
      phoneNumber: "0625048203",
      profileImage: "assets/loundry.jpg",
      location: 'Arusha'
    },
    {
      id: 1,
      name: "Mandonga Security Service",
      phoneNumber: "0625048203",
      profileImage: "assets/security.jpg",
      location: 'Arusha'
    },
  ]

}
