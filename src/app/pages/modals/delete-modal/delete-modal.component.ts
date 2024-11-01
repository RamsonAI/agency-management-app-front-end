import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent {

  isVisible = false;

  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();

  //show the modal

  print(){
    // console.log('clicked');
    window.open("clicked");
  }

  open(){
    this.isVisible=true;
  }

  //close the model
  close(){
    this.isVisible=false;
  }

  //emit confirm action and close the modal
  confirm(){
    this.confirmDelete.emit();
    this.close();
  }

  //emit cancel action and close the modal
  cancel(){
    this.cancelDelete.emit();
    this.close();
  }

}
