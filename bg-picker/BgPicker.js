import { colorPalettes } from './colorPalettes.js'
import bgPickerTemplate from './bgPickerTemplate.js'

export default class BgPicker extends HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = bgPickerTemplate.render({ colors: this.getColors() })
  }

  getColors () {
    return colorPalettes[Math.floor(Math.random() * colorPalettes.length)]
  }

  connectedCallback() {
    if (!this.getAttribute('selected')) {
      this.setAttribute('selected', this.shadowRoot.querySelector('.color').style.backgroundColor)
    }

    this.shadowRoot.querySelectorAll('.color').forEach(n => n.addEventListener('click', () => {
      this.setAttribute('selected', n.style.backgroundColor)
      const colorChangeEvent = new CustomEvent('colorchange', { detail: { newColor: n.style.backgroundColor } })
      this.dispatchEvent(colorChangeEvent)
    }))
  }
}