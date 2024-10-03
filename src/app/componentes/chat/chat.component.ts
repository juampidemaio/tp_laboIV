import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HomeComponent } from "../home/home.component";


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HomeComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';
  currentUser: string | null = null;

  @Input() isChatVisible: boolean = true;
  @Output() chatVisibilityChange = new EventEmitter<boolean>();
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor(private chatService: ChatService, private authService: AuthenticationService) {}

  ngOnInit(): void {
    // Obtener mensajes en tiempo real
    this.chatService.getMessages().subscribe((messages) => {
      this.messages = messages;
      this.scrollToBottom(); // Desplazar hacia abajo después de cargar mensajes
    });

    // Obtener el usuario autenticado
    this.authService.getUser().subscribe(user => {
      this.currentUser = user ? user.email : null;
    });
  }

  // Enviar mensaje
  sendMessage(): void {
    if (this.newMessage.trim() !== '' && this.currentUser) {
      this.chatService.sendMessage(this.newMessage, this.currentUser);
      this.newMessage = '';
      this.scrollToBottom(); // Desplazar hacia abajo después de enviar un mensaje
    }
  }

  // Alternar visibilidad del chat
  toggleChat(): void {
    this.isChatVisible = !this.isChatVisible;
    this.chatVisibilityChange.emit(this.isChatVisible); 
  }

  // Manejar la tecla Enter
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.sendMessage();
      event.preventDefault();
    }
  }

  // Desplazamiento automático al final del contenedor de mensajes
  private scrollToBottom(): void {
    const container = this.messagesContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }
}