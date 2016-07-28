/// <reference path="./mithril.d.ts"/>
module App {
  export class TunesApp implements Mithril.Component<any> {
    tunesBrowser = new Components.TunesBrowser(new Model.Tracks());

    view() {
      return m('div', { style: 'margin: 1pc' }, [
        m('h1', 'ITunes Browser'),
        m(this.tunesBrowser)
      ]);
    }
  }
}