/// <reference path="../../mithril.d.ts"/>
module Components {
  export class TunesSearching implements Mithril.Component<{ updating: boolean }> {
    view(_, args) {
      return m('', args.updating ? 'Searching...' : '');
    }
  }
}