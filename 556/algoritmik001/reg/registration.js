document.getElementById("registrationBtn").addEventListener("click", async (event) => {
  event.preventDefault();
  
  let nameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email").value;
  let passInput = document.getElementById("pass").value;
  let passInputNov = document.getElementById("passNov").value;
  
  if (nameInput !== "" || emailInput !== "" || passInput !== "" || passInputNov !== "") {
    if (passInput != passInputNov){
      alert("Пароль не совпадает")
    }
    else{
      window.location.href = "../index.html";
      alert("Данные сохранены")
    }
  } 
      else{
        alert("Не все поля были заполнены");
      }
});
document.getElementById("back").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../index.html";
});