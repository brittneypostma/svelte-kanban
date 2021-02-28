import {writable} from 'svelte/store'

export const drag = writable([])
export const dragState = writable({
  component:undefined,
  draggedId:undefined,
  targetId:undefined
})

export function draggable(ref, componentType, id) {
  drag.update(state => {
    return [...state, {
      componentType,
      elementRef: ref,
      isDragged: false,
      id
    }]
  })
}

export function unregister(componentType, id) {
  drag.update(state => {
      return state.filter(element => {
          if(element.id === id && element.componentType === componentType){
              return false
          }
          return true
      }
      )
  })
}

export function setDrag(componentType, id, isDragging){
  drag.update(state=>{
      return state.map(element => {
          if(element.id === id && element.componentType === componentType){
              return ({
                  ...element,
                  isDragged: isDragging
              })
          }else return {...element}
      })
  })
  dragState.set({
      component:componentType,
      draggedId:isDragging?id:undefined,
      targetId:undefined
  })
}
export function isEnoughElementsToDrag(component){
  return get(drag).length >= 1
}
export function getTargetElements(component){
  return get(drag).filter(element=>
      element.isDragged === false && element.componentType === component
  )
}
export function getDraggedElement(component){
  return get(drag).find(element=>
      element.isDragged === true && element.componentType === component
  )
}
