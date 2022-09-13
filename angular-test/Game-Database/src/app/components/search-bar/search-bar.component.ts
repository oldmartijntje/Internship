import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  id: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search, 'p', 1])
  }

  randomGame(min: number = 0, max: number = 843000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var id: number = Math.floor(Math.random() * (max - min + 1)) + min;
    this.router.navigate(['details', id]);
  }
}
