import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { globalStyles } from "../styles/global-styles";

@customElement("home-view")
export class HomeView extends LitElement {
  static styles = [
    globalStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h2 {
        margin-bottom: 1rem;
      }
      ul {
        line-height: 1.8;
        padding-left: 1.2rem;
      }
    `,
  ];

  render() {
    return html`
      <div class="home-view">
        <h2>Welcome to StarFolk Wiki</h2>
        <p>
          Explore profiles of heroes, villains, rebels, and rulers across the
          Star Wars universe.
        </p>
        <ul>
          <li>Detailed profiles of characters</li>
          <li>Backgrounds, homeworlds, and key moments</li>
          <li>Connections between films and series</li>
        </ul>
      </div>
    `;
  }
}
