var books = document.querySelectorAll('#book-list li .name');
console.log(books);
Array.from(books).forEach(function(book){
 
 book.textContent +=' (book title)';
 console.log(book.textContent);
});

const bookList = document.querySelector('#book-list');
bookList.innerHTML='<h2>Books and more books...</h2>';
bookList.innerHTML+='<p>This is how you you add HTML</p>';
console.log(bookList.innerHTML);