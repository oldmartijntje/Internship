import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(ordering: string = '', search: string = '', page: number = 1, amountPerPage: number = 20): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('page', page).set('page_size', amountPerPage);

    if (search != '' && ordering != '') {
      params = new HttpParams().set('ordering', ordering).set('search', search).set('page', page).set('page_size', amountPerPage);
    } else if (search != '') {
      params = new HttpParams().set('search', search).set('page', page).set('page_size', amountPerPage);
    } else if (ordering != '') {
      params = new HttpParams().set('ordering', ordering).set('page', page).set('page_size', amountPerPage);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }

  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`);
    const gameScreenshotsRequest = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`);

    return forkJoin({
      gameInfoRequest,
      gameScreenshotsRequest,
      gameTrailersRequest,
    }).pipe(map((resp: any) => {
      return {
        ...resp['gameInfoRequest'],
        screenshots: resp['gameScreenshotsRequest']?.results,
        trailers: resp['gameTrailersRequest']?.results,
      };
    }))
  }
}
