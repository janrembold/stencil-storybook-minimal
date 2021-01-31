import { html } from 'lit-html';

export default {
  title: 'Example/MyComponent',
};

const Template = args => html`<my-component first="${args.first}" last="${args.last}"></my-component>`;

export const MissingDocs = Template.bind({});
MissingDocs .args = {
  first: 'Foo',
  last: 'Bar',
};
