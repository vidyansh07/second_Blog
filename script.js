// Simulating the dynamic loading of blog posts
const postsContainer = document.getElementById("posts");

const posts = [
  { title: "Post 1", content: "This is the content of post 1." },
  { title: "Post 2", content: "This is the content of post 2." },
  { title: "Post 3", content: "This is the content of post 3." },
];

posts.forEach((post) => {
  const postElement = document.createElement("div");
  postElement.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
  `;
  postsContainer.appendChild(postElement);
});

// Handling comment submission
const commentForm = document.getElementById("comment-form");
const commentsList = document.getElementById("comments-list");

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");

  const name = nameInput.value;
  const comment = commentInput.value;

  const commentElement = document.createElement("div");
  commentElement.innerHTML = `
    <h4>${name}</h4>
    <p>${comment}</p>
  `;

  commentsList.appendChild(commentElement);

  nameInput.value = "";
  commentInput.value = "";
});
