import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Post } from '../app.type';
import { PostCardComponent } from '../post-card/post-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  posts: Post[] = [];
  private subscribePosts!: Subscription;
  constructor(readonly appService: AppService) {
    this.showPosts();
  }

  ngOnDestroy(): void {
    this.subscribePosts.unsubscribe();
  }

  showPosts() {
    this.subscribePosts = this.appService.getPosts().subscribe((value) => {
      this.posts = value;
    });
  }
}
