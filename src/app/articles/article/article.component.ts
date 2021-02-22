import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
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
    private route: ActivatedRoute,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  article: any = {};
  slug: string = this.route.snapshot.paramMap.get('slug') as string;

  ngOnInit(): void {
    this.getArticle();
  }

  async getArticle(): Promise<any> {
    const startsWith = this.locale.includes('en')
      ? 'articles'
      : `${this.locale}/articles`;
    const article = await this.storyblokService.getStory(
      `${startsWith}/${this.slug}`,
      {
        version: 'draft',
      }
    );

    const author = await this.storyblokService.getStories({
      starts_with: 'authors',
      version: 'draft',
      by_uuids: article.content.author,
    });

    article.content.authorName = author[0].name;

    this.article = article;
  }
}
