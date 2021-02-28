import { spring } from 'svelte/motion'
import { update, store } from '../stores/store'

// function that is executed when the element is mounted
export function drag(node, { colIdx, cardIdx, card}) {
  const cardId = card.id
  // console.log(colIdx, cardIdx, cardId)
  let x
  const prevCol = colIdx
  let newCol
  // const coords = spring({ x: 0 }, { stiffness: 0.2, damping: 0.4 })

  // coords.subscribe(($coord) => {
  //   node.style.transform = `translate3d(${$coord.x}px, 0, 0)`
  // })

    // delta x = diff between where we clicked & where we are

    // const dx = e.clientX - x
    // x = e.clientX
    // coords.update(($coord) => {
    //   return {
    //     x: $coord.x + dx,
    //   }
    // })

  node.addEventListener('dragstart', (event) => {
    event.target.style.backgroundColor = 'var(--secondary)'
  }, false)
  node.addEventListener('dragend', (event) => {
    event.target.style.backgroundColor = 'var(--white)'

  }, false)
  node.addEventListener('drop', (event) => {
    if (event.target.className == 'dropzone') {
      console.log('dropped')
    }
  }, false)
  return {
    update: () => {},
    destroy: () => {
    },
  }
}
