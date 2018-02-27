
import {Pipe, PipeTransform} from '@angular/core';
import { Listing } from './listing.model';

@Pipe({
  name: "type",
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: Listing[], desiredListing){
    let output: Listing[] = [];
    if (desiredListing.toLowerCase() === "all") {
      return input;
    } else if (desiredListing.toLowerCase() === "furniture") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].postType.toLowerCase() === "furniture") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredListing.toLowerCase() === "cars and trucks") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].postType.toLowerCase() === "cars and trucks") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredListing.toLowerCase() === "misc") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].postType.toLowerCase() === "misc") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredListing.toLowerCase() === "housing") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].postType.toLowerCase() === "housing") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
