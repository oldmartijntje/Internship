import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string;
  public games: Array<Game>;
  private routeSub: Subscription;
  private gameSub: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  currentPage: number;
  lastPage: number;
  page: number;
  sorting: string;
  search: string;
  amountPerPage: number;

  //look if there is a route in the url
  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      var sort = '-added'
      var search = ''
      var page = 1
      if (params['game-search']) {
        search = params['game-search']
      }
      if (params['page']) {
        page = params['page']
      }
      if (params['ordering']) {
        sort = params['ordering']
      }
      this.currentPage = page
      this.searchGames(sort, search, page);
    });
  }
  //Released, Added, Created, Updated, Rating, Metacrit
  searchGames(sort: string = '', search: string = '', page: number = 0, amountPerPage: number = 20): void {
    if (search == '') {
      this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
        if (params['game-search'] != '') {
          search = params['game-search'];
        }
      })
      if (sort == '-added') {
        this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
          if (params['ordering'] != '') {
            sort = params['ordering'];
          }
        })
        if (page == 0) {
          this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
            if (params['page'] != '') {
              page = params['page'];
            }
          })
        }
      }
    }
    this.gameSub = this.httpService
      .getGameList(sort, search, page, amountPerPage)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }

  routeUpdate(sort: string = '', search: string = '', page: number = 0, amountPerPage: number = 20) {
    this.sorting = sort;
    this.search = search;
    this.page = page;
    this.amountPerPage = amountPerPage;
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (this.sorting == '' && params['ordering']) {
        this.sorting = params['ordering'];
      } else if (this.sorting == 'none') {
        this.sorting = '';
      }
      if (this.search == '' && params['game-search']) {
        this.search = params['game-search']
      }
      if (this.page == 0 && params['page']) {
        this.page = params['page'];
      } else if (this.page == 0) {
        this.page = 1;
      }
      this.lastPage = this.currentPage;
      this.currentPage = this.page;
      if (this.search == '' && this.sorting == '') {
        if (this.page == 1) {
          this.router.navigate(['']);
        } else {
          this.router.navigate(['p', this.page]);
        }
      }
      else if (this.search == '') {
        this.router.navigate(['p', this.page, 's', this.sorting]);
      } else if (this.sorting == '') {
        this.router.navigate(['search', this.search, 'p', this.page]);
      } else {
        this.router.navigate(['search', this.search, 'p', this.page, 's', this.sorting]);
      }
    })
  }

  navigation(change: number = 1, plus: boolean = true): void {
    var y: number = +this.currentPage;
    if (plus) {
      this.routeUpdate('', '', y + change);
    } else {
      this.routeUpdate('', '', change);
    }

  }

  randomPage(min: number = -100, max: number = 100, tries: number = 0): void {
    min = Math.ceil(min);
    max = Math.floor(max);
    var id: number = Math.floor(Math.random() * (max - min + 1)) + min;
    var y: number = +this.currentPage;
    if (id + y < 1 && tries < 100) {
      this.randomPage(-100, 100, tries + 1)
    } else if (id + y < 1) {
      this.routeUpdate('', '', 1);
    } else {

      this.routeUpdate('', '', y + id);
    }

  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
