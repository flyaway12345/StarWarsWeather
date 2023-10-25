import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarWarsWeatherComponent } from './star-wars-weather/star-wars-weather.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { DiscordComponent } from './app/discord/discord.component';
import { SocialsComponent } from './app/socials/socials.component';
import { LiveComponent } from './app/live/live.component';

@NgModule({
  declarations: [
    AppComponent,
    StarWarsWeatherComponent,
    FooterComponent,
    HeaderComponent,
    DiscordComponent,
    LiveComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
