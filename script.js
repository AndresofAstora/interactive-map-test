// Map dimensions in pixels (width, height of your image)
const mapWidth = 3411; 
const mapHeight = 1000;

// Initialize map with CRS.Simple (for image coordinates)
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2,
  maxZoom: 2
});

// Define image bounds
const bounds = [[0,0], [1000, 3411]];

// Add the custom image as the map
L.imageOverlay('images/map-megabyte-electro1.png', bounds).addTo(map);

// Set initial view to center of image
map.fitBounds(bounds);

// Example marker positions (y, x) in pixels
const markers = [
  { name: 'Start', coords: [100, 100] },
  { name: 'End', coords: [200, 200] },
  { name: 'Checkpoint', coords: [300, 300] },
  { name: 'Bit Chest', coords: [400, 400] },
  { name: 'Part Chest', coords: [500, 500] },
  { name: 'Color Capsule', coords: [600, 600] }
];

// Add markers
markers.forEach(m => {
  L.marker(m.coords).addTo(map)
    .bindPopup(`<b>${m.name}</b>`);
});