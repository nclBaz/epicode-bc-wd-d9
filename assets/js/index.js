document.addEventListener("DOMContentLoaded", function () {
  // SETUP INIZIALE
  // Avverrà solo quando l'HTML è stato completamente caricato
  // Ad es. se devo interagire tramite DOM manipulation sugli elementi della pagina, sarebbe bene avere la garanzia che il DOM sia stato caricato effettivamente

  console.log("Fetching initial data....")

  const clickButton = document.getElementById("clickButton")
  const dblClickButton = document.getElementById("dblClickButton")
  const hoverArea = document.getElementById("hoverArea")
  const mouseOutput = document.getElementById("mouseOutput")

  const handleClick = function (event) {
    mouseOutput.textContent = "Click event triggered!"
    console.log(event)
  }

  clickButton.addEventListener("click", handleClick) // ✅
  // clickButton.addEventListener("click", handleClick()) // ❌ MAI INVOCARE LE FUNZIONI CHE ASSOCIAMO AGLI EVENTI!

  dblClickButton.addEventListener("dblclick", function (event) {
    mouseOutput.textContent = "Double click event triggered!"
    console.log(event)
  })

  hoverArea.addEventListener("mouseover", function (event) {
    mouseOutput.textContent = "Mouse is over the area!"
    console.log(event)
  })

  hoverArea.addEventListener("mouseout", function (event) {
    mouseOutput.textContent = "Mouse left the area!"
    console.log(event)
  })

  const keyInput = document.getElementById("keyInput")
  const keyOutput = document.getElementById("keyOutput")

  keyInput.addEventListener("keydown", function (event) {
    keyOutput.textContent = "Key pressed: " + event.key
  })

  keyInput.addEventListener("keyup", function (event) {
    keyOutput.textContent = "Key up: " + event.key
  })

  const scrollInfo = document.getElementById("scrollInfo")
  window.addEventListener("scroll", function () {
    console.log(window.scrollY)
    scrollInfo.textContent = "Posizione Scroll: " + window.scrollY
  })

  const resizeMessage = document.getElementById("resizeMessage")
  window.addEventListener("resize", function () {
    resizeMessage.textContent = "Window resized to: " + window.innerWidth + " px, x " + window.innerHeight + " px"
  })

  const groupElementsSection = document.getElementById("group-elements")
  groupElementsSection.addEventListener("click", function (event) {
    console.log("TARGET: ", event.target)
    // il target è lo specifico elemento cliccato (può essere uno qualsiasi degli elementi interni alla section perché grazie al bubbling posso inserire un listener direttamente nel "contenitore")

    console.log("CURRENT TARGET: ", event.currentTarget) // Il currentTarget mi rappresenta sempre l'elemento sul quale è attaccato l'event listener

    // event.target.style.background = "red" // <-- Se voglio che mi si colori solo lo specifico figlio cliccato
    event.currentTarget.style.background = "red" // <-- Se invece voglio che a prescindere da chi venga cliccato mi si colori sempre e solo la section
  })

  const itemsList = document.getElementById("itemsList")
  const delegationOutput = document.getElementById("delegationOutput")
  itemsList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") delegationOutput.textContent = "You Clicked: " + event.target.textContent
  })

  const addItemBtn = document.getElementById("addItemBtn")
  addItemBtn.addEventListener("click", function () {
    const newItem = document.createElement("li")
    const itemNumber = itemsList.children.length + 1
    newItem.textContent = "Item " + itemNumber
    itemsList.appendChild(newItem)
  })
})
