
(() => {
    const mapScript = document.createElement('script');
    mapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDp-SeIrTl66ZhxQ2fi5HN63GfQ-jFOnL4&callback=initMap";
    mapScript.async = true;
    document.body.appendChild(mapScript);
})();
let goog = undefined;

const churchLocal = { lat: 46.7232666, lng: -92.102083 };
let directionsService = null;
let directionsRenderer = null;
let churchMarker = undefined;
let map = undefined;

window.initMap = function () {
    if (window && window.google && window.dirrectionsSetter) {
        goog = window.google;

        map = new goog.maps.Map(document.getElementById('map'), { zoom: 18, center: churchLocal });
        churchMarker = new goog.maps.Marker({ position: churchLocal, map: map });

        directionsService = new goog.maps.DirectionsService();
        directionsRenderer = new goog.maps.DirectionsRenderer();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => { window.getDirections({ lat: position.coords.latitude, lng: position.coords.longitude }, window.dirrectionsSetter); });
        }
    }
}

window.getDirections = function (start) {
    if (start && goog) {
        directionsRenderer.setMap(null);
        map.setCenter(churchLocal);

        var request = {
            origin: start,
            destination: churchLocal,
            travelMode: 'DRIVING'
        };

        directionsService.route(request, function (result, status) {
            if (status == 'OK') {
                directionsRenderer.setMap(map);
                directionsRenderer.setDirections(result);
                console.log("result: ", result);
                window.reso = result;
                window.dirrectionsSetter(result);
            }
            else {
                window.setHasError(true);
            }
            window.setIsLoading(false);
        });
    }
}