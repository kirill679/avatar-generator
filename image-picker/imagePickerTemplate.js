export default {
  html (props) {
    const images = props.images
    const avatarsHTML = images.map(a => `<div class="image" data-id="${a.id}">${a.svg}</div>`).join('')

    return `
    <div class="image-picker">
      ${avatarsHTML}
    </div>
    `
  },
  css () {
    return `
    <style>
      * {
        box-sizing: border-box;
      }
      .image-picker {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }
      .image {
        width: 100px;
        height: 100px;
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