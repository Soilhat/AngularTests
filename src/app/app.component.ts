import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	posts = [
	  {
	  	title: 'Mon premier post',
	  	description: 'Quelque chose d\'interessant'
	  },
	  {
	  	title: 'Deuxieme post',
	  	description: 'Quelque chose de passionnant'
	  }
	];

	constructor(){

	}
}
