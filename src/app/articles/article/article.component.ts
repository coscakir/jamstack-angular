import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryblokService } from 'src/app/service/storyblok/storyblok.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private storyblokService: StoryblokService,
    private route: ActivatedRoute
  ) {}

  article: any = {};
  slug: string = this.route.snapshot.paramMap.get('slug') as string;

  ngOnInit(): void {
    this.getArticle();
  }

  async getArticle(): Promise<any> {
    this.article = await this.storyblokService.getStory(
      `articles/${this.slug}`,
      {
        version: 'draft',
      }
    );
  }
}
