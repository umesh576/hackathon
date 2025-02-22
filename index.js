const suggestionsList = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Grapes",
  "Mango",
  "Orange",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

const searchBox = document.getElementById("search-box");
const suggestions = document.getElementById("suggestions");

// Function to filter and display suggestions
function filterSearch() {
  let input = searchBox.value.toLowerCase();
  suggestions.innerHTML = "";

  if (input === "") {
    suggestions.classList.add("hidden");
    return;
  }

  let filteredItems = suggestionsList.filter((item) =>
    item.toLowerCase().includes(input)
  );

  if (filteredItems.length === 0) {
    suggestions.classList.add("hidden");
  } else {
    suggestions.classList.remove("hidden");
    filteredItems.forEach((item) => {
      let li = document.createElement("li");
      li.textContent = item;
      li.onclick = () => selectItem(item);
      suggestions.appendChild(li);
    });
  }
}

// Function to select item from dropdown
function selectItem(item) {
  searchBox.value = item;
  suggestions.classList.add("hidden");
}
