import { Component, OnInit } from '@angular/core';
import {GifService} from '../gif.service';
import {Gifs} from '../gifs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  // create a variable that will store an array returned from data.data
public gifs= [];
  constructor(public gifService: GifService) {
this.getGif();
  }
  public getGif(){
    this.gifService.getTrendingGifs().subscribe((data: Gifs)=>{
      this.gifs=(data.data);
      // data.data returns an array that gets assigned to the variable created
      console.log(data.data);
    });
  }


  ngOnInit() {
  }

}
