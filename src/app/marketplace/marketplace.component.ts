import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [ListingService]
})
export class MarketplaceComponent implements OnInit {
  listings: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;

  filterByPostType: string = "all";

  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
    this.listings = this.listingService.getListings();
  }

  seeDetails(clickedListing) {
    this.router.navigate(['listings', clickedListing.$key])
  }

  onChange(optionFromMenu) {
    this.filterByPostType = optionFromMenu;
  }

}
