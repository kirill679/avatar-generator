export default {
  html () {
    return `
     <div class="avatar">
        <div class="avatar-image"></div>
     </div>
    `
  },
  css () {
    return `
    <style>
      * {
        box-sizing: border-box;
      }
      .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        width: 300px;
        border: 1px solid #dee2e6;
      }
      .avatar-image {
        width: 100%;
        height: 100%;
      }
    </style>
    `
  },
  render () {
    return this.html() + this.css()
  },
}