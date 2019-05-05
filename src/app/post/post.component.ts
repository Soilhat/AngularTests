import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  @Input() postTitle: string;

  @Input() postDescription: string;

  @Input() loveIts: number;

  @Input() postDate: Date;

  constructor() {
  }

  ngOnInit() {
  }

  UpdateLoveIts(num){
  	this.loveIts += num;
  }
}
