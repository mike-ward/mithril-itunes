/// <reference path="../../mithril.d.ts"/>
module Components {
  export class TunesBrowser implements Mithril.Component<any> {
    constructor(private playList: Model.PlayList) { }

    private tunesForm = new TunesForm();
    private tunesList = new TunesList();
    private tunesPlayer = new TunesPlayer();
    private tunesSearching = new TunesSearching();

    view() {
      return m('div', [
        m(this.tunesForm, {
          onSearch: (searchTerm: string) => this.playList.updateTracks(searchTerm)
        }),

        m('hr',
          { style: 'margin: 1rem 0' }),

        m(this.tunesList, {
          getTracks: (sortBy: string) => this.playList.sort(sortBy),
          selectTrack: (track: Model.Track) => this.playList.selectTrack(track)
        }),

        m(this.tunesPlayer, {
          selectedTrack: () => this.playList.getSelectedTrack(),
          close: () => this.playList.selectTrack(null)
        }),

        m(this.tunesSearching,
          { updating: this.playList.isUpdating() })
      ]);
    }
  }
}

