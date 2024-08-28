const country = document.querySelector("#country");
const list = document.querySelector("#list");
const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (country.value == "") {
    alert("Input field is empty");
    return;
  }
  let option = new Option(country.value, country.value);

  list.add(option, undefined);

  country.value = "";
});

removeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let selected = [];

  for (let i = 0; i < list.options.length; i++) {
    selected[i] = list.options[i].selected;
  }

  let index = list.options.length;

  while (index--) {
    if (selected[index]) {
      list.remove(index);
    }
  }
});



const message = document.querySelector('#message')

const output = document.querySelector('#output');

message.addEventListener("input" , ()=>{
    output.innerHTML = message.value;
})
