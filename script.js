// JS CODE GOES HERE

// ---- LAYOUT ---
//Create a title and description of the page in the header
//create a form with input area for destination, and text inputs for location, destination and photo, and a submit button
//Create a container for cards (where to put cards when created)

// ---- FUNCTIONALITY ---
// Create an event listener for "submit" on the form 👀

document
  .getElementById("user_inputs_form")
  .addEventListener("submit", function (event) {
    //Make sure to prevent the default behavior of the form 🙏
    event.preventDefault();
    card_layout();

    //TODO: Create a card with the information from the form inputs

    //TODO: Get data from inputs, i.e values from inputs

    //TODO: Use the values to fill in the card layout
  });
function readData() {
  const dest_element = document.querySelector("#destination");
  const loca_element = document.querySelector("#location");
  const photo_element = document.querySelector("#photo_url");
  const descr_element = document.querySelector("#description");

  return {
    destination: dest_element.value,
    location: loca_element.value,
    photo_url: photo_element.value,
    description: descr_element.value,
  };
}
function card_layout() {
  const { destination, photo_url, location, description } = readData();
  let card = document.createElement("div");
  document.getElementById("cards_container").appendChild(card);
  /*
<div>
    <img src="url"/>
    <button>Edit</button>
    <button>Remove</button>
</div>
*/
  const img = document.createElement("img");
  img.src = photo_url;
  card.appendChild(img);

  const hInput = document.createElement("p");
  hInput.innerHTML = `${destination}<br> ${location}<br> ${description}`;
  card.appendChild(hInput);

  const btn_edit = document.createElement("button");
  btn_edit.innerText = "Edit";
  btn_edit.addEventListener("click", handleEdit);
  card.appendChild(btn_edit);

  const btn_remove = document.createElement("button");
  btn_remove.innerText = "Remove";
  btn_remove.addEventListener("click", handleRemove);
  card.appendChild(btn_remove);

  function handleEdit() {
    let destination = window.prompt("Enter new name");
    let location = window.prompt("Enter new location");
    let photo_url = window.prompt("Enter new photo url");

    img.src = photo_url;
    hInput.innerHTML = `${destination}<br> ${location}`;
  }

  function handleRemove() {
    card.remove();
  }
}
//TODO: Make sure each card has an "Edit" and "Remove" button
//TODO: Add the card to the container
//TODO: reset the form
