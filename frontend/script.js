function loadEvent(){

    fetch('beers.json')
    .then(response => response.json())
    .then(data => console.log(data.cards));

};
  
window.addEventListener('load', loadEvent);
  