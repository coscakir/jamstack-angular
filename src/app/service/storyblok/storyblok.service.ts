import { Injectable } from '@angular/core';
import Client from 'storyblok-js-client';

@Injectable({
  providedIn: 'root',
})
export class StoryblokService {
  private sbClient = new Client({
    accessToken: 'eFk8U1I9dapiX4AJep6Xwgtt',
  });

  constructor() {}

  getStory(slug: string, params?: object): Promise<any> {
    return this.sbClient.getStory(slug, params).then((res) => res.data.story);
  }

  getStories(params?: object): Promise<any> {
    return this.sbClient.getStories(params).then((res) => res.data.stories);
  }
}
