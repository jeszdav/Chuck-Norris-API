const btn = document.getElementById("btn");

//------------------------------------
// FETCH FUNCTIONS
//------------------------------------
function newFetch() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(checkStatus)
    .then((response) => response.json())
    .then((data) => generateFact(data.value))
    .catch((error) => console.log("Looks like there was a problem", error));
}
//------------------------------------
// HELPER FUNCTIONS
//------------------------------------
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function generateFact(data) {
  const html = `
  <p>'${data}'</p>
  `;
  chuckDiv.innerHTML = html;
}

//------------------------------------
// EVENT HANDLERS
//------------------------------------
btn.addEventListener("click", () => {
  newFetch();
});
