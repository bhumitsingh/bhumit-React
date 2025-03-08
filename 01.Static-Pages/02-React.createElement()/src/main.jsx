import {createRoot} from 'react-dom/client'
import {createElement} from 'react'

const root = createRoot(document.getElementById('root'))
const reactElement = createElement('h1', null, 'Hello from create Element!')

console.log(reactElement)

root.render(
  reactElement
)
