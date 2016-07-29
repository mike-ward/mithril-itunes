/// <reference path="../../mithril.d.ts"/>
module Components {
  export class TunesPlayer implements Mithril.Component<any> {
    view(_, args) {
      const selectedTrack = args.selectedTrack();
      if (!selectedTrack) return m('');

      return m('div', { style: this.style }, [
        m('div', [
          m('button.pure-button[style="float:right"]', { onclick: () => args.close() }, 'x'),
          m('div', selectedTrack.trackName),
          m('small', [
            m.trust('by&nbsp;'),
            m('cite', selectedTrack.artistName)
          ])
        ]),
        m('video', {
          autoplay: true,
          src: selectedTrack.previewUrl,
          style: 'width: 24rem; margin: 0.5rem'
        })
      ]);
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