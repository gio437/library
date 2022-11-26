let myLibrary = ["book1", "book2", "book3"];

function Book(title, author, pages, read) { //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let bookRemover = document.querySelector(".delete");
bookRemover.addEventListener("click", removeBook);

function removeBook() {
   let element = document.querySelector(".take");
   let badges = element.getAttribute("data-badges");

   myLibrary.splice(badges, 1);
   console.log(myLibrary);
   console.log(badges);

   //updates the removed boxes
    let type = document.querySelector(".books"); //will add cell to title 
    type.remove();

    let authorEl = document.querySelector(".books2");
    authorEl.remove();

    let pageEl = document.querySelector(".books3");
    pageEl.remove();

    let readEl = document.querySelector(".books4");
    readEl.remove();

    let remove = document.querySelector(".remove");
    remove.remove();

    let take = document.querySelector(".take"); //parent
    take.remove();

    let go = document.querySelector(".switch");
    go.remove();

    let extract = document.querySelector(".extract");
    extract.remove();
}




let toggleButton = document.querySelector(".changeRead");
toggleButton.addEventListener("click", changeReadStatus);

function changeReadStatus() {
    
}



let press = document.querySelector(".press"); //will create new book button

let enter = document.createElement("button");
enter.classList.add("submit");
enter.textContent = "New Book";
enter.addEventListener("click", openForm); //triggers function when new book button is clicked

press.appendChild(enter);


function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        title = myLibrary[i].title;
        author = myLibrary[i].author;
        pages = myLibrary[i].pages;
        read = myLibrary[i].read;
    }

    let type = document.querySelector(".cell1"); //will add cell to title 
    let create = document.createElement("td"); //creates the cell elements
    create.classList.add("books");
    create.textContent = title;
    type.appendChild(create);

    let authorEl = document.querySelector(".cell2");
    let create2 = document.createElement("td");
    create2.classList.add("books2");
    create2.textContent = author;
    authorEl.appendChild(create2);

    let pageEl = document.querySelector(".cell3");
    let create3 = document.createElement("td");
    create3.classList.add("books3");
    create3.textContent = pages;
    pageEl.appendChild(create3);

    let readEl = document.querySelector(".cell4");
    let create4 = document.createElement("td");
    create4.classList.add("books4");
    create4.textContent = read;
    readEl.appendChild(create4);

    let remove = document.querySelector(".changeRead");
    let create5 = document.createElement("td");
    let button = document.createElement("button");
    create5.classList.add("switch");
    button.classList.add("remove");
    button.textContent = "toggle read";
    remove.appendChild(create5);
    create5.appendChild(button);

    let take = document.querySelector(".delete"); //parent
    let create6 = document.createElement("td");
    let removeButton = document.createElement("button");
    create6.classList.add("extract");
    removeButton.classList.add("take");
    removeButton.textContent = "remove";
    take.appendChild(create6);
    create6.appendChild(removeButton);

    let totalRemove = document.querySelectorAll(".take");
    for (let i = 0; i < totalRemove.length; i++) {
         let r = 0;
         r += i;
         removeButton.setAttribute("data-badges", r); //will give element a data attr
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block"; 

    let complete = document.querySelector(".btn"); //will access the submit button on form
    complete.addEventListener("click", addBookToLibrary);
}


function addBookToLibrary() {
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let pages = document.querySelector(".pages").value;
    let read = document.querySelector(".read").value;
    console.log(title);

    let bookInfo = new Book(title, author, pages, read); //will add new book to array
    myLibrary.push(bookInfo);
    console.log(myLibrary);

    event.preventDefault(); //will prevent form submission page refresh

    displayBook();
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// function theHobbit(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;

//     let info = console.log(title, author, pages, read);
//     theHobbit.info = function() {
//         return info;
//     };
// }


// let results = new theHobbit('Diary', 'by Giovanni', '50 pages', 'not read');
// console.log(theHobbit.info());

// pass in myLIbrary.prototype.title
// inside proto, make the data type as index -1

// call title name of book,call it book.prototype.title, than change .read =