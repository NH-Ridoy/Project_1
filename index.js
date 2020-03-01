// let root = document.querySelector('#root');

// let jumbotronDiv = document.createElement("div");

// jumbotronDiv.className = 'jumbotron text-center';

// jumbotronDiv.setAttribute('id', 'myId');

// root.appendChild(jumbotronDiv);

// let h1 = document.createElement('h1');
// h1.className = 'display-4'




let input = document.querySelector('#inputField');
let ul = document.querySelector('#nameList');

input.addEventListener('keypress', (event) => {

        if(event.keyCode === 13) {
            // let name = input.value;
            // or
            let name = event.target.value;
            createLi(name);
            input.value = "";
        }
    
});

function createLi(name) {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex';
    li.innerHTML = name;
    ul.appendChild(li);

    let span = document.createElement('span');
    span.innerText = 'X';
    span.className = 'ml-auto';
    span.style.color = 'red';
    span.style.cursor = 'pointer'
    li.appendChild(span);
    span.addEventListener('click', () => {
        ul.removeChild(li);
    });
    

}