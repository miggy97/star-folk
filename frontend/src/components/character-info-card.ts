import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { globalStyles } from "../styles/global-styles";
import type { Character } from "../services/character.service";
import "../assets/icons/icon-rebels";
import "../assets/icons/icon-empire";

@customElement("character-info-card")
export class CharacterInfoCard extends LitElement {
  @property({ type: Object }) character?: Character;

  static styles = [
    globalStyles,
    css`
      :host {
        display: block;
      }

      .card {
        max-width: 18rem;
        min-width: 14rem;
        background-color: white;
        text-align: left;
        border: 1px solid #e7e4e4;
        box-shadow: 0px 8px 24px 0px #00000008;
        border-radius: 16px;
        padding: 1rem;
      }

      .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f9f7f7;
        padding: 2rem;
        margin-bottom: 1.5rem;
        border-radius: 12px;
      }

      .info-row {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .label {
        font-weight: 600;
        font-style: SemiBold;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -3%;
        color: #aaa5a5;
        border-bottom: 1px solid #d8d4d4;
      }

      .value {
        font-weight: 400;
        font-style: Regular;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -3%;
        color: #464343;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0.3rem 0 0 0;
      }

      li {
        font-weight: 400;
        font-style: Regular;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -3%;
        color: #464343;
        line-height: 1.3;
      }

      .empty {
        color: #999;
        font-size: 14px;
      }
    `,
  ];

  render() {
    if (!this.character) {
      return html`<div class="card empty">
        Select a character to view details.
      </div>`;
    }

    const isRebel = this.character.side === "Rebels";

    return html`
      <div class="card">
        <div class="icon-wrapper">
          ${isRebel
            ? html`<icon-rebels size="218"></icon-rebels>`
            : html`<icon-empire size="218"></icon-empire>`}
        </div>

        <div class="info-row">
          <span class="label">Name:</span>
          <span class="value">${this.character.name}</span>
        </div>

        <div class="info-row">
          <span class="label">Gender:</span>
          <span class="value">${this.character.gender}</span>
        </div>

        <div class="info-row">
          <span class="label">Homeworld:</span>
          <span class="value">${this.character.homeworld}</span>
        </div>

        <div class="info-row">
          <span class="label">Birth Year:</span>
          <span class="value">${this.character.birth_year || "Unknown"}</span>
        </div>

        <div class="info-row">
          <span class="label">Films:</span>
          <ul>
            ${this.character.films?.map((film) => html`<li>${film}</li>`)}
          </ul>
        </div>
      </div>
    `;
  }
}
