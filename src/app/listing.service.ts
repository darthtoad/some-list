import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from './array-listings';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.listings = database.list('listings');
  }

  getListings() {
    return this.listings;
  }

  addListing(newListing: Listing) {
    this.listings.push(newListing);
  }

  getListingById(listingId: string) {
    return this.database.object('listings/' + listingId);
  }

  updateListing(listingToUpdate){
    let listingInFirebase = this.getListingById(listingToUpdate.$key);
    listingInFirebase.update({postName: listingToUpdate.postName,
                              postType: listingToUpdate.postType,
                              userName: listingToUpdate.userName,
                              body: listingToUpdate.body,
                              price: listingToUpdate.price,
                              datePosted: listingToUpdate.datePosted

    })
  }

  deleteListing(listingToDelete){
    let listingInFirebase = this.getListingById(listingToDelete.$key);
    listingInFirebase.remove();
  }
}
