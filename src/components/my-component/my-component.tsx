import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';

/**
 * Some fancy description for my-component
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * Array of strings
   */
  @Prop() items: string[] = [];

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <Host>
        <div>Helloooo, World! I'm {this.getText()}</div>
        <ul>
          {this.items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </Host>
    );
  }
}
