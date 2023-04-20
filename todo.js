const input = document.querySelector(".i-1");
const buttonAdd = document.querySelector(".btn");
const addMess = document.querySelector(".new-mess");
let arrayFromTodo = [];
if (localStorage.getItem("todo")) {
  arrayFromTodo = JSON.parse(localStorage.getItem("todo"));
  displayMessages();
}

buttonAdd.addEventListener("click", function () {
  const obj = {
    todo: input.value,
    check: false,
  };
  arrayFromTodo.push(obj);
  displayMessages();
  localStorage.setItem("todo", JSON.stringify(arrayFromTodo));
});

function displayMessages() {
  let newTag = "";
  arrayFromTodo.forEach(function (item, index) {
    newTag += `<p class="index_${index}">${
      item.todo
    } <input class="check_${index}" type="checkbox" ${
      item.check ? "checked" : ""
    }></p>`;
    addMess.innerHTML = newTag;
  });

  input.value = "";
}

