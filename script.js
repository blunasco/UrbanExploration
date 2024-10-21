// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 13);  // Center on San Francisco
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Corrected fetch request URL with quotes
fetch('https://data.sfgov.org/resource/gtr9-ntp6.json')
.then(response => response.json())
.then(data => {
  data.forEach(item => {
    var lat = item.latitude;
    var lng = item.longitude;
    var propertyType = item.propertytype || 'Unknown type';  // Reference propertytype, with a fallback

    // Add marker to the map with a popup displaying the property type
    L.marker([lat, lng])
      .bindPopup(`<b>Property Type:</b> ${propertyType}`)
      .addTo(map);
  });
})
.catch(error => console.error('Error fetching data:', error));