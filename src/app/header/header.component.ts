import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { SearchService } from '../search.service';

@Component({
  selector: 'is-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SearchService]
})
export class HeaderComponent implements OnInit {

  public isCollapsed: boolean = true;
  searchTxt: string = '';

  
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(a) {
	this.searchService.getCountries(a)
		.subscribe(
			(data: Response) => {
				for (let country of data.json()) {
					alert(country.name);
					this.searchTxt = '';
				}
			},
			() => {
				alert("No countries found");
				this.searchTxt = '';
			},
		);
  }

}
