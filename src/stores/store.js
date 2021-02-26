import { persistStore } from './persistStore'

let uid = () => `_${Math.random().toString(35).substr(2, 9)}`

const defaultColumns = [
  {
    id: uid(),
    title: 'Todo',
    cards: [

    ],
  },
  {
    id: uid(),
    title: 'In Progress',
    cards: [

    ],
  },
  {
    id: uid(),
    title: 'Complete',
    cards: [

    ],
  },
]

function getNewColumn() {
  return {
    id: uid(),
    title: 'Title',
    cards: [

    ],
  }
}

export const store = persistStore('store', defaultColumns)

export function addColumn() {
  store.update((prev) => [getNewColumn(), ...prev])
}
export function deleteColumn(id) {
  store.update((cols) => cols.filter((column) => column.id !== id))
}

export function update(id, newTitle) {
  store.update((prev) =>
    prev.map((col) =>
      col.id === id ? { ...col, title: newTitle } : { ...col }
    )
  )
}
