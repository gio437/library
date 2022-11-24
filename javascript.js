let myLibrary = ["hello", "wassup"];

function Book(title, author, pages, read) { //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


let press = document.querySelector(".press"); //will create new book button

let enter = document.createElement("button");
enter.classList.add("submit");
enter.textContent = "New Book";
enter.addEventListener("click", inputText); //triggers function when new book button is clicked

press.appendChild(enter);



function inputText() {
    document.getElementById("myForm").style.display = "block"; //will open form

    //let bookInfo = window.prompt("input the title, author, pages, and read/not read");
    myLibrary.push(bookInfo);
    console.log(myLibrary);

    let type = document.querySelector(".title"); //will add cell to title 

    let create = document.createElement("td");
    create.classList.add("books");
    
    let cells = create.textContent = bookInfo;
    let table = new Book(bookInfo);

    type.appendChild(create);
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