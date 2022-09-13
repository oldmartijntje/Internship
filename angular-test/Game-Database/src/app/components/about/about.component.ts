import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  missingTitle = 'Missing.Title';
  missingDescription = 'Hmm, such emptyness!';
  about = ['oldmartijntje', 'tutorial', 'rawg', 'reactgo', 'coolors', 'stack', 'angular', 'stephen', 'spotify', 'qumu', 'thefatrat'];
  aboutInfo = { 'oldmartijntje': { 'title': "OldMartijntje", 'description': 'This is me, the creator, this link goes to my github', 'url': 'https://github.com/oldmartijntje/angular-test' }, 'tutorial': { 'title': "Tutorial", 'description': 'Thanks lad, I\'ve learned something because of you', 'url': 'https://www.youtube.com/watch?v=LiOzTQAz13Q' }, 'rawg': { 'title': "Video game database", 'description': 'Well without this, it\'s an empty website', 'url': 'https://rapidapi.com/accujazz/api/rawg-video-games-database/details' }, 'reactgo': { 'title': "reactgo.com", 'description': 'This click navigate functionality', 'url': 'https://reactgo.com/angular-redirect-to-external-url/' }, 'coolors': { 'title': "Coolors.co", 'description': 'Thanks to them, without them I couldn\'t have made these bad color themes', 'url': 'https://coolors.co/' }, 'stack': { 'title': "Stackoverflow", 'description': 'Always there when you need a solution', 'url': 'https://stackoverflow.com/' }, 'angular': { 'title': "Angular.io", 'description': 'Pretty self explanetory I think', 'url': 'https://angular.io/start' }, 'stephen': { 'title': "Stephen McLean", 'description': 'Helping me with that 1 thing I had problems with', 'url': 'https://www.freecodecamp.org/news/how-to-create-themes-for-your-angular-7-apps-using-css-variables-69251690e9c5/#868f' }, 'spotify': { 'title': "Spotify", 'description': 'Creating vibrations to observe with your ears that helps you work better', 'url': 'https://open.spotify.com/' }, 'qumu': { 'title': "Qumu", 'description': 'Giving me nice remixed nintendo beats', 'url': 'https://open.spotify.com/artist/0LzeyDrlLtuyBqMSBN4z3U?si=513f62e214e541e6' }, 'thefatrat': { 'title': "The Fat Rat", 'description': 'Creating nice tunes to vibe with', 'url': 'https://open.spotify.com/artist/3OKg7YbOIatODzkRIbLJR4?si=50w55ZGhQ2SVA5haBMzfnw' } };
  aboutMe = ['why', 'why2', 'why3', 'who', 'empty', 'what', 'code', 'game'];
  aboutMeInfo = { 'why': { 'title': "Why did I make this?", 'description': 'I made this to learn angular', 'url': '' }, 'why2': { 'title': "Why do I want to learn angular?", 'description': 'Because it\s what they use at my internship', 'url': '' }, 'why3': { 'title': "Why do i use these stock images?", 'description': 'because yes', 'url': '' }, 'who': { 'title': "Who am i?", 'description': 'I am OldMartijntje', 'url': '' }, 'what': { 'title': "What do I do?", 'description': 'I write code, and I game', 'url': '' }, 'code': { 'title': "What do I code?", 'description': 'Well, click me to go to my github', 'url': 'https://github.com/oldmartijntje' }, 'game': { 'title': "What games do you play?", 'description': 'Ehhm, click me to go to my steam account, I also play Minecraft and Nintendo games', 'url': 'https://steamcommunity.com/profiles/76561199033294793/' }, 'empty': { 'title': "", 'description': '', 'url': 'https://www.youtube.com/channel/UCd9_pxx4m9KP13s1-TncLcQ' } };

  clicks = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(url: string) {
    if (url != '') {
      console.log(url);
      window.location.href = url;
    } else {

      this.clicks += 1;
      console.log(this.clicks);
      if (this.clicks == 5) {
        alert("why did you click a useless button 5 times?");
      } else if (this.clicks == 10) {
        alert("this is what i like to call consistancy");
      } else if (this.clicks > 10) {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      } else {
        alert("clicking me does nothing");
      }
    }


  }

}
