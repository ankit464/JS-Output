//@import("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
const item = document.querySelector("#item");

const todobox = document.querySelector("#to-do-box");
item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    console.log(this.value);
    addtodo(this.value);
    this.value = "";
  }
});
const addtodo = (item) => {
  const listitem = document.createElement("li");
  listitem.innerHTML = `${item}  ${new Date().toLocaleString()}<i class="fa fa-times"></i>`;

  listitem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listitem.querySelector("i").addEventListener("click", function () {
    listitem.remove();
  });
  todobox.appendChild(listitem);
};
