const blogContainer = document.getElementById("blogs");

async function getAllblog() {
  const response = await fetch("/api/posts");
  const blogs = response.json();
  return blogs;
}

getAllblog().then((blogs) => {
  blogs.forEach((blog) => {
    const card = document.createElement("div");
    card.id = blog._id;
    card.classList.add("card");
    card.style.width = "18rem";
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${blog.title}</h5>
        <p class="card-text">
          ${blog.content}
        </p>
      </div>
    `;

    blogContainer.appendChild(card);
  });
});
