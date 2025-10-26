import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { Router } from "@lit-labs/router";
import { ifDefined } from "lit/directives/if-defined.js";
import { globalStyles } from "./styles/global-styles";
import spaceShipUrl from "./assets/space-ship-bg.png?url";

import "./components/app-header";
import "./components/featured-characters";
import "./views/list-view";
import "./views/detail-view";
import "./views/home-view";

@customElement("app-root")
export class AppRoot extends LitElement {
  @state() searchTerm = "";

  private router = new Router(this, [
    { path: "/", render: () => html`<home-view></home-view>` },
    {
      path: "/characters",
      render: () =>
        html`<list-view .searchTerm=${this.searchTerm}></list-view>`,
    },
    {
      path: "/characters/:id",
      render: ({ id }) => html` <detail-view
        character-id=${ifDefined(id)}
      ></detail-view>`,
    },
  ]);

  static styles = [
    globalStyles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
      }

      .space-ship {
        position: absolute;
        z-index: 0;
      }

      .page-frame {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        min-height: 100vh;
        padding-block: 50px;
        padding-inline: clamp(2rem, 8vw, 122px);
        box-sizing: border-box;
      }
      main {
        display: flex;
        gap: 2rem;
      }

      section {
        flex: 1;
        overflow-y: auto;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(
      "search-changed",
      this.onSearchChanged as EventListener
    );
    this.addEventListener(
      "character-selected",
      this.onCharacterSelected as EventListener
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(
      "search-changed",
      this.onSearchChanged as EventListener
    );
    this.removeEventListener(
      "character-selected",
      this.onCharacterSelected as EventListener
    );
  }

  // Clear search and navigate to character detail
  onCharacterSelected = (e: CustomEvent<{ id: number }>) => {
    this.searchTerm = "";

    const header = this.renderRoot.querySelector("app-header");
    if (header) {
      header.dispatchEvent(
        new CustomEvent("clear-search", { bubbles: true, composed: true })
      );
    }

    this.router.goto(`/characters/${e.detail.id}`);
  };

  onSearchChanged = (e: CustomEvent<{ term: string }>) => {
    this.searchTerm = e.detail.term.trim();

    if (this.searchTerm) {
      // User typed something → go to list view
      this.router.goto("/characters");
    } else {
      const currentPath = window.location.pathname;
      this.router.goto(currentPath);
    }
  };

  render() {
    return html`
      <img class="space-ship" src=${spaceShipUrl} />
      <div class="page-frame">
        <app-header></app-header>
        <main>
          <aside><featured-characters></featured-characters></aside>
          <section>${this.router.outlet()}</section>
        </main>
      </div>
    `;
  }
}
