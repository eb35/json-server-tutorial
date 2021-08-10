
const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");

window.addEventListener("DOMContentLoaded", () => renderDetails());

const renderDetails = async () => {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  const post = await response.json();

  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `;

  container.innerHTML = template;
};