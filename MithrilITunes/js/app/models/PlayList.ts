/// <reference path="../mithril.d.ts"/>
module Model {
  export class PlayList {
    private tracks: Track[] = [];
    private selectedTrack: Track;
    private updating = false;

    updateTracks(searchTerm: string) {
      const endUpdate = () => this.updating = false;

      this.tracks = [];
      this.selectedTrack = null;
      this.updating = true;
      m.redraw();

      m.request({
        dataType: 'jsonp',
        url: 'https://itunes.apple.com/search',
        data: { term: searchTerm, media: 'musicVideo' }
      })
        .then(data => this.tracks = data.results)
        .then(endUpdate, endUpdate);
    }

    getSelectedTrack() {
      return this.selectedTrack;
    }

    getTracks() {
      return this.tracks;
    }

    isUpdating() {
      return this.updating;
    }

    selectTrack(track: Track) {
      this.selectedTrack = track;
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