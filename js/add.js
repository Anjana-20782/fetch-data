const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  .then(data => {
    let str = `
      <h4>Title</h4>
      <p>${data.title}</p>
      <h4>User ID</h4>
      <p>${data.userId}</p>
      <h4>Body</h4>
      <p>${data.body}</p>
    `;
    document.getElementById("div").innerHTML = str;
  })
  .catch(err => console.error("Error loading post:", err));
