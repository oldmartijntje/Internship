import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRating = 0;
  gameId: string;
  game: Game;
  routeSub: Subscription;
  gameSub: Subscription;
  gameIdNumber: number;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.gameIdNumber = +this.gameId;
      this.getGameDetails(this.gameId);
    })
  }

  getGameDetails(id: string): void {
    this.gameSub = this.httpService.getGameDetails(id).subscribe((gameResp: Game) => {
      this.game = gameResp;

      setTimeout(() => { this.gameRating = this.game.metacritic; }, 1000);
    });
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }

  }

  navigation(change: number = 1, plus: boolean = true): void {
    var y: number = +this.game.id;
    if (plus) {
      this.router.navigate(['details', y + change]);
    } else {
      this.router.navigate(['details', change]);
    }

  }

  randomGame(min: number = 0, max: number = 843000): void {
    min = Math.ceil(min);
    max = Math.floor(max);
    var id: number = Math.floor(Math.random() * (max - min + 1)) + min;
    this.router.navigate(['details', id]);
  }

  search(thing: string): void {
    this.router.navigate(['search', thing])
  }

}
