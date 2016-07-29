/// <reference path="../../mithril.d.ts"/>
module Components {
  export class TunesList implements Mithril.Component<any> {
    sortBy = '';

    view(_, args) {
      const tracks = args.getTracks(this.sortBy);
      const selectTrack = args.selectTrack;
      return tracks.length
        ? m('table.pure-table.pure-table-bordered', [
          this.head(),
          this.body(tracks, selectTrack)])
        : m('');
    }

    head() {
      return m('thead', [
        m('tr', {
          style: 'cursor: pointer',
          onclick: e => this.updateSort(e.target.id)
        }, [
            m('th[id="trackName"]', `Name ${this.isSortedOn('trackName')}`),
            m('th[id="artistName"]', `Artist ${this.isSortedOn('artistName')}`),
            m('th[id="collectionName"]', `Collection ${this.isSortedOn('collectionName')}`),
            m('th[id="trackPrice"]', `Price ${this.isSortedOn('trackPrice')}`)
          ])
      ]);
    }

    body(tracks: Model.Track[], selectTrack: (s: Model.Track) => void) {
      return m('tbody', [
        tracks.map(track => this.row(track, selectTrack))
      ]);
    }

    row(track: Model.Track, selectTrack: (s: Model.Track) => void) {
      return m('tr', [
        m('td', this.name(track, selectTrack)),
        m('td', track.artistName),
        m('td', track.collectionName),
        m('td', track.trackPrice)
      ]);
    }

    name(track: Model.Track, selectTrack: (s: Model.Track) => void) {
      return m('div', [
        m('img', {
          alt: 'artwork cover',
          src: track.artworkUrl100,
          style: 'vertical-align: middle; margin: .2em; border: solid black; cursor: pointer',
          onclick: () => selectTrack(track)
        }),
        m('span', { style: 'font-size: larger' }, track.trackName)
      ]);
    }

    updateSort(field: string) {
      this.sortBy = field;
    }

    isSortedOn(field: string) {
      return this.sortBy === field ? '*' : '';
    }
  }
}