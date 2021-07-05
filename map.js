// code from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);


//let platform = new H.service.Platform({
 //   'apikey': '{wepMWCJZ4oa02W2rYbWYyo6YCk5_6jJ0IAajpE_4tP4}'
  //});

 // let defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
//let map = new H.Map(
  //  document.getElementById('mapContainer'),
    //defaultLayers.vector.normal.map,
   // {
     // zoom: 10,
     // center: { lat: 52.5, lng: 13.4 }
    //});

    // Initialize the map: 
//let map = new H.Map(wepMWCJZ4oa02W2rYbWYyo6YCk5_6jJ0IAajpE_4tP4);

// Enable the event system on the map instance:
//let mapEvents = new H.mapevents.MapEvents(map);

// Add event listener:
//map.addEventListener('tap', function(evt) {
    // Log 'tap' and 'mouse' events:
  //  console.log(evt.type, evt.currentPointer.type); 
//});

//let behavior = new H.mapevents.Behavior(mapEvents);

  // Ei5e4_vAVp_bd7f76G7Bp8LgViHSZdO143pslXLUSzY