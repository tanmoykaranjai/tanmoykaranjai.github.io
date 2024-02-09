const titleField = document.getElementById("title-field");
const contentField = document.getElementById("content-field");
const publishbtn = document.getElementById("publish-btn");

async function publish() {
  const title = titleField.value;
  const content = contentField.value;

  await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });
}

publishbtn.addEventListener("click", (e) => {
  e.preventDefault();
  publish();
  titleField.value = "";
  contentField.value = "";
});
