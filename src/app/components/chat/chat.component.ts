import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.
// Removed FormsModule import as it should be included in the NgModule instead.

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports: [
    FormsModule, 
    CommonModule 
  ],
})
export class ChatComponent {
  contactoSeleccionado: any;
  mensajes: { sender: string; text: string }[] = [];
  nuevoMensaje: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ChatComponent>
  ) {
    this.contactoSeleccionado = data.contacto;
  }

  enviarMensaje() {
    if (this.nuevoMensaje.trim()) {
      this.mensajes.push({ sender: 'Admin', text: this.nuevoMensaje });
      this.nuevoMensaje = '';
    }
  }

  cerrarChat() {
    this.dialogRef.close();
  }
}