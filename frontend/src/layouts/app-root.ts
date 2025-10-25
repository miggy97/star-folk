import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import '../components/hello-world.ts'

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = css`
    main {
      background-color: #f0f0f0;
    }
  `

  render() {
    return html`
      <main>
        <hello-world name="Lit"></hello-world>
      </main>
    `
  }
}
