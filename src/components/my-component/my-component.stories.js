export default {
  component: 'my-component',
  title: 'Example/MyComponent',
};

const Template = args => (
  <div>
    <my-component first={args.first} last={args.last} items={['foo1', 'foo2']}></my-component>
  </div>
);

export const MissingDocs = Template.bind({});
MissingDocs.args = {
  first: 'Foo',
  last: 'Bar',
  items: ['foo1', 'foo2'],
};
