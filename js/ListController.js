var ListController = {
    
    init: function() {
        ListController.setForm();
    },
    
    setForm: function() {
        var form = document.getElementById('form-name');
        form.addEventListener('submit', ListController.handleEventSubmit);  
    },
        
    handleEventSubmit: function(event) {
        console.log('Trigged');
        var inputName = document.getElementById('name');
        console.log(inputName.value);
        inputName.value = "";
        event.preventDefault();
    },
    
    //TODO move it to HtmlService.js
    addName: function(name) {
        ListService.addName(name);
        ListController.displayAddedName(name);
    },
    
    displayAddedName: function(text) {
        //TODO move it to HtmlService.js
        var li = ListController.createListItem(text);
        ListController.addToList(li);
    },

    //TODO move it to HtmlService.js
    createListItem: function(text) {
        var li = document.createElement('li');
        li.innerHTML = text;
        return li;
    },

    //TODO move it to HtmlService.js
    addToList: function(listItem) {
        var ul = document.getElementById('list-name');
        ul.appendChild(li);
    }
    
};

//initialization
ListController.init();