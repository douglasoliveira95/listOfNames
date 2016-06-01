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
    }
    
};

//initialization
ListController.init();