const enter = document.getElementById("enter"); 

enter.addEventListener("click", event =>{

    const newItem = document.getElementById("new-todo").value;

    console.log(newItem);

    const listItem1 = document.createElement("li");
    // const listItem2 = document.createElement("li");
    // const listItem3 = document.createElement("li");
    
    
    listItem1.innerText = newItem;
    // listItem2.innerText = "Build a wooden house";
    // listItem3.innerText = "Build a brick house";


    let list = document.getElementById("list");
    list.appendChild(listItem1);
    // list.appendChild(listItem2);
    // list.appendChild(listItem3);


    })

    delete.addEventListener("click", event =>{
    list.removeChild(listItem1);

})




