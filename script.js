import ImagePicker from './image-picker/ImagePicker.js'
import Avatar from './avatar/Avatar.js'
import RandomName from './name-generator/RandomName.js'
import BgPicker from './bg-picker/BgPicker.js'

customElements.define('image-picker', ImagePicker)
customElements.define('avatar-demo', Avatar)
customElements.define('random-name', RandomName)
customElements.define('bg-picker', BgPicker)

const bgPicker = document.querySelector('bg-picker')
const imagePicker = document.querySelector('image-picker')
const avatar = document.querySelector('avatar-demo')

bgPicker.addEventListener('colorchange', e => {
  avatar.setAttribute('bg', e.detail.newColor)
})

imagePicker.addEventListener('imagechange', e => {
  avatar.setAttribute('image', e.detail.newImageId)
})
