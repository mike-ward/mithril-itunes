/// <reference path="../../../typings/index.d.ts"/>
module Components {
  export class TunesForm implements Mithril.Component<TunesForm> {
    constructor(private tracks: Model.Tracks) {}

    searchTerm = m.prop('');

    view() {
      return m('form.pure-form', { onsubmit: () => this.search() }, [
        m('input.pure-input-rounded', { onchange: m.withAttr('value', this.searchTerm) }),
        m.trust('&nbsp;'),
        m('button', { 'class': 'pure-button', type: 'submit' }, 'Search')
      ] as any);
    }

    search() {
      this.tracks.updateTracks(this.searchTerm());
      return false;
    }
  }
}
