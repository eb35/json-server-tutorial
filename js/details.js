
const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deletebutton = document.querySelector(".delete");

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

deletebutton.addEventListener("click", async (event) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE"
  });

  window.location.replace("/");
});