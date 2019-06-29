let books = {};

$(document).ready(function() {
    $('#modal-add-book-ok').on('click', addBookToLibrary);
});

function addBookToLibrary() {
    let formData = $('form').serializeArray();
    let bookArray = [];
    for(key in formData) {
        bookArray[formData[key]['name']] = formData[key]['value'];
    }

    let randomIndex = Math.round(Math.random()*1000);
    books[randomIndex] = bookArray;

    $('#modal-add-book').modal('hide');
    drawBook(randomIndex);


 console.log(formData);
//  (4) [{…}, {…}, {…}, {…}]
// 0: {name: "book-name", value: "Alice's Adventures In Wonderland"}
// 1: {name: "book-author", value: "Lewis Carroll"}
// 2: {name: "book-year", value: "1871"}
// 3: {name: "book-cover", value: "alice.jpg"}

console.log(bookArray);
// [book-name: "Alice's Adventures In Wonderland", book-author: "Lewis Carroll", book-year: "1871", book-cover: "alice.jpg"]

console.log(books);
// 59: [book-name: "Alice's Adventures In Wonderland", book-author: "Lewis Carroll", book-year: "1871", book-cover: "alice.jpg"]
}

function drawBook(index) {
    let div = document.createElement('div');
    div.className = 'col-lg-3 book';
    div.setAttribute('data-index', index);

     let cover = document.createElement('div');
        cover.className = 'book-cover';
        cover.style.backgroundImage = `url(${books[index]['book-cover']})`;

     let bookName = document.createElement('h4');
        bookName.className = 'book-title';
        bookName.innerHTML = books[index]['book-name'];

     let bookYear = document.createElement('p');
        bookYear.className = 'book-year';
        bookYear.innerHTML = books[index]['book-year'];

    div.appendChild(cover);
    div.appendChild(bookName);
    div.appendChild(bookYear);

    $('.book-panel').append(div);

}
