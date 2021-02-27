import { spring } from 'svelte/motion'

// function that is executed when the element is mounted
export function drag(node, params) {
  console.log(node, params)
}

// export function drag(node, params) {
//   let x
//   let y

//   const coords = spring(
//     { x: 0, y: 0 },
//     {
//       stiffness: 0.2,
//       damping: 0.4
//     }
//   )

//   //default
//   let directions = {
//     x: true,
//     y: true
//   }

//   if (params?.direction === 'x') {
//     directions.y = false
//   } else if (params?.direction === 'y') {
//     directions.x = false
//   }

//   coords.subscribe($coord => {
//     node.style.transform = `translate3d(${$coord.x}px, ${$coord.y}px, 0)`
//   })

//   node.addEventListener("mousedown", handleMouseDown)

//   function handleMouseDown(e) {
//     x = e.clientX
//     y = e.clientY
//     window.addEventListener("mousemove", handleMouseMove)
//     window.addEventListener("mouseup", handleMouseUp)
//   }

//   function handleMouseMove(e) {
//     // delta x = diff between where we clicked & where we are
//     const dx = e.clientX - x
//     const dy = e.clientY - y
//     x = e.clientX
//     y = e.clientY
//     coords.update($coord => {
//       return {
//         x: directions.x ? $coord.x + dx : 0,
//         y: directions.y ? $coord.y + dy : 0
//       }
//     })
//   }
//   function handleMouseUp() {
//     // fire up event
//     node.dispatchEvent(
//       new CustomEvent("dragStop", {
//         detail: {
//           x,
//           y
//         }
//       })
//     )
//     // reset values
//     // remove event listeners
//     x = 0
//     y = 0
//     coords.update(() => {
//       return {
//         x: 0,
//         y: 0
//       }
//     })
//     window.removeEventListener("mousemove", handleMouseMove)
//     window.removeEventListener("mouseup", handleMouseUp)
//   }
//   return {
//     destroy() {
//       node.removeEventListener("mousedown", () => console.log("clicks"))
//     }
//   }
// }