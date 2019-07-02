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

    let index = $(this).attr('data-index');
    if(index == undefined) {
        let randomIndex = Math.round(Math.random()*10000);
        books[randomIndex] = bookArray;
        drawBook(randomIndex);
    } else {
        books[index] = bookArray;
        drawBook(index);
    }

    $('#modal-add-book').modal('hide');
 // console.log(formData);
//  (4) [{…}, {…}, {…}, {…}]
// 0: {name: "book-name", value: "Alice's Adventures In Wonderland"}
// 1: {name: "book-author", value: "Lewis Carroll"}
// 2: {name: "book-year", value: "1871"}
// 3: {name: "book-cover", value: "alice.jpg"}

// console.log(bookArray);
// [book-name: "Alice's Adventures In Wonderland", book-author: "Lewis Carroll", book-year: "1871", book-cover: "alice.jpg"]

console.log(books);
// 59: [book-name: "Alice's Adventures In Wonderland", book-author: "Lewis Carroll", book-year: "1871", book-cover: "alice.jpg"]
}

function drawBook(index) {
    let book = $('.book[data-index='+index+']');
    if(book.length == 0) {
        let div = document.createElement('div');
        div.className = 'col-lg-4 book';
        div.setAttribute('data-index', index);

        let cover = document.createElement('div');
        cover.className = 'book-cover';
        cover.style.backgroundImage = `url(${books[index]['book-cover']})`;

        let bookName = document.createElement('h4');
        bookName.className = 'book-name';
        bookName.innerHTML = books[index]['book-name'];

        let bookYear = document.createElement('p');
        bookYear.className = 'book-year';
        bookYear.innerHTML = books[index]['book-year'];

        let bookAuthor = document.createElement('p');
        bookAuthor.className = 'book-author';
        bookAuthor.innerHTML = books[index]['book-author'];

        let buttonEdit = document.createElement('button');
        buttonEdit.className =  "btn btn-success edit";
        buttonEdit.innerHTML = "Edit";
        buttonEdit.setAttribute('data-index', index);
        buttonEdit.onclick = editBook;

        let buttonDelete = document.createElement('button');
        buttonDelete.className =  "btn btn-warning edit";
        buttonDelete.innerHTML = "Delete";
        buttonDelete.onclick = deleteBook;

        div.appendChild(cover);
        div.appendChild(bookName);
        div.appendChild(bookYear);
        div.appendChild(bookAuthor);
        div.appendChild(buttonEdit);
        div.appendChild(buttonDelete);

        $('.book-panel').append(div);
    } else {
        let bookCover = book.find('.book-cover');
        bookCover.css({'background-image':'url('+books[index]['book-cover']+')'});
        let bookYear = book.find('.book-year').eq(0);
        bookYear.html(books[index]['book-year'] );
        let bookName = book.find('.book-name').eq(0);
        bookName.html(books[index]['book-name'] );
        let bookAuthor = book.find('.book-author').eq(0);
        bookAuthor.html(books[index]['book-author'] );
        $('#modal-add-book-ok').removeAttr('data-index');

    }
}

function editBook() {
    let index = $(this).attr('data-index');
    console.log(index);
    $('#modal-add-book').modal('show');
    $('form #book-name').val(books[index]['book-name']);
    $('form #book-author').val(books[index]['book-author']);
    $('form #book-cover').val(books[index]['book-cover']);
    $('form #book-year').val(books[index]['book-year']);
    $('#modal-add-book-ok').attr('data-index', index);
}

function deleteBook() {
    $(this).parent('.book').remove();
    // books.pop(index);
}

// https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiY7NeqwJXjAhV15aYKHVOSBP8QjRx6BAgBEAU&url=http%3A%2F%2Ft2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSQbo47YugWSvYcEztHm7KdCCiRMcVWpH28eKfup7zJ2M7SwVV_&psig=AOvVaw0OP4G7B98d5rDYp5xW-cFP&ust=1562131733889050
