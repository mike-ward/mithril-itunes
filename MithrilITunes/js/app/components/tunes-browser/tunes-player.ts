/// <reference path="../../mithril.d.ts"/>
module Components {
  export class TunesPlayer implements Mithril.Component<any> {
    constructor(private tracks: Model.Tracks) { }

    view() {
      return this.tracks && this.tracks.getSelectedTrack()
        ? m('div', { style: this.style }, [
          m('div', [
            m('button.pure-button[style="float:right"]', { onclick: () => this.close() }, 'x'),
            m('div', this.tracks.getSelectedTrack().trackName),
            m('small', [
              m.trust('by&nbsp;'),
              m('cite', this.tracks.getSelectedTrack().artistName)
            ])
          ]),
          m('video', {
            src: this.tracks.getSelectedTrack().previewUrl,
            autoplay: true,
            style: 'width: 24rem; margin: 0.5rem'
          })
        ])
        : m('');
    }

    close() {
      this.tracks.selectTrack(null);
    }

    private style = `
      z-index: 10; 
      position: fixed; 
      top: 50%; 
      left: 50%;
      margin-left: -12em;
      margin-top: -12em;
      width: 25rem; border:
      solid 1px #bbb;
      padding: 1rem;
      background-color: white;`;
  }
}