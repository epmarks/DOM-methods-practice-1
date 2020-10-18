let bodyElement = document.querySelector("body");

let removeMainButton = document.createElement("button");
removeMainButton.append("remove");
bodyElement.append(removeMainButton);
removeMainButton.addEventListener("click", function () {
  mainElement.remove();
});

let mainElement = document.createElement("main");
bodyElement.append(mainElement);

let imgElement = document.createElement("img");
imgElement.className = "image";
imgElement.src =
  "https://media.istockphoto.com/photos/baked-beans-in-tomato-sauce-backgrounds-picture-id524903637?k=6&m=524903637&s=612x612&w=0&h=uZDmQO32jmpMavPfGfhvQOs7kKlLm4XeIGf2K11VNi4=";
mainElement.append(imgElement);

let anchorElement = document.createElement("a");
anchorElement.className = "link";
anchorElement.append("mmmmmmmmMMMmMMMmMMM good!");
anchorElement.href = "https://bushbeans.com/en_US";
mainElement.append(anchorElement);

let selectorInput = document.createElement("input");
selectorInput.id = "remove";
selectorInput.type = "text";
selectorInput.placeholder = "Insert a valid selector";
bodyElement.append(selectorInput);

let removeInput = document.querySelector("#remove");
let removeCSSButton = document.createElement("button");
removeCSSButton.append("Remove selector");
bodyElement.append(removeCSSButton);
removeCSSButton.addEventListener("click", function () {
  let removeElement = document.querySelector(removeInput.value);
  removeElement.remove();
});

let createInput = document.createElement("input");
createInput.id = "create";
createInput.type = "text";
createInput.placeholder = "Add text";
bodyElement.append(createInput);

let addInput = document.querySelector("#create");
let addDivButton = document.createElement("button");
let userElement = document.createElement("div");
addDivButton.append("Add!");
bodyElement.append(addDivButton);
addDivButton.addEventListener("click", function () {
  bodyElement.append(userElement);
  userElement.append(addInput.value);
});
