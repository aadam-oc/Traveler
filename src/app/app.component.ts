// AppComponent sense components no utilitzats
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OpenaiService } from './services/openai.service';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    ChatComponent,
  ],
  providers: [OpenaiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Traveler';
  responseText: string = '';
  
  constructor(private openAiService: OpenaiService,) {}

  ngOnInit() {
    this.openAiService.getHaiku().subscribe((response: { choices: { message: { content: string } }[] }) => {
      this.responseText = response.choices[0].message.content; 
    });
  }
}