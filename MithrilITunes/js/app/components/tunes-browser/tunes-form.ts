/// <reference path="../../mithril.d.ts"/>
module Components {
  export class TunesForm implements Mithril.Component<any> {
    searchTerm = m.prop('');

    view(_, args) {
      return m('form.pure-form', { onsubmit: () => { args.onSearch(this.searchTerm()); return false }}, [
        m('input.pure-input-rounded', { onchange: m.withAttr('value', this.searchTerm), autofocus: true }),
        m.trust('&nbsp;'),
        m('button', { 'class': 'pure-button', type: 'submit' }, 'Search')
      ] as any);
    }
  }
}
