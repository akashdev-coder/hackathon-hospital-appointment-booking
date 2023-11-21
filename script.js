let map;
let poiData = [
    { name: 'Museum', location: { lat: 40.7128, lng: -74.0060 }, description: 'A great museum.' },
    // Add more points of interest here
];

function initMap() {
    // Initialize the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 12
    });

    // Add markers for points of interest
    for (let i = 0; i < poiData.length; i++) {
        addMarker(poiData[i]);
        addPOICard(poiData[i]);
    }
}

function addMarker(poi) {
    const marker = new google.maps.Marker({
        position: poi.location,
        map: map,
        title: poi.name
    });

    // Add a click event to show info window
    marker.addListener('click', function () {
        showInfoWindow(poi);
    });
}

function addPOICard(poi) {
    const card = `<div class="card">
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="${poi.name}">
                    <div class="card-body">
                        <h5 class="card-title">${poi.name}</h5>
                        <p class="card-text">${poi.description}</p>
                    </div>
                </div>`;

    document.getElementById('poi-list').innerHTML += card;
}

function showInfoWindow(poi) {
    // Implement code to display an info window with details about the point of interest
    // You can use Bootstrap modals for this purpose
    // Example: $('#myModal').modal('show');
}
