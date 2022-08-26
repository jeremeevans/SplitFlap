import { LitElement, html } from "lit"
import { classMap } from "lit/directives/class-map.js"
import { customElement, property } from "lit/decorators.js"
import elementStyles from "./split-flap.scss"

interface Letter {
  Character: string
  Revealed: boolean
}

/**
 * A Split Flap web component.
 *
 */
@customElement("split-flap")
export class SplitFlap extends LitElement {
  static override styles = elementStyles
  private _message = "Set Me"
  private _lines: Array<Array<Letter>> = []
  private _ranDisplay = false

  /**
   * The name to say "Hello" to.
   */
  @property()
  public set message(m: string) {
    this._message = m
    let currentLine: Array<Letter> = []

    for (const letter of [...m.toUpperCase()]) {
      const isLineBreak = /\r|\n/.exec(letter)

      if (isLineBreak) {
        this._lines.push(currentLine)
        currentLine = []
        continue
      }

      currentLine.push({ Character: letter, Revealed: letter == " " })
    }

    this._lines.push(currentLine)

    if (this._lines.length == 1) {
      return
    }

    const maxChars = Math.max(...this._lines.map((l) => l.length))

    for (const line of this._lines) {
      if (line.length == maxChars) {
        continue
      }

      for (let i = 0; i <= maxChars - line.length; i++) {
        line.push({
          Character: " ",
          Revealed: true,
        })
      }
    }
  }

  public get message(): string {
    return this._message
  }

  protected override render() {
    return html`
      <section>
        ${this._lines.map((line, row) => {
          return line.map((letter) => {
            const classes = { revealed: letter.Revealed }

            return html`
              <div
                style=${"grid-row: " + (row + 1)}
                class="letter ${classMap(classes)}"
              >
                <div class="top">
                  <span>${letter.Character}</span>
                </div>
                <div class="blank"></div>
                <div class="bottom">
                  <span>${letter.Character}</span>
                </div>
                <div class="back"></div>
              </div>
            `
          })
        })}
      </section>
    `
  }

  protected override updated(): void {
    if (this._ranDisplay) {
      return
    }

    this._ranDisplay = true
    let nextTimeout = Math.random() * 300 + 200

    for (const line of this._lines) {
      for (const letter of line) {
        setTimeout(() => {
          letter.Revealed = true
          this.requestUpdate()
        }, nextTimeout)

        nextTimeout += Math.random() * 300 + 200
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "split-flap": SplitFlap
  }
}
