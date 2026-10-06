// Write your code here.
async function fetchData(){
  const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/refs/heads/master/messages.txt");
  return response.data;
}

document.addEventListener("DOMContentLoaded", async function () {
  const textmsg = await fetchData();
  const output = document.querySelector("#output");
  const span = document.createElement('span');
  span.innerHTML = textmsg
  output.appendChild(span);
});

//
// Use axios + async/await to fetch the messages.txt file from the
// URL above and put the response text into the #output div.