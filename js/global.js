const inputItem = document.querySelector("#addItem form input[name='newItem']")
const formItem = document.querySelector("#addItem form")
console.log(inputItem)

const lista = document.querySelector("#itemListView ul")

formItem.addEventListener("submit", (event)=>{
    event.preventDefault()
    const title = inputItem.value
    const spanTitle = document.createElement("SPAN")
    spanTitle.className = "title"
    spanTitle.innerHTML = title
    const spanStatus = document.createElement("SPAN")
    spanStatus.className = "status"
    spanStatus.innerHTML = " pending"
    const newLi = document.createElement('LI')
    newLi.appendChild(spanTitle)
    newLi.appendChild(spanStatus)
    lista.appendChild(newLi)
})