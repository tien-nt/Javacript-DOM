var titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
// titles.array.forEach(element => {
    
// });
Array.from(titles).forEach(function(item){
console.log(item);
});