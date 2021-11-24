export default {
  html () {
    return `
    <div class="random-name">
      
    </div>
    `
  },
  css () {
    return `
    <style>
      * {
        box-sizing: border-box;
      }
      .random-name {
        text-align: center;
        font-size: 1.3rem;
      }
    </style>
    `
  },
  render () {
    return this.html() + this.css()
  },
}