// Write your code here.
async function fetchData(){
  const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/refs/heads/master/customer.json");
  return response.data;
}

document.addEventListener("DOMContentLoaded", async function () {
  const customerData = await fetchData();
  const customerName = document.querySelector("#name");
  const addressUlElement = document.querySelector("#address-list");
  const nameSpanElement = document.createElement('span');
  nameSpanElement.innerHTML = customerData.name;
  customerName.appendChild(nameSpanElement);

  const listAddress = [customerData.address.street, customerData.address.city,customerData.address.state, customerData.address.zip];
  for (let a of listAddress) {
    const liElement = document.createElement('li');
    liElement.innerHTML = a;
    addressUlElement.appendChild(liElement);
  }
  
});

//
// Use axios + async/await to fetch the messages.txt file from the
// URL above and put the response text into the #output div.