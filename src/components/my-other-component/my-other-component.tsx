import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-other-component',
  styleUrl: 'my-other-component.css',
  shadow: true,
})
export class MyOtherComponent {
  render() {
    return (
      <Host>
        <div>Other component</div>
        <my-component first="Jon" last="Doe" items={['foo1', 'foo2']}></my-component>
      </Host>
    );
  }
}
