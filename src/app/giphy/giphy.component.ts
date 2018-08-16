import { Component, OnInit } from '@angular/core';
import {GifService} from '../gif.service';
import {Gifs} from '../gifs';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
public gifs= [];
  constructor(public gifService: GifService) {
this.getGif();
  }
  public getGif(){
    this.gifService.getTrendingGifs().subscribe((data: Gifs)=>{
      this.gifs=(data.data);
      console.log(data.data);
    });
  }


  ngOnInit() {
  }

}
