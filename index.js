const Hide = document.querySelector('#hide');
const BookList = document.querySelector('#book-list');


Hide.addEventListener('change', () =>{
    if(Hide.checked){
        BookList.style.display = "none";
    } else{
        BookList.style.display ="block";
    }
})



BookList.addEventListener('click' , (e) =>{
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        BookList.removeChild(li);
    }
})