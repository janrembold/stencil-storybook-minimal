export default {
  component: 'my-component',
  title: 'Example/MyComponent',
};

const Template = args => <my-component first={args.first} last={args.last}></my-component>;

export const MissingDocs = Template.bind({});
MissingDocs.args = {
  first: 'Foo',
  last: 'Bar',
};
