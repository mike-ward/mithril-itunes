/// <reference path="../../mithril.d.ts"/>
module Components {
  export class TunesBrowser implements Mithril.Component<any> {
    constructor(private tracks: Model.Tracks) {}

    private tunesForm = new TunesForm(this.tracks);
    private tunesList = new TunesList(this.tracks);
    private tunesPlayer = new TunesPlayer(this.tracks);

    view() {
      return m('div', [
        m(this.tunesForm),
        m('hr', { style: 'margin: 10pt 0' }),
        m(this.tunesList),
        m(this.tunesPlayer)
      ]);
    }
  }
}

