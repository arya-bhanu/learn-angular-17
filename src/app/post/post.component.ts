import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Post } from '../app.type';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  postId!: number | null;
  post$!: Observable<Post>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly appService: AppService
  ) {}
  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.post$ = this.appService.getPost(this.postId || 0).pipe();
  }
}
