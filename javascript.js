let myLibrary = ["hello", "wassup"];

function Book(...book) { //the constructor
    this.book = book;
}

let addStuff = new Book(myLibrary);
console.log(addStuff);


function addBookToLibrary() {
    let type = document.querySelector("tr");

    let create = document.createElement("th");
    create.classList.add("books");
    
    let cells = create.textContent = "hi";

    type.appendChild(create);

    for (let i = 0; i < myLibrary.length; i++) {
        cells[i];
        console.log(myLibrary);
    }
}

addBookToLibrary();

let press = document.querySelector(".press");

let enter = document.createElement("button");
enter.classList.add("submit");
//enter.addEventListener("click");

press.appendChild(enter);


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