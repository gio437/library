let myLibrary = [];

function Book(title, author, pages, read, id) { //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

let bookRemover = document.querySelector(".delete");
let willRemove = bookRemover.addEventListener("click", removeBook);

function removeBook(e) {
    let num;
    let rCopy;

    if (e.target.classList.contains("take")) {
         num = parseInt(e.target.parentElement.id);
         console.log(num);
         rCopy = num;
    }

    for (let j = 0; j < myLibrary.length; j++) {
        if (myLibrary[j].id == num) {
            myLibrary.splice(j, 1);
            myLibrary.push();
            console.log(myLibrary);
        }
    }
 

    //updates the removed boxes in DOM
        let remove1 = document.getElementById(("cell-first" + rCopy));
        remove1.remove();

        let remove2 = document.getElementById(("cell-second" + rCopy));
        remove2.remove();

        let remove3 = document.getElementById(("cell-third" + rCopy));
        remove3.remove();

        let remove4 = document.getElementById(("toggle" + rCopy));
        remove4.remove();
        
        let remove5 = document.getElementById(rCopy);
        remove5.remove();

        let remove6 = document.getElementById(rCopy);
        remove6.remove();

        r--;
}

let toggleButton = document.querySelector(".changeRead");
toggleButton.addEventListener("click", changeReadStatus);

function changeReadStatus(e) {
    let num;
    let word;

    if (e.target.classList.contains("remove")) {
        num = (e.target.parentElement.id);
        console.log(num);
   }

    for (let j = 0; j < myLibrary.length; j++) {
            if (myLibrary[j].id == num) {
                if (myLibrary[j].read == "read") {
                     word = "not read";
                     myLibrary[j].read = "not read";
                     console.log("hello1");
                     let cell1 = document.getElementById(("toggle" + j));
                     console.log(cell1);
                     cell1.textContent = myLibrary[j].read;
                }
                else {
                     word = "read";
                     myLibrary[j].read = "read";
                     console.log("hello2");
                     let cell2 = document.getElementById(("toggle" + j));
                     console.log(cell2);
                     cell2.textContent = myLibrary[j].read;
                }
            }
    }
}


let press = document.querySelector(".press"); //will create new book button

let enter = document.createElement("button");
enter.classList.add("submit");
enter.textContent = "New Book";
enter.addEventListener("click", openForm); //triggers function when new book button is clicked

press.appendChild(enter);

let r = 0; //adds data values to remove btn

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
    create.id = "cell-first" + r;
    create.textContent = title;
    type.appendChild(create);

    let authorEl = document.querySelector(".cell2");
    let create2 = document.createElement("td");
    create2.classList.add("books2");
    create2.id = "cell-second" + r;
    create2.textContent = author;
    authorEl.appendChild(create2);

    let pageEl = document.querySelector(".cell3");
    let create3 = document.createElement("td");
    create3.classList.add("books3");
    create3.id = "cell-third" + r;
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

    //let totalRemove = document.querySelectorAll(".take");
    create4.id = "toggle" + r; //for read cell
    create5.id = r; //gives element a data attr for toggle read
    create6.id = r; //will give element a data attr
    r++;
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
    let id = r;
    console.log(title);

    let bookInfo = new Book(title, author, pages, read, id); //will add new book to array
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