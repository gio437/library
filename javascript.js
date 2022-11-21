let myLibrary = ["hello", "wassup"];

function Book(title, author, pages, read) { //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


let press = document.querySelector(".press"); //will create button

let enter = document.createElement("button");
enter.classList.add("submit");
enter.textContent = "Add Books";
enter.addEventListener("click", inputText);

press.appendChild(enter);



function inputText() {
    let bookInfo = window.prompt("input the title, author, pages, and read/not read");
    myLibrary.push(bookInfo);
    console.log(myLibrary);

    let type = document.querySelector(".add");

    let create = document.createElement("td");
    create.classList.add("books");
    
    let cells = create.textContent = bookInfo;
    let table = new Book(bookInfo);

    type.appendChild(create);
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