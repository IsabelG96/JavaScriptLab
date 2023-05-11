const enter = document.getElementById("enter"); 

enter.addEventListener("click", event =>{

    const newItem = document.getElementById("new-todo").value;

    console.log(newItem);

    const listItem1 = document.createElement("li");
    const deleteButton = document.createElement("button");
    const completeButton = document.createElement("button");
    
    listItem1.innerText = newItem;
    deleteButton.innerText = "delete";
    completeButton.innerText = "Mark as complete";
    
    listItem1.appendChild(deleteButton);
    listItem1.appendChild(completeButton);


    let list = document.getElementById("list");
    list.appendChild(listItem1);

    deleteButton.addEventListener("click", event =>{
        console.log("button clicked");
        list.removeChild(listItem1);
    });
    completeButton.addEventListener("click", event =>{
        listItem1.setAttribute("style", "color: green;")
    });
    });

    

    // create a new element (deleteButton) similar to line 9
    // create a function that deletes an element (needs to accept an element)
    // change the inner text to delete
    // append delete button to listitem1 via list
    // add event listener to button
    // remove child (listItem1)


    // create a new element (completebutton)
    // change inner text to replace
    // append completebuttom to listitem1
    // create function for completebutton
    // add event listener
    // change color of listitem1


    




