const booklist = document.querySelector('#book-list');
console.log('book-list next sibling is:', booklist.nextSibling);
console.log('book-list Element sibling is:', booklist.nextElementSibling);
console.log('book-list previous sibling is:', booklist.previousSibling);
console.log('book-list previous Element sibling is:', booklist.previousElementSibling);

booklist.previousElementSibling.querySelector('p').innerHTML+'<br/>Too cool for everyone else!';
