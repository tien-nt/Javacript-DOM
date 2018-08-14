const list  = document.querySelector('#book-list ul');
//delete books
list.addEventListener('click',(e)=>{
    if(e.target.className=='delete')
    {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        
    }
});
//add book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    //console.log(value);

    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add Classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', (e)=>{
    if(hideBox.checked)
    {
        list.style.display="none";

    }else{
        list.style.display="initial";
    }
});
//filter books
// const searchBar = document.forms['search-book'].querySelector('input');
// searchBar.addEventListener('keyup',(e)=>{
//     const term =e.target.value.toLowerCase();
//     const books = list.getElementsByTagName('li');
//     Array.from(books).forEach((book)=>{
//         const title = book.firstElementChild.textContent;
//         if(title.toLowerCase().indexOf(term)!=-1)
//         {
//             book.style.display='block';

//         }else{
//             book.style.display='none';
//         }
//     });
// });
// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});