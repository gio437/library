let myLibrary = [];

function Book(title, author, pages, read) { //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    let type = document.querySelector(".cell1"); //will add cell to title 
    let create = document.createElement("td"); //creates the cell elements
    create.classList.add("books");
    create.textContent = title;
    type.appendChild(create);

    let authorEl = document.querySelector(".cell2");
    let create2 = document.createElement("td");
    create2.classList.add("books");
    create2.textContent = author;
    authorEl.appendChild(create2);

    let pageEl = document.querySelector(".cell3");
    let create3 = document.createElement("td");
    create3.classList.add("books");
    create3.textContent = pages;
    pageEl.appendChild(create3);

    let readEl = document.querySelector(".cell4");
    let create4 = document.createElement("td");
    create4.classList.add("books");
    create4.textContent = read;
    readEl.appendChild(create4);

    let remove = document.querySelector(".changeRead");
    let create5 = document.createElement("td");
    let button = document.createElement("button");
    button.classList.add("remove");
    button.textContent = "toggle read";
    remove.appendChild(create5);
    create5.appendChild(button);

    let take = document.querySelector(".delete");
    let create6 = document.createElement("td");
    let removeButton = document.createElement("button");
    removeButton.classList.add("take");
    removeButton.textContent = "remove";
    take.appendChild(create6);
    create6.appendChild(removeButton);
}

let press = document.querySelector(".press"); //will create new book button

let enter = document.createElement("button");
enter.classList.add("submit");
enter.textContent = "New Book";
enter.addEventListener("click", openForm); //triggers function when new book button is clicked

press.appendChild(enter);


function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
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

    displayBook();

    event.preventDefault(); //will prevent form submission page refresh
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