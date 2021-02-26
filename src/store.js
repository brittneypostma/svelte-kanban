import { writable } from 'svelte/store'

const defaultColumns = [
  {
    id: 1,
    title: 'Todo',
    cards: [
      {
        id: 1,
        title: 'title',
      },
    ],
  },
  {
    id: 2,
    title: 'In Progress',
    cards: [
      {
        id: 2,
        title: 'title',
      },
    ],
  },
  {
    id: 3,
    title: 'Complete',
    cards: [
      {
        id: 3,
        title: 'title',
      },
    ],
  },
]


function persistStore() {
  const store = localStorage.getItem('store')
  return store ? JSON.parse(store) : defaultColumns 
}

export let store = writable(persistStore())

store.subscribe(value => localStorage.setItem('store', JSON.stringify(value)))

