import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  themeSub: Subscription;
  themes: any;
  constructor(private httpClient: HttpClient, private themeService: ThemeService) { }

  ngOnInit() {
    this.themeSub = this.httpClient.get("assets/data/themes.json").subscribe(data => {
      console.log(data);
      this.themes = data;
      this.themeService.tryTheme(this.themes["activeTheme"])
    })
  }
  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }
}
