import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css'],
})
export class LangSelectorComponent implements OnInit {
  constructor() {}

  language: string | undefined = 'English';
  locale = '';

  languages = [
    { code: 'en', label: 'English' },
    { code: 'tr', label: 'Turkish' },
  ];

  ngOnInit(): void {
    this.locale = window.location.pathname.split('/')[1];
    this.language = this.languages.find(
      (lang) => lang.code === this.locale
    )?.label;
  }

  updateLocation(value: string): void {
    window.location.replace(`${window.location.origin}/${value}`);
  }
}
