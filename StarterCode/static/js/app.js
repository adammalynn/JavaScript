// from data.js
var tdata = data;
console.log(tdata);
// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Get a reference to the table body
var tbody = d3.select("tbody");
var output = d3.select(".table");

// Use d3 to update each cell's text with the ufo report,
// Values should be for (date, city, state, country, shape, duration, comments)
function loadTable(ufoData) {
  // First, clear out any existing data
  tbody.html("");
  u=ufoData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach (([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
  });
}
loadTable(tdata);



// Select the submit button
var filterbtn = d3.select("#filter-btn");


filterbtn.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element for date and get the raw HTML node
  var inputDate = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select("#country");
  var inputShape = d3.select("#shape");
  var satisfied = true;

  // Get the value property of the input element
  var inputValue = inputDate.property("value");
  var inputCalue = inputCity.property("value");
  var inputSalue = inputState.property("value");
  var inputCoalue = inputCountry.property("value");
  var inputShalue = inputShape.property("value");

  // console.log(inputValue);
 
  // var filteredDate = tdata.filter(filData => filData.datetime === inputValue);
  // console.log(filteredDate);
  var filteredOption = tdata.filter(filData => (filData.datetime === inputValue) && (filData.city === inputCalue) );

  // var filteredOption =  tdata.filter(filData => ((filData.datetime === inputValue) && inputValue != " "));  
  //     filteredOption =  tdata.filter(filData => ((filData.city === inputCalue) && inputCalue != " ")); 
  //     filteredOption =  tdata.filter(filData => ((filData.state === inputSalue) && inputSalue != " ")); 
  //     filteredOption =  tdata.filter(filData => ((filData.country === inputCoalue) && inputCoalue != " "));
  //     filteredOption =  tdata.filter(filData => ((filData.shape === inputShalue) && inputShalue != " "));
  
      

loadTable(filteredOption);
 
});





  


















