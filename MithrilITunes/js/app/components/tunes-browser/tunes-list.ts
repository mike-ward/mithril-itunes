/// <reference path="../../mithril.d.ts"/>
module Components {
  export class TunesList implements Mithril.Component<any> {
    sortBy = '';
    selectTrack: (track) => void;

    controller(args) {
      this.selectTrack = (track) => args.selectTrack(track);
    }

    view(_, args) {
      const tracks = args.getTracks(this.sortBy);
      return tracks.length
        ? m('table.pure-table.pure-table-bordered', [
          this.head(),
          this.body(tracks)])
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

    body(tracks) {
      return m('tbody', [
        tracks.map(track => this.row(track))
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
          onclick: () => this.selectTrack(track)
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