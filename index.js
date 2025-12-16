// Copyrighting
let date = new Date();
let year = date.getFullYear();
const copyright = document.getElementById("copyright");
copyright.textContent = `© ${year} Landon Linn`;

// Blog Filtering
const filterContainer = document.getElementById("filters");
const activeFilterContainer = document.getElementById("active-filters")

let filters = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Under 15 min",
]

let activeFilters = new Set();

// Add filters into filter container
for(let filter of filters){
    let currentFilter = document.createElement('li')
    currentFilter.textContent = filter;
    currentFilter.className = "filter-item";

    // Method to add active filter
    currentFilter.addEventListener("click", () => {
        // Add to activeFilters Set
        activeFilters.add(filter);

        // Clear filters
        activeFilterContainer.innerHTML = "";

        // Iterate ActiveFilters Set
        activeFilters.forEach(activeFilter => {
            // Set Elements
            let activeFilterBG = document.createElement('div');
            activeFilterBG.className = "active-filter-container";

            let activeFilterElem = document.createElement('p');
            activeFilterElem.classList = "active-filter-text";
            activeFilterElem.textContent = activeFilter;

            // Appending
            activeFilterBG.appendChild(activeFilterElem);
            activeFilterContainer.appendChild(activeFilterElem);
        });
        
    });

    filterContainer.appendChild(currentFilter);
}
