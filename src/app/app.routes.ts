import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TerapeuticosComponent } from './terapeuticos/terapeuticos.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { DigitalesComponent } from './digitales/digitales.component';
import { FisicoDeportivosComponent } from './fisico-deportivos/fisico-deportivos.component';
import { EducativosSocioculturalesComponent } from './educativos-socioculturales/educativos-socioculturales.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';


export const routes: Routes = [
    { path: 'servicios', component: ServiciosComponent },
    { path: 'terapeuticos', component: TerapeuticosComponent },
    {path: 'administrativos', component: AdministrativosComponent},
    {path: 'digitales', component: DigitalesComponent},
    {path: 'fisico-deportivos', component: FisicoDeportivosComponent},
    {path: 'educativos-socioculturales', component: EducativosSocioculturalesComponent},
    {path: 'colaboradores', component: ColaboradoresComponent},
    {path: 'sobre-nosotros', component: SobreNosotrosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'home', component: HomeComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'login', component: LoginComponent},
    { path: '**', redirectTo: '' },

];

export class AppRoutingModule { }