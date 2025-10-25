import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('featured-characters')
export class FeaturedCharacters extends LitElement {
  static styles = css`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      text-decoration: none;
      color: #444;
      display: block;
      padding: 0.5rem;
      border-radius: 6px;
    }
    a:hover {
      background: #f2f2f2;
    }
  `;

  render() {
    return html`
      <h3>Featured Characters</h3>
      <ul>
        <li><a href="/characters/1">Lando Calrissian</a></li>
        <li><a href="/characters/2">Leia Organa</a></li>
        <li><a href="/characters/3">Darth Vader</a></li>
      </ul>
    `;
  }
}
