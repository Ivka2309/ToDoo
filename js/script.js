var headerButtons;
var allItems;


window.addEventListener("load", function() {


 headerButtons = document.getElementsByClassName('header-cell');
 allItems = document.getElementById("all-items");
 
for (let i = 0; i < headerButtons.length; i++) {
    headerButtons[i].onclick = function() {
        openTab(parseInt(this.id.substr(this.id.length - 1)));
    }
}

examineHash()


var contentInput = document.getElementById("content");
var addButton = document.getElementById("add-btn");


 
var allItemsContainer = document.getElementById("all-items-container");
var activeitemsContainer = document.getElementById("active-items-container");
var completedItemsContainer = document.getElementById("completed-items-container");


var toDoApp = new ToDo(allItemsContainer, activeitemsContainer, completedItemsContainer);

addButton.onclick = function () {
    if (contentInput.value !== '') {
        toDoApp.add(contentInput.value);
        contentInput.value = '';
    }
};


})



window.addEventListener("hashchange", function(e) {
    examineHash();
});
 
examineHash();
 
function examineHash() {
    switch (window.location.hash) {
        case '#all-items':
        case "":
            openTab(1);
            break;
        case '#pending-items':
            openTab(2);
            break;
        case '#active-items':
            openTab(3);
            break;
    }
}



function openTab(no) {
    
var allItems = document.getElementById('all-items');
 
 document.querySelectorAll('.header-cell').forEach(item => {
     item.classList.add("inactive-header-cell");
 });

 document.getElementById("tab-" + no).classList.remove("inactive-header-cell");

 switch (no) {
     case 1:
         allItems.style.marginLeft = "0%";
         window.location.hash = "#all-items";
         break;
     case 2:
         allItems.style.marginLeft = "-100%";
         window.location.hash = "pending-items";
         break;
     case 3:
         allItems.style.marginLeft = "-200%";
         window.location.hash = "#active-item";
         break;
 }
}