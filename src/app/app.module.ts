import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteInicialComponent } from './componente-inicial/componente-inicial.component';
import { ComponenteSecundarioComponent } from './componente-secundario/componente-secundario.component';
import { FormsModule } from '@angular/forms';
import { HermanoDeInicialComponent } from './hermano-de-inicial/hermano-de-inicial.component';
import { DirectivaDeBotonDirective } from './directiva-de-boton.directive';
import { PrimerPipePipe } from './primer-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteInicialComponent,
    ComponenteSecundarioComponent,
    HermanoDeInicialComponent,
    DirectivaDeBotonDirective,
    PrimerPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
