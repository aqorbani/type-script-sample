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
