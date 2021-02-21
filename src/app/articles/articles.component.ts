import { Component, OnInit } from '@angular/core';
import { StoryblokService } from '../service/storyblok/storyblok.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  constructor(private storyblokService: StoryblokService) {}

  articles: any[] = [];

  ngOnInit(): void {
    this.getArticles();
  }

  async getArticles(): Promise<any> {
    const data = await this.storyblokService.getStories({
      version: 'draft',
      starts_with: 'articles',
    });
    this.articles = data.stories;
  }
}
