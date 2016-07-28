/// <reference path="../../mithril.d.ts"/>
module Components {
  export class TunesList implements Mithril.Component<any> {
    constructor(private tracks: Model.Tracks) { }

    view() {
      return this.tracks.tracks.length
        ? m('table.pure-table.pure-table-bordered', [
          this.header(),
          this.body()])
        : m('');
    }

    header() {
      return m('thead', [
        m('tr', { onclick: e => this.updateSort(e.target.id) }, [
          m('th[id="trackName"]', `Name ${this.isSortedOn('trackName')}`),
          m('th[id="artistName"]', `Artist ${this.isSortedOn('artistName')}`),
          m('th[id="collectionName"]', `Collection ${this.isSortedOn('collectionName')}`),
          m('th[id="trackPrice"]', `Price ${this.isSortedOn('trackPrice')}`)
        ])
      ]);
    }

    body() {
      return m('tbody', [
        this.sort().map(track => this.row(track))
      ]);
    }

    row(track: Model.Track) {
      return m('tr', [
        m('td', this.name(track)),
        m('td', track.artistName),
        m('td', track.collectionName),
        m('td', track.trackPrice)
      ]);
    }

    name(track: Model.Track) {
      return m('div', [
        m('img', {
          alt: 'artwork cover',
          src: track.artworkUrl100,
          style: 'vertical-align: middle; margin: .2em; border: solid black; cursor: pointer',
          onclick: () => this.tracks.selectTrack(track)
        }),
        m('span', { style: 'font-size: larger' }, track.trackName)
      ]);
    }

    sortBy = '';

    updateSort(field: string) {
      this.sortBy = field;
      m.redraw();
    }

    sort(): Model.Track[] {
      const field = this.sortBy;
      return field
        ? this.tracks
          .tracks
          .slice()
          .sort((a, b) => (a[field] || '').toString().localeCompare(b[field] || '').toString())
        : this.tracks.tracks;
    }

    isSortedOn(field: string) {
      return this.sortBy === field ? '*' : '';
    }
  }
}