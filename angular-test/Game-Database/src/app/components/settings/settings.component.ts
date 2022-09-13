import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from "src/app/theme/theme.service";
import { Theme, Default, dark, Purple, Pinky, Fresh, Electric } from "../../theme/theme";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  themes = [Default, dark, Purple, Pinky, Fresh, Electric];
  themeSub: Subscription;
  missingTitle = 'Missing.Title'
  missingDescription = 'Hmm, such emptyness!'



  constructor(private themeService: ThemeService) { }
  ngOnInit() {

  }
  ngOnDestroy(): void {

  }
  changeTheme(theme: string = 'Default') {
    this.themeService.tryTheme(theme);

  }
}