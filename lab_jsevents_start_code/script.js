const enter = document.getElementById("enter"); 

enter.addEventListener("click", event =>{

    const newItem = document.getElementById("new-todo");
    newItem.querySelector("#new-todo").innerHTML="Hello World!";

    // const listItem1 = document.createElement("li");
    // const listItem2 = document.createElement("li");
    // const listItem3 = document.createElement("li");
    
    
    // listItem1.innerText = newItem;
    // listItem2.innerText = "Build a wooden house";
    // listItem3.innerText = "Build a brick house";


    // let list = document.getElementById("list");

    list.appendChild(newItem);
    // list.appendChild(listItem2);
    // list.appendChild(listItem3);

})

