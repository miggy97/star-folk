import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { globalStyles } from "../styles/global-styles";

@customElement("app-header")
export class AppHeader extends LitElement {
  @state() searchTerm = "";

  static styles =  [
  globalStyles,
  css`
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      border-bottom: 1px solid #ddd;
    }
    input {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      border: 1px solid #ccc;
      width: 250px;
    }
  `];

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("clear-search", this.onClearSearch as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(
      "clear-search",
      this.onClearSearch as EventListener
    );
  }

  onClearSearch = () => {
    this.searchTerm = "";
  };

  handleInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.searchTerm = value;

    this.dispatchEvent(
      new CustomEvent("search-changed", {
        detail: { term: value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <header>
        <div class="logo">🌟 StarFolk</div>
        <input
          type="search"
          placeholder="Search for Star Wars characters"
          .value=${this.searchTerm}
          @input=${this.handleInput}
        />
      </header>
    `;
  }
}
