import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TerapeuticosComponent } from './terapeuticos/terapeuticos.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { DigitalesComponent } from './digitales/digitales.component';
import { FisicoDeportivosComponent } from './fisico-deportivos/fisico-deportivos.component';
import { EducativosSocioculturalesComponent } from './educativos-socioculturales/educativos-socioculturales.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { ComunidadComponent } from './comunidad/comunidad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ServiciosComponent,
        TerapeuticosComponent,
        AdministrativosComponent,
        DigitalesComponent,
      FisicoDeportivosComponent,
    EducativosSocioculturalesComponent,
    ColaboradoresComponent,
  SobreNosotrosComponent,
  LoginComponent,
ProductosComponent,
ComunidadComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '23';
}
