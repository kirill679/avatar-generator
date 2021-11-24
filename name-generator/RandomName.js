import randomNameTemplate from './randomNameTemplate.js'
import { adjectives, nouns } from './nameComponents.js'

export default class RandomName extends HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = randomNameTemplate.render()

    shadow.querySelector('.random-name').innerText = this.generateName()
  }

  generateName () {
    let adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1)
    let noun = nouns[Math.floor(Math.random() * nouns.length)]
    noun = noun.charAt(0).toUpperCase() + noun.slice(1)

    return `${adjective} ${noun}`
  }
}