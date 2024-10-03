import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { AuthGuard } from '@angular/fire/auth-guard';
import { PuntajesComponent } from './componentes/puntajes/puntajes.component';



export const routes: Routes = [

     { path: '', redirectTo: '/home', pathMatch: "full" },
     { path: 'login', component: LoginComponent},
     { path: 'home', component: HomeComponent },
     { path: 'quien-soy', component: QuienSoyComponent },
     { path: 'registro', component: RegistroComponent },
     { path: 'chat', component: ChatComponent},
     { path: 'puntaje', component: PuntajesComponent},

     

     {
          path:"juegos",
          loadChildren: () => import('./modules/juegos/juegos.module').then(m => m.JuegosModule)
     },
    
     // La ruta comodin debe ir siempre al final
     { path: '**', component: ErrorComponent },


     
];
