import avatarTemplate from './avatarTemplate.js'
import { images } from '../image-picker/images.js'

export default class Avatar extends HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = avatarTemplate.render()
  }

  static get observedAttributes () {
    return ['bg', 'image']
  }

  connectedCallback () {
    window.addEventListener('load', () => {
      let bg, image

      bg = this.getAttribute('bg') || document.querySelector('bg-picker').getAttribute('selected')
      image = this.getAttribute('image') || document.querySelector('image-picker').getAttribute('selected')

      if (!this.getAttribute('bg')) {
        this.setAttribute('bg', bg)
      }

      if (!this.getAttribute('image')) {
        this.setAttribute('image', image)
      }

      const avatarImage = images.find(i => i.id === +image)

      this.shadowRoot.querySelector('.avatar').style.backgroundColor = bg
      this.shadowRoot.querySelector('.avatar-image').innerHTML = avatarImage.svg
    })
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'bg') {
      this.shadowRoot.querySelector('.avatar').style.backgroundColor = newValue
    }
    if (name === 'image') {
      const avatarImage = images.find(i => i.id === +newValue)
      this.shadowRoot.querySelector('.avatar-image').innerHTML = avatarImage.svg
    }
  }
}