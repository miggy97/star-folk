import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/character-info-card';

@customElement('detail-view')
export class DetailView extends LitElement {
  @property({ type: String, attribute: 'character-id' }) characterId = '';

  static styles = css`
    .container {
      display: flex;
      gap: 2rem;
    }
  `;

  render() {
    return html`
      <div class="container">
        <article>
          <h2>Character Detail View</h2>
          <p>Character ID: ${this.characterId}</p>
          <p>This will later fetch and show the full character details.</p>
        </article>
        <character-info-card></character-info-card>
      </div>
    `;
  }
}
