import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { globalStyles } from "../styles/global-styles";

@customElement('home-view')
export class HomeView extends LitElement {
  static styles =  [
  globalStyles,
  css`
    h2 { margin-bottom: 1rem; }
    ul { line-height: 1.8; }
  `];

  render() {
    return html`
      <h2>Welcome to StarFolk Wiki</h2>
      <p>
        Explore profiles of heroes, villains, rebels, and rulers across the Star Wars universe.
      </p>
      <ul>
        <li>Detailed profiles of characters</li>
        <li>Backgrounds, homeworlds, and key moments</li>
        <li>Connections between films and series</li>
      </ul>
    `;
  }
}
