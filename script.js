const enterButton = document.getElementById("enter");
const input = document.getElementById("note");
const list = document.querySelector("ul");
const tasks = document.querySelector("li");
function lengthofInput() {
  return input.value.length;
}
function listElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  list.appendChild(li);
  function crossOutTask() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossOutTask);
  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", deleteListItem);
  function deleteListItem() {
    li.classList.add("delete");
    setTimeout(function () {
      li.style.display = "none";
    }, 500);
  }
}
//listElement();
function addTask() {
  if (lengthofInput() > 0) {
    listElement();
    input.value = "";
  }
}
enterButton.onclick = () => addTask();
input.addEventListener("keypress", () => {
  if (event.which === 13) {
    addTask();
  }
});