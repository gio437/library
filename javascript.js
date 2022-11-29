let myLibrary = [];

function Book(title, author, pages, read, id) { //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

let bookRemover = document.querySelector(".delete");
let hello = bookRemover.addEventListener("click", removeBook);

function removeBook(e) {
    let num;

    if (e.target.classList.contains("take")) {
         num = parseInt(e.target.parentElement.id);
         console.log(num);
    }

    //myLibrary.slice(num, 1);
    //myLibrary.push(myLibrary.shift());

    // let extractId = document.querySelectorAll(".extract");
    // extractId.shift();

        // myLibrary.splice(num, 1);
        // console.log(myLibrary);



     
         for (let j = 0; j < myLibrary.length; j++) {
             if (num === myLibrary[j].id) {
                 myLibrary.splice(num, 1);
                 console.log(myLibrary);
             }
         }
 

    //updates the removed boxes in DOM
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

    // if (r >= 0) { //maybe r = 0?
    //     r--;
    // }
}





let toggleButton = document.querySelector(".changeRead");
toggleButton.addEventListener("click", changeReadStatus);

function changeReadStatus(e) {
    let num;
    let word;
    let readValue;

    if (e.target.classList.contains("remove")) {
        num = (e.target.parentElement.id);
        console.log(num);
   }

 if (e.target.classList.contains("remove")) {
        readValue = (e.target.parentElement.read);
        console.log(readValue);
   }

   
         for (let j = 0; j < myLibrary.length; j++) {
             if (readValue === myLibrary[j].read) {
			if (readValue === "read") {
		     		word = myLibrary[num].read = "not read";
                 		console.log(myLibrary);
				console.log("hello1");
    			}
    			else {
		     		word = myLibrary[num].read ="read";
				console.log("hello2");
			}
    		}
	}

//    let readElements = document.querySelectorAll(".books4");
//     for (let j = 0; j < myLibrary.length; j++) {
//          for (let i = 0; i < readElements.length; i++) {
//             if (myLibrary[i].read == readElements[i].id && myLibrary[i].read == "read") {
//                 for (key in myLibrary);
//                     word = myLibrary[key].read = "not read";
//                     console.log("hello1");
//             }
//             else {
//                 for (key in myLibrary);
//                     word = myLibrary[key].read = "read";
//                     console.log("hello2");
//             }
//          }
//      }

    // if (num == "read") {
    //     num = "not read";
    // }
    // else {
    //     num = "read";
    // }

     let cell = document.querySelector(".books4");
     cell.remove();

    let readEl = document.querySelector(".cell4"); //updates the new read
    let create4 = document.createElement("td");
    create4.classList.add("books4");
    create4.id = num;
    create4.read = readValue;
    create4.textContent = word;
    readEl.appendChild(create4);
}




// Book.prototype.switchRead = function() {
//         if (myLibrary.read == "read") {
//                 myLibrary.read = "not read";
//         }
//         else {
//             myLibrary.read = "read";
//         }
//     }



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

    //let totalRemove = document.querySelectorAll(".take");
    create4.id = r; //for read cell
    create5.id = r; //gives element a data attr for toggle read
    create5.read = read;
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