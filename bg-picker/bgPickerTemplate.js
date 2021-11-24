export default {
  html (props) {
    const colors = props.colors || ['#FBF46D', '#B4FE98', '#77E4D4', '#998CEB']
    const colorsHTML = colors.map(c => `<div class="color" style="background-color: ${c}"></div>`).join('')

    return `
    <div class="bg-picker">
      ${colorsHTML}
    </div>
    `
  },
  css () {
    return `
    <style>
      * {
        box-sizing: border-box;
      }
      .bg-picker {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }
      .color {
        height: 100px;
        width: 100px;
        border: 1px solid #dee2e6;
        cursor: pointer;
      }
    </style>
    `
  },
  render (props) {
    return this.html(props) + this.css()
  },
}