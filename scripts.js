const geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBhEyPG1pqRNT2FOdpiMX_2zRDYgY8Y1W0`;

$.getJSON(geoCodeURL, (geoCodeData) => {
    console.log(geoCodeData);
});