/***********************************************************
* CALCULATE RATE 
* Will post the form's data to the server and perform an 
* XMLHTTPRequest to the server in order to retrieve it and
* display without having to reload the page or using another
* one.
***********************************************************/
function calculateRate() {
  var formData = new FormData(document.querySelector("form"));
  var params = {};
  formData.forEach(function (value, key) {
    params[key] = value;
  });
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var content = JSON.parse(this.responseText);
      
      // Get the response div
      var div = document.getElementById("result");
      
      // Write the result from the request
      div.innerHTML = "<h1 class='text-center'>" + "Price for " + content.mail + "</h1>" +
        "<p>$" + Number(content.weight).toFixed(2) + "</p>";
    }
  };
  xmlhttp.open("POST", "/getRate");
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.send(JSON.stringify(params));
};