import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AllHeroesComponent} from "./components/all-heroes/all-heroes.component";
import {TitleComponent} from "./components/title/title.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AllHeroesComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heroes';
}
