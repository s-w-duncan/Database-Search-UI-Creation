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

    // Input Data Selection
    var inputElement = d3.select("#input");
    // Define Data Value Property
    var inputValue = inputElement.property("value");
    // Filter Data With Input Value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
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