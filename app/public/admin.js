

document.addEventListener("DOMContentLoaded", async function(e) {
  console.log("La página ha sido cargada (DOMContentLoaded).");
  const res = await fetch("http://localhost:4000/api/books",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  });
  if(!res.ok) return mensajeError.classList.toggle("escondido",false);
  const resJson = await res.json();
  const tbody = document.getElementById("tbody-books");
  console.log(resJson)
  for (let i = 0; i < resJson.length; i++) {
    const column = document.createElement("tr");
    const {Author, Id, Title, Url, Year} = resJson[i]
    const field1 = document.createElement("td");
    const textField1 = document.createTextNode(Year)
    field1.appendChild(textField1)
    const field2 = document.createElement("td");
    const textField2 = document.createTextNode(Author)
    field2.appendChild(textField2)
    const field3 = document.createElement("td");
    const textField3 = document.createTextNode(Title)
    field3.appendChild(textField3)
    const field4 = document.createElement("td");
    const textField4 = document.createTextNode(Url)
    field4.appendChild(textField4)
    /*const field5 = document.createElement("td");
    const textField5 = document.createTextNode(Year)
    field5.appendChild(textField5)*/

    column.appendChild(field1)
    column.appendChild(field2)
    column.appendChild(field3)
    column.appendChild(field4)
    /*column.appendChild(field5)*/

    tbody.appendChild(column)
  }



});

document.getElementsByTagName("button")[0].addEventListener("click",()=>{
  document.cookie ='jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.location.href = "/"
});




