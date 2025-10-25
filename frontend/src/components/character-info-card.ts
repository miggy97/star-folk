import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('character-info-card')
export class CharacterInfoCard extends LitElement {
  static styles = css`
    div {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      width: 200px;
    }
    p {
      margin: 0.25rem 0;
    }
  `;

  render() {
    return html`
      <div>
        <p><strong>Name:</strong> Leia Organa</p>
        <p><strong>Gender:</strong> Female</p>
        <p><strong>Homeworld:</strong> Alderaan</p>
        <p><strong>Films:</strong></p>
        <ul>
          <li>A New Hope</li>
          <li>The Empire Strikes Back</li>
          <li>Return of the Jedi</li>
        </ul>
      </div>
    `;
  }
}
