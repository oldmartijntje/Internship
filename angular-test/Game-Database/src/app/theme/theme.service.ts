import { Injectable } from "@angular/core";
import { Theme, Default, dark, Purple, Pinky, Fresh, Electric } from "./theme";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private active: Theme = Default;
  private availableThemes: Theme[] = [Default, dark, Purple, Pinky, Fresh, Electric];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  tryTheme(themeName: string = 'Default'): void {
    if (themeName === Default.name) {
      this.setActiveTheme(Default);
    } else if (themeName === dark.name) {
      this.setActiveTheme(dark);
    } else if (themeName === Purple.name) {
      this.setActiveTheme(Purple);
    } else if (themeName === Pinky.name) {
      this.setActiveTheme(Pinky);
    } else if (themeName === Fresh.name) {
      this.setActiveTheme(Fresh);
    } else if (themeName === Electric.name) {
      this.setActiveTheme(Electric);
    }
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(Default);
  }

  setActiveTheme(theme: Theme = Default): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}