import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';

export const routes: Routes = [
     // Si le ponemos 'prefix' nos va a arrojar un error en la consola de redireccion infinita
     { path: '', redirectTo: '/home', pathMatch: "full" },
     { path: 'login', component: LoginComponent},
     { path: 'home', component: HomeComponent },
     { path: 'quien-soy', component: QuienSoyComponent },
    
     // La ruta comodin debe ir siempre al final
     { path: '**', component: ErrorComponent },
     
];
