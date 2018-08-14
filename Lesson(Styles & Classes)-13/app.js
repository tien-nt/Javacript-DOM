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