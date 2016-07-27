/// <reference path="../../typings/index.d.ts"/>
module Model {
  export class Tracks {
    tracks: Track[] = [];
    selectedTrack: Track;

    updateTracks(searchTerm: string) {
      this.clear();

      m.request({
        dataType: 'jsonp',
        url: 'https://itunes.apple.com/search',
        data: { term: searchTerm, media: 'musicVideo' }
      })
        .then(data => this.tracks = data.results);
    }

    selectTrack(track: Track) {
      this.selectedTrack = track;
      m.redraw();
    }

    clear() {
      this.tracks = [];
      this.selectedTrack = null;
      m.redraw();
    }
  }
}