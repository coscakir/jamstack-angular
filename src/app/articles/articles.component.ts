import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { StoryblokService } from '../service/storyblok/storyblok.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  constructor(
    private storyblokService: StoryblokService,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  articles: any[] = [];

  ngOnInit(): void {
    this.getArticles();
  }

  async getArticles(): Promise<any> {
    const startsWith = this.locale.includes('en')
      ? 'articles'
      : `${this.locale}/articles`;
    const articles = await this.storyblokService.getStories({
      version: 'draft',
      starts_with: startsWith,
    });

    for await (const [index, article] of articles.entries()) {
      const author = await this.storyblokService.getStories({
        starts_with: 'authors',
        version: 'draft',
        by_uuids: article.content.author,
      });

      articles[index].content.authorName = author[0].name;
      articles[index].content.authorImage = author[0].content.Image.filename;
    }

    this.articles = articles;
  }
}
