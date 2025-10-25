import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('list-view')
export class ListView extends LitElement {
  static styles = css`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  `;

  render() {
    return html`
      <h2>Character List</h2>
      <ul>
        <li><strong>Luke Skywalker</strong> — Jedi Knight and hero of the Rebellion.</li>
        <li><strong>Anakin Skywalker</strong> — Jedi Knight who fell to the dark side.</li>
        <li><strong>Leia Organa</strong> — Princess and leader of the Rebellion.</li>
      </ul>
    `;
  }
}
