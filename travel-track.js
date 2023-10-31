function saveTravel(rest, city, desc) {
    let info = [];
    info.push(rest, city, desc);
    if (data == null) {
      data = [info];
    } else {
      data.push(info);
    }
    localStorage.setItem('travelLog', JSON.stringify(data)); // update localStorage
}
let entries = localStorage.getItem('travelLog');
var data = [];
if (entries != '') {
  data = JSON.parse(entries);
}
document.getElementById('submitbutton').addEventListener("click", () => {
    let restname = document.getElementById('restaurant-name').value;
    let city = document.getElementById('city').value;
    let desc = document.getElementById('text').value;
    document.getElementById("card-container").innerHTML += 
    `<div class="card" style="width: 40rem; margin-top: 1rem;">
    <img src="restaurant.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${restname}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${city}</h6>
        <p class="card-text">${desc}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
    </div>`;
    saveTravel(restname, city, desc);
});