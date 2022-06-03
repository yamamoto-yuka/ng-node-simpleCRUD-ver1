import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postID: any = '';
  content: string = '';
  constructor(private service: CommonService) { }
  
  post() {
    this.service.postService(this.postID,this.content).subscribe((postData) => {
      console.log(postData)
    })
  }

  ngOnInit(): void {

  
  }

}
