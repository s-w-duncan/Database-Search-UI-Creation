// Define Data.Js
var tableData = data;
console.log(tableData);

// Reference Table Body
var tbody = d3.select("tbody");

// UFO Sighting Values
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append Eeach UFO Sighting Object
    var row = tbody.append("tr");

    // Use `Object.entries` to Log UFO Sightings
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append to Row
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Button Select
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Input Date Selection
    var inputElement = d3.select("#datetime");
    // Define Date Value Property
    var inputValue = inputElement.property("value");
    // Log Date Value
    console.log(inputValue);
    // Filter Data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // Log Filter Values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append Eeach UFO Sighting Object
    var row = tbody.append("tr");
    // Use `Object.entries` to Log UFO Sightings
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append to Row
        var cell = row.append("td");
        cell.text(value);
    });
});
});
