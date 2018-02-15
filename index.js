import './index.scss'
import "babel-polyfill"
import { toggleAccordion, getHTML } from './lib'

const addAccordionElement = accordion => accordion.addEventListener('click', toggleAccordion)

document.querySelectorAll('.accordion').forEach(addAccordionElement)
