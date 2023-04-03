function loadTodos (url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    xhr.onload = function () {
        callback(xhr.response);
    };

    xhr.send();
}

function showFiveTodos (data) {
    console.log(data.slice(0, 5));
}

function showFirstTitle (data) {
    console.log(data[0].title);
}

loadTodos('https://jsonplaceholder.typicode.com/todos', 'json', showFiveTodos);
loadTodos('https://jsonplaceholder.typicode.com/todos', 'json', showFirstTitle);