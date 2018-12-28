// this prompts the user to enter the address, maybe set this to the value of an input being entered??
let address = prompt("What's your address?");

const geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

$.getJSON(geoCodeURL, (geoCodeData) => {
    console.log(geoCodeData);
    // this yields the coordinates for the address input
    console.log(geoCodeData.results[0].geometry.location);
});