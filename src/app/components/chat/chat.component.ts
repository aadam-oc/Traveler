import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaiService } from '../../services/openai.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  isChatOpen = false;
  messages: { sender: string; text: string }[] = [];
  newMessage: string = '';

  constructor(private openaiService: OpenaiService) {}

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      
      this.messages.push({ sender: 'User', text: this.newMessage });

      this.openaiService.ggenerateResponse(this.newMessage).subscribe({
        next: (response: any) => {
          const botReply = response.choices[0].message.content;
          this.messages.push({ sender: 'Bot', text: botReply });
        },
        error: (err: any) => {
          console.error('Error al obtener respuesta del bot:', err);
          this.messages.push({ sender: 'Bot', text: 'Lo siento, ocurrió un error al procesar tu mensaje.' });
        }
      });

      this.newMessage = '';
    }
  }
}