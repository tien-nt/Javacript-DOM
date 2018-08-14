var btns = document.querySelectorAll('#book-list .delete');
Array.from(btns).forEach(function(btn){
 btn.addEventListener('click',function(e){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
 });
});
// const link = document.querySelector('#age-banner a');
// link.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log('Navigation to', e.target.textContent, 'was prevented');
// });
// prevent default behaviour

const link = document.querySelector('#page-banner a');

link.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
});