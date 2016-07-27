/// <reference path="../../mithril.d.ts"/>
module Components {
  export class TunesPlayer implements Mithril.Component<TunesBrowser> {
    constructor(private tracks: Model.Tracks) { }

    view() {
      return !this.tracks || !this.tracks.selectedTrack
        ? m('')
        : m('div', { style: this.style }, [
          m('div', [
            m('button.pure-button[style="float:right"]', { onclick: () => this.close() }, 'x'),
            m('div', this.tracks.selectedTrack.trackName),
            m('small', [
              m.trust('by&nbsp;'),
              m('cite', this.tracks.selectedTrack.artistName)
            ])
          ]),
          m('video', {
            src: this.tracks.selectedTrack.previewUrl,
            autoplay: true,
            controls: true,
            height: '240px',
            width: '320px'
          })
        ]);
    }

    close() {
      this.tracks.selectedTrack = null;
    }

    private style =
    'z-index: 10; position: fixed; top: 50%; left: 50%;' +
    'margin-left: -160px; margin-top: -150px; width: 360px; border: solid 1px #bbb;' +
    'padding: 20px; background-color: white;';
  }
}