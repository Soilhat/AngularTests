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
	  	content: 'Quelque chose d\'interessant',
	  	loveIts: 0,
	  	created_at: "1993/10/14"
	  },
	  {
	  	title: 'Deuxieme post',
	  	content: 'Quelque chose de passionnant',
	  	loveIts: -3,
	  	created_at: "1997/08/16"
	  },
	  {
	  	title: 'Troisième post',
	  	content: 'La description du post',
	  	loveIts: 3,
	  	created_at: "2010/05/05"
	  }
	];

	constructor(){

	}
}
