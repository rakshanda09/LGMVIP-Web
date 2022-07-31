var selectedRow = null

function onFormSubmit(){
    if(validate()) {
        var formData= readFormData();
        if(selectedRow == null)
            insertNewRecord(formData);

        else 
            updateRecord(formData);
        resetForm();

    }
}


function readFormData(){

    var formData={};

    formData["fname"]=document.getElementById("fname").value;
    formData["lname"]=document.getElementById("lname").value;
    formData["contact"]=document.getElementById("contact").value;
    formData["mail"]=document.getElementById("mail").value;
    formData["ffname"]=document.getElementById("ffname").value;
    return formData;

}

function insertNewRecord(data){

    var table=document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);

    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fname;

    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.lname;

    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.contact;

    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.mail;
    
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.ffname;
    cell5=newRow.insertCell(5);
    cell5.innerHTML= `<a onClick="onEdit(this)">Edit</a>
                      <a onClick="onDelete(this)">Delete</a>`;
}
    
                
    function resetForm(){
        document.getElementById("fname").value="";
        document.getElementById("lname").value="";
        document.getElementById("contact").value="";
        document.getElementById("mail").value="";
        document.getElementByID("ffname").value="";
        selectedRow=null;

    };

    function onEdit(td){

        selectedRow=td.parentElement.parentElement;

        document.getElementById("fname").value=selectedRow.cells[0].innerHTML;
        document.getElementById("lname").value=selectedRow.cells[1].innerHTML;
        document.getElementById("contact").value=selectedRow.cells[2].innerHTML;
        document.getElementById("male").value=selectedRow.cells[3].innerHTML;
        document.getElementById('female').value=selectedRow.cells[4].innerHTML;
        document.getElementById("ffname").value=selectedRow.cells[5].innerHTML;
    }
    

    function updateRecord(formData){
        selectedRow.cells[0].innerHTML = formData.fname;
        selectedRow.cells[1].innerHTML = formData.lname;
        selectedRow.cells[2].innerHTML = formData.contact;
        selectedRow.cells[3].innerHTML = formData.mail;
        selectedRow.cells[0].innerHTML = formData.ffname;
    }
   
    function onDelete(td) {
        if (confirm('Are you sure to delete this record ?')) {
            row = td.parentElement.parentElement;
            document.getElementById("employeeList").deleteRow(row.rowIndex);
            resetForm();
        }
    }

    function validate() {
        isValid = true;
        
        if (document.getElementById("fname").value == "") {
            isValid = false;
            document.getElementById("fnameValidationError").classList.remove("hide");
        }

    else {
            isValid = true;
            if (!document.getElementById("fnameValidationError").classList.contains("hide"))
                document.getElementById("fnameValidationError").classList.add("hide");
        }
        return isValid;
}


