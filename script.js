var newRows = []

function loadRows() {
  var table = document.getElementById("salaryInfo");
  let loadedRows = JSON.parse(localStorage.getItem("rows"))
  
  if (loadedRows && loadedRows.length > 0){
    for (let i = 0; i < loadedRows.length; i++) {
      var currRow = loadedRows[i]
      newRows.push(currRow)
      
      var row = table.insertRow(table.length);
      var role = row.insertCell(0);
      var salary = row.insertCell(1);
      var gender = row.insertCell(2);
      var experience = row.insertCell(3);
      
      role.innerHTML = currRow[0];
      salary.innerHTML = currRow[1];
      gender.innerHTML = currRow[2];
      experience.innerHTML = currRow[3];
    }
  }
  localStorage.clear()
  localStorage.setItem("rows", JSON.stringify(newRows))
}

function createRow(){
  var table = document.getElementById("salaryInfo");
  var row = table.insertRow(table.length);
  
  var role = row.insertCell(0);
  var salary = row.insertCell(1);
  var gender = row.insertCell(2);
  var experience = row.insertCell(3);
  
  role.innerHTML = document.getElementById("role").value;
  salary.innerHTML = "$"+document.getElementById("salary").value;
  gender.innerHTML = document.getElementById("gender").value;
  experience.innerHTML = document.getElementById("experience").value;
  
  newRows.push([document.getElementById("role").value, document.getElementById("salary").value, document.getElementById("gender").value, document.getElementById("experience").value])
  localStorage.setItem("rows", JSON.stringify(newRows))
}
