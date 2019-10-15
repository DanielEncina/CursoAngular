import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  loading: boolean;
  artista: any = {};
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService ) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTrack(params.id);
    });
  }

  ngOnInit() { }

  getArtist(id: string) {
    this.spotifyService.getArtist(id)
      .subscribe(res => {
        this.artista = res;
        this.loading = false;
      });
  }

  getTopTrack(id: string) {
    this.spotifyService.getTopTrackArtist(id)
      .subscribe(res => {
        console.log(' RES ::: ', res);
        this.topTracks = res;
      });
  }

}
