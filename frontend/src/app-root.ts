import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';
import { ifDefined } from 'lit/directives/if-defined.js';

import './components/app-header';
import './components/featured-characters';
import './views/list-view';
import './views/detail-view';
import './views/home-view';

@customElement('app-root')
export class AppRoot extends LitElement {
  @state() searchTerm = '';
  

  private router = new Router(this, [
    { path: '/', render: () => html`<home-view></home-view>` },
    { path: '/characters', render: () => html`<list-view .searchTerm=${this.searchTerm}></list-view>` },
    { path: '/characters/:id', render: ({ id }) => html`
        <detail-view character-id=${ifDefined(id)}></detail-view>` },
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

  connectedCallback() {
  super.connectedCallback();
  this.addEventListener('search-changed', this.onSearchChanged as EventListener);
  this.addEventListener('character-selected', this.onCharacterSelected as EventListener);
}

disconnectedCallback() {
  super.disconnectedCallback();
  this.removeEventListener('search-changed', this.onSearchChanged as EventListener);
  this.removeEventListener('character-selected', this.onCharacterSelected as EventListener);
}

// Clear search and navigate to character detail
onCharacterSelected = (e: CustomEvent<{ id: number }>) => {
  this.searchTerm = '';

  const header = this.renderRoot.querySelector('app-header');
  if (header) {
    header.dispatchEvent(new CustomEvent('clear-search', { bubbles: true, composed: true }));
  }

  this.router.goto(`/characters/${e.detail.id}`);
};

  onSearchChanged = (e: CustomEvent<{ term: string }>) => {
  this.searchTerm = e.detail.term.trim();

  if (this.searchTerm) {
    // User typed something → go to list view
    this.router.goto('/characters');
  } else {
    const currentPath = window.location.pathname;
    this.router.goto(currentPath);
  }
};

  render() {
    return html`
      <app-header></app-header>
      <main>
        <aside><featured-characters></featured-characters></aside>
        <section>${this.router.outlet()}</section>
      </main>
    `;
  }
}
