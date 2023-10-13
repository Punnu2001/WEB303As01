/*
    Assignment #4
Deepak Dhiman
*/

$(function () {
    $(document).ready(function () {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            showError("Geolocation is not supported by your browser.");
        }
    });
    
    function successCallback(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;
    
        const locationHere = $("#locationhere");
        locationHere.text(`Latitude: ${latitude}, Longitude: ${longitude}`);
    
        const storedLocation = localStorage.getItem("location");
        const welcomeMessage = $("<h2>");
        const distanceMessage = $("<p>");
        const accuracyMessage = $("#accuracy-message");
    
        if (storedLocation) {
            const storedCoordinates = JSON.parse(storedLocation);
            const distance = calcDistanceBetweenPoints(
                latitude,
                longitude,
                storedCoordinates.latitude,
                storedCoordinates.longitude
            );
    
            welcomeMessage.text("Welcome back to the page!");
            distanceMessage.text(`You traveled ${distance} km since your last visit.`);
            accuracyMessage.text(`Accuracy: ${accuracy} meters`);
        } else {
            welcomeMessage.text("Welcome to the page for the first time!");
            distanceMessage.text("");
            accuracyMessage.text(`Accuracy: ${accuracy} meters`);
        }
        $("#content").append(welcomeMessage);
        $("#content").append(distanceMessage);
    
        localStorage.setItem("location", JSON.stringify({ latitude, longitude }));
    }
    
    function errorCallback(error) {
        showError("Error getting geolocation: " + error.message);
    }
    
    function showError(message) {
        const errorMessage = $("#error-message");
        errorMessage.text(message);
    }





    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


