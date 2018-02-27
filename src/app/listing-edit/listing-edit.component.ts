import { Component, Input, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css'],
  providers: [ListingService]
})
export class ListingEditComponent implements OnInit {
  @Input() selectedListing;

  constructor(private listingService: ListingService) { }

  ngOnInit() {
  }

  beginUpdatingListing(listingToUpdate){
    this.listingService.updateListing(listingToUpdate);
  }

  beginDeletingListing(listingToDelete){
    if (confirm(`Are you sure you want to delete the listing ${listingToDelete.name}?`))
    this.listingService.deleteListing(listingToDelete);
  }



}
