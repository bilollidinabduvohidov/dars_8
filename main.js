// const forElement =document.querySelector('.form')
// const todoNameInputElement = document.querySelector('.todo-name')
// const tboyElement = document.querySelector('#tbody')

// const data = JSON.parse(localStorage.getItem('data')) || []

// renderArray(data)

// forElement.addEventListener('submit', event =>{
//     event.preventDefault()
//     // console.log(event)

//     if(todoNameInputElement.value.lenght > 0) {
//         data.push({
//             name: todoNameInputElement.value,
//             isDone: false
//         })

//         renderArray(data)
//     }
// })


// function renderArray(array) {
//     for(let item in array) {
//         localStorage.setItem('data', JSON.stringify(array))
//         tboyElement.textContent = ''
//         const newTrElement = document.createElement('tr');
//         if(data [item] ['IsDone']) {
//             newTrElement.classList.add('.table-success')
//         }
//         const newTodoNameElement = document.createElement('td');
//         newTodoNameElement.innerHTML = item.textContent = data[item] ['name']
//         const newButtonWrapperElement = document.createElement('td');
//         const newDoButtonElement = document.createElement('button')
//         const newRemoveButtonElement = document.createElement('button')


//         newDoButtonElement.classList.add('btn', 'btn-success')
//         newDoButtonElement.textContent = 'Done'
//         newRemoveButtonElement.classList.add('btn', 'btn-danger')
//         newRemoveButtonElement.textContent = 'Remove'

//         newButtonWrapperElement.appendChild(newDoButtonElement)
//         newButtonWrapperElement.appendChild(newRemoveButtonElement)

//         newTrElement.appendChild(newTodoNameElement)
//         newTrElement.appendChild(newButtonWrapperElement)
        

//         tboyElement.appendChild(newTrElement)
//     }
// }

const formElement = document.querySelector('.form');
const todoNameInputElement = document.querySelector(".todo-name")
const tbodyElement = document.querySelector("#tbody");

const data  = JSON.parse(localStorage.getItem("data"))  || []

renderArray(data)

formElement.addEventListener("submit", event => {
    event.preventDefault();

    if (todoNameInputElement.value.length > 1) {
        data.push({
            name: todoNameInputElement.value,
            isDone: false
        })

        renderArray(data)
    }
})

function renderArray(array) {
    localStorage.setItem("data", JSON.stringify(array))
    tbodyElement.textContent = ""
    for(let item in array) {
        const newTrElement = document.createElement('tr');
        if(data [item] ["isDone"]) {
            newTrElement.classList.add("table-success")
        }
        const newTodoNameElement = document.createElement('td');
        newTodoNameElement.textContent = data[item] ["name"]
        const newButtonWrapperTdElement = document.createElement('td');
        const newDoneButtonElement = document.createElement('button')
        const newRemoveButtonElement = document.createElement('button')

        newDoneButtonElement.classList.add('btn', 'btn-success', 'm-1')
        newDoneButtonElement.textContent = "Done"
        newRemoveButtonElement.classList.add('btn', 'btn-danger', 'm-1')
        newRemoveButtonElement.textContent = "Remove"

        newRemoveButtonElement.addEventListener('click', event =>{
            data.splice(item, 1);
            renderArray(data);
        })

        newDoneButtonElement.addEventListener('click', event =>{
            data[item] ['isDone'] = true;
            renderArray(data);
        })

        newButtonWrapperTdElement.appendChild(newDoneButtonElement)
        newButtonWrapperTdElement.appendChild(newRemoveButtonElement)

        newTrElement.appendChild(newTodoNameElement)
        newTrElement.appendChild(newButtonWrapperTdElement)

        tbodyElement.appendChild(newTrElement)
    }
    formElement.reset()
}