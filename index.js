
let btn = document.querySelector('#btn');
let p = document.querySelector('#p');

const xhr = new XMLHttpRequest();


url = 'https://jsonplaceholder.typicode.com/users'

btn.addEventListener('click', function() {
     xhr.onreadystatechange = () => {
        p.innerHTML = xhr.response;
    }

    xhr.open('GET', url);
    xhr.send();


});

// xhr.onreadystatechange = () =>{
//     console.log(xhr.response);
// }

