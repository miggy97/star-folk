import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@lit-labs/router";
import "./components/app-header";
import "./components/featured-characters";
import { ifDefined } from "lit/directives/if-defined.js";
import './views/home-view';
import './views/list-view';
import './views/detail-view';


@customElement("app-root")
export class AppRoot extends LitElement {
  private router = new Router(this, [
    { path: "/", render: () => html`<home-view></home-view>` },
    { path: "/characters", render: () => html`<list-view></list-view>` },
    {
      path: "/characters/:id",
      render: ({ id }) => html`
        <detail-view character-id=${ifDefined(id)}></detail-view>
      `,
    },
  ]);

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      font-family: Arial, sans-serif;
    }

    main {
      display: flex;
      flex: 1;
      min-height: 0;
    }

    aside {
      width: 240px;
      border-right: 1px solid #ddd;
      padding: 1rem;
      box-sizing: border-box;
    }

    section {
      flex: 1;
      padding: 1rem 2rem;
      overflow-y: auto;
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <main>
        <aside>
          <featured-characters></featured-characters>
        </aside>
        <section>${this.router.outlet()}</section>
      </main>
    `;
  }
}
