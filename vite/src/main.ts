import "./index.css";
import { v4 as uuidv4 } from "uuid";

type Item = {
  id: string;
  name: string;
  email: string;
};

const form = document.querySelector<HTMLFormElement>("#add-user-form");

const name = document.querySelector<HTMLInputElement>("#name");
const email = document.querySelector<HTMLInputElement>("#email");

const users = document.querySelector<HTMLInputElement>("#user-list");

const userList: Item[] = loadUsers();

userList.forEach(addUser);

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name?.value === undefined || email?.value === undefined) {
    return;
  }

  const userItem: Item = {
    id: uuidv4(),
    name: name.value,
    email: email.value,
  };

  addUser(userItem);

  userList.push(userItem);
  addToLocalStorage();

  name.value = "";
  email.value = "";
});

function addUser(item: Item) {
  const containerElement = document.createElement("div");
  const nameElement = document.createElement("p");
  const emailElement = document.createElement("p");

  nameElement.append(item.name);
  emailElement.append(item.email);

  containerElement.append(nameElement, emailElement);

  users?.append(containerElement);

  containerElement.classList.add("bg-blue-50", "text-blue-400");
}

function addToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(userList));
}

function loadUsers(): Item[] {
  const data = localStorage.getItem("users");
  if (data === null) {
    return [];
  } else {
    return JSON.parse(data);
  }
}
