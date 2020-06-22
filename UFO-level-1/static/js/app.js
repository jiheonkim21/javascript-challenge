// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Use d3 to update each cell's text with
// UFO sighting values (Date, city, state, country, shape, duration, comments)

data.forEach(function(sighting) {
    var row = tbody.append("tr");
    
    // Append a cell to the row for each value
    // in the UFO table object
    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
})

// Use D3 to select the Date Time input field and the Filter button
var inputField = d3.select("#datetime");
var button = d3.select("#filter-btn");

// On click of the button, call filterTable function
button.on("click", filterTable);

function filterTable() {
    // Clear Table Area
    tbody.html("");

    // Read in the value from the inputField
    filterDate = inputField.property("value");
    
    //Print filter date to console log
    console.log(filterDate);

    // if filterData input field is not blank, filter the original table to include
    // only sightings with dates that match the entered date.
    if(filterDate){
        filteredData = data.filter(sighting => sighting.datetime === filterDate);
    }
    else if(filterDate = " "){
        filteredData = data;
    }

    // Populate tbody with the filtered data
    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
            });
        });
}

