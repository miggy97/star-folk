import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  @property({ type: String }) name = 'World';

  static styles = css`
    p { margin: 0; color: #333; }
  `;

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
