import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  missingTitle = 'Missing.Title';
  missingDescription = 'Hmm, such emptyness!';
  footerLinks = ['About', 'Homepage', 'settings', 'minecraft', 'data', 'contact', 'issue', 'footer', 'reload'];
  footerLinksInfo = { 'About': { 'title': "About", 'description': 'Click me to go to the about page :D', 'url': 'about' }, 'Homepage': { 'title': "Home Page", 'description': 'If you want to get back to the home page', 'url': '' }, 'settings': { 'title': "Settings", 'description': 'If you want to change the settings of this webpage', 'url': 'settings' }, 'minecraft': { 'title': "Minecraft", 'description': 'If you can\'t find a way by yourself to get here', 'url': 'details/22509' }, 'data': { 'title': "Please don't sell my data", 'description': '', 'url': 'data' }, 'contact': { 'title': "Contact me", 'description': 'I mean, if you want to, please, I am lonely', 'url': ['https://github.com/oldmartijntje/angular-test/issues/new'] }, 'issue': { 'title': "Open an issue", 'description': 'If you want to report something broken, or if you want to insult my themes and make me change them', 'url': ['https://github.com/oldmartijntje/angular-test/issues/new'] }, 'footer': { 'title': "The footer", 'description': 'For if you want to only see this section, and twice', 'url': 'footer' }, 'reload': { 'title': "Reload page", 'description': 'you can also just press f5', 'url': ['http://127.0.0.1:4200/'] }, };

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  quickNavigation(option) {
    if (typeof option === "string") {
      this.router.navigate([option]);
    } else {
      window.location.href = option[0]
    }
  }

}
