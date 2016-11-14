// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function doSomthing() {
  var newShape = document.createElementNS(namespace, "circle")
  newShape.setAttribute("cx","25")
  newShape.setAttribute("cy","30")
  newShape.setAttribute("r","20")
  newShape.setAttribute("fill","lightgreen")
  var canvas = document.getElementById("create-a-shape-canvas")
 canvas.appendChild(newShape)
}
