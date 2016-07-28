/// <reference path="../mithril.d.ts"/>
module Model {
  export class Tracks {
    private tracks: Track[] = [];
    private selectedTrack: Track;

    updateTracks(searchTerm: string) {
      this.clear();

      m.request({
        dataType: 'jsonp',
        url: 'https://itunes.apple.com/search',
        data: { term: searchTerm, media: 'musicVideo' }
      })
        .then(data => this.tracks = data.results);
    }

    getSelectedTrack() {
      return this.selectedTrack;
    }

    getTracks() {
      return this.tracks;
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

    sort(field: string) {
      return field
        ? this.tracks
          .slice()
          .sort((a, b) => (a[field] || '').toString().localeCompare(b[field] || '').toString())
        : this.tracks;
    }
  }
}