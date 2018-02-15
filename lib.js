const selectedClass = 'accordion--selected'
const sourceClass = 'accordion-source'

export async function getHTML(url) {
  try {
    const res = await fetch(url)
    const reader = await res.body.getReader()
    const data = await reader.read()
    return new TextDecoder("utf-8").decode(data.value)
  } catch (e) {
    return '<p>sorry we have a problem<p>'
  }
}

export async function toggleAccordion ({ target }) {
  if (target.nodeName === 'DT' && !target.classList.contains(selectedClass)) {
    const content = target.nextElementSibling
    if (content.children && content.children[0].classList.contains(sourceClass)) {
      content.innerHTML = await getHTML(content.children[0].href)
    }
    const selecteds = target.parentNode.querySelectorAll(`.${selectedClass}`)
    selecteds.forEach(selected => selected.classList.remove(selectedClass))
    target.classList.add(selectedClass)
    content.classList.add(selectedClass)
  }
}
