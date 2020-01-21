fetch('https://worldcup.sfg.io/matches')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  appendData(data);
})
.catch(function (err) {
  console.log('error: ' + err);
});

function appendData(data) {
  var tablecontainer = document.querySelector(".tablecontainer"),
  player=0,
  table = document.createElement("TABLE"); // Creating Table
  table.setAttribute('class','myData')
  tablecontainer.appendChild(table) // appending table to TableContainer
  var mainContainer = document.querySelector(".myData");
  var tr= document.createElement("tr"); // Creating Table row
  tr.setAttribute('class','participatingTeams') 
  mainContainer.appendChild(tr);            
  var Container = document.querySelector('.participatingTeams');
  for (var i = 0; i<10; i++) {                
      var th = document.createElement("th");
    th.innerHTML =  data[i].home_team_country;
    Container.appendChild(th);
  }
  for(var j = 0;j<=10;j++) {
    var row = table.insertRow(); // Creating Rows       
    for (var i = 0; i<10; i++) {
      if(data[i].home_team_statistics.country== data[i].home_team_country) { //comparing table header with home_team_statistics.country to get the playing eleven                  
        var datacell = document.createElement("td"); // Creating data cell
        datacell.innerHTML =  data[i].home_team_statistics.starting_eleven[player].name;              
        row.appendChild(datacell);               
        }                                
      }
      player++;
  }
}