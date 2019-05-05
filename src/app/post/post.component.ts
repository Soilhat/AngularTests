import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() postTitle: string;

  @Input() postDescription: string;

  loveIts;

  constructor() {
  	this.loveIts = 0;
  }

  ngOnInit() {
  }

  UpdateLoveIts(num){
  	this.loveIts += num;
  }
}
