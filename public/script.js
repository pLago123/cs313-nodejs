/***********************************************************
* CHANGE
* Will change the array of options for each given mail type
***********************************************************/
function change (name) {
  
  // Variables for the DOM
  var target, item, list;

  // Determine which kind of mail it is
  if (name == 'stamped') {

    // Get the selected option
    target = document.getElementById("weight");

    // Remove the childs inside of it
    target.innerHTML = '';

    // insert the new children
    item = document.createElement('option');
    item.value = 0.50;
    item.innerHTML = '1';

    target.appendChild(item);

    item = document.createElement('option');
    item.value = 0.71;
    item.innerHTML = '2';

    target.appendChild(item);

    item = document.createElement('option');
    item.value = 0.92;
    item.innerHTML = '3';

    target.appendChild(item);

    item = document.createElement('option');
    item.value = 1.13;
    item.innerHTML = '3.5³';

    target.appendChild(item);


  } else if (name == 'metered') {

    // Get the selected option
    target = document.getElementById("weight");
    
    // Remove the childs inside of it
    target.innerHTML = '';

    // insert the new children
    item = document.createElement('option');
    item.value = 0.50;
    item.innerHTML = '1';
    target.appendChild(item);

    item = document.createElement('option');
    item.value = 0.71;
    item.innerHTML = '2';
    target.appendChild(item);

    item = document.createElement('option');
    item.value = 0.92;
    item.innerHTML = '3';
    target.appendChild(item);

    item = document.createElement('option');
    item.value = 1.13;
    item.innerHTML = '3.5&#8308;';
    target.appendChild(item);

  } else if (name == 'flat') {

    // Get the selected option
    target = document.getElementById("weight");

    // Remove the childs inside of it
    target.innerHTML = '';

    // insert the new children
    item = document.createElement('option');
    item.value = 1.00;
    item.innerHTML = '1';
    target.appendChild(item);

    item = document.createElement('option');
    item.value = 1.21;
    item.innerHTML = '2';
    target.appendChild(item);

    item = document.createElement('option');
    item.value = 1.42;
    item.innerHTML = '3';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 1.63;
    item.innerHTML = '4';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 1.84;
    item.innerHTML = '5';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 2.05;
    item.innerHTML = '6';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 2.26;
    item.innerHTML = '7';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 2.47;
    item.innerHTML = '8';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 2.68;
    item.innerHTML = '9';
    
    target.appendChild(item);
    item = document.createElement('option');
    item.value = 2.89;
    item.innerHTML = '10';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 3.10;
    item.innerHTML = '11';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 3.31;
    item.innerHTML = '12';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 3.52;
    item.innerHTML = '13';
    target.appendChild(item);

  } else if (name == 'parcel') {
    
    // Get the selected option
    target = document.getElementById("weight");

    // Remove the childs inside of it
    target.innerHTML = '';

    // insert the new children
    item = document.createElement('option');
    item.value = 3.50;
    item.innerHTML = '1';
    target.appendChild(item);

    item = document.createElement('option');
    item.value = 3.50;
    item.innerHTML = '2';
    target.appendChild(item);

    item = document.createElement('option');
    item.value = 3.50;
    item.innerHTML = '3';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 3.50;
    item.innerHTML = '4';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 3.75;
    item.innerHTML = '5';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 3.75;
    item.innerHTML = '6';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 3.75;
    item.innerHTML = '7';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 3.75;
    item.innerHTML = '8';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 4.10;
    item.innerHTML = '9';
    
    target.appendChild(item);
    item = document.createElement('option');
    item.value = 4.45;
    item.innerHTML = '10';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 4.80;
    item.innerHTML = '11';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 5.15;
    item.innerHTML = '12';
    target.appendChild(item);
    
    item = document.createElement('option');
    item.value = 5.50;
    item.innerHTML = '13';
    target.appendChild(item);
    
  }

}

// Load the weight menu according to the selected mail type
document.querySelector("#mail").addEventListener('change', () => {
  var name = document.querySelector("#mail").value;
  change(name);

});

// Load the first value of list to the page
window.onload = () => {

  // Get the first item from the mail list
  var element = document.getElementById("mail").options[0];

  // Mark the first element as selected
  element.selected = "selected";

  // Change the option values, setting them first to the first mail item
  change(element.value);
};