const saveButton = document.getElementById("save");
const deleteButton = document.getElementById("delete");

saveButton.addEventListener("click", save);
deleteButton.addEventListener("click", deleteFn);

const nameVar = "name";

function save() {
  const name = document.getElementById("name");
  localStorage.setItem(nameVar, name.value);
  name.value = "";
  showName();
}

function deleteFn() {
  localStorage.removeItem(nameVar);
  showName();
}

function showName() {
  const label = document.getElementById("stored");
  const local = localStorage.getItem(nameVar);
  if (local) {
    label.innerText = local;
  } else {
    label.innerText = "";
  }
}

showName();

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
});
