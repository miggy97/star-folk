import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      border-bottom: 1px solid #ddd;
    }
    nav a {
      margin: 0 0.75rem;
      text-decoration: none;
      color: inherit;
    }
    input {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      border: 1px solid #ccc;
      width: 250px;
    }
  `;

  render() {
    return html`
      <header>
        <div>
          <strong>🌟 StarFolk</strong>
          <nav>
            <a href="/">Home</a>
            <a href="/characters">Characters</a>
          </nav>
        </div>
        <input type="search" placeholder="Search for Star Wars characters" />
      </header>
    `;
  }
}
