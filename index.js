const Hide = document.querySelector('#hide');
const BookList = document.querySelector('#book-list');

//Hide book
Hide.addEventListener('change', () =>{
    if(Hide.checked){
        BookList.style.display = "none";
    } else{
        BookList.style.display ="block";
    }
})


// Delete book
BookList.addEventListener('click' , (e) =>{
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        BookList.removeChild(li);
    }
})

//Add Book
const AddBook = document.querySelector('#add-book');

AddBook.addEventListener('click', (e) =>{
    e.preventDefault();
    const Value = AddBook.querySelector('#new-book').value;
    console.log(Value);

    //Create Elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = Value ;

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to DOM
    li.appendChild('bookName');
    li.appendChild('deleteBtn');
    BookList.appendChild('li');

})



