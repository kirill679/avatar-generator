import imagePickerTemplate from './imagePickerTemplate.js'
import { images } from './images.js'

export default class ImagePicker extends HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = imagePickerTemplate.render({ images: this.getImages(4) })

  }

  getImages (number = 4) {
    const shuffledImages = images.sort(() => 0.5 - Math.random())
    return shuffledImages.slice(0, number)
  }

  connectedCallback () {
    if (!this.getAttribute('selected')) {
      this.setAttribute('selected', this.shadowRoot.querySelector('.image').dataset.id)
    }

    this.shadowRoot.querySelectorAll('.image').forEach(n => n.addEventListener('click', () => {
      this.setAttribute('selected', n.dataset.id)
      const colorChangeEvent = new CustomEvent('imagechange', { detail: { newImageId: n.dataset.id } })
      this.dispatchEvent(colorChangeEvent)
    }))
  }
}