import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ListingService]
})
export class AdminComponent implements OnInit {

  newDateCreated: string;
  constructor(private listingService: ListingService) { }

  ngOnInit() {
    var thing = new Date();
    this.newDateCreated = thing.toLocaleString();
  }

  submitForm(postName: string, postType: string, userName: string, body: string, price: number, datePosted: string) {
    const newListing: Listing = new Listing(postName, postType, userName, body, price, datePosted);
    this.listingService.addListing(newListing);
  }

}
