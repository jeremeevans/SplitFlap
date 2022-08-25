import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import elementStyles from "./example-element.scss"

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("example-element")
export class ExampleElement extends LitElement {
  static override styles = elementStyles

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = "World"

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  override render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `
  }

  private _onClick() {
    this.count++
    this.dispatchEvent(new CustomEvent("count-changed"))
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "example-element-element": ExampleElement
  }
}
