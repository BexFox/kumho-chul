$( document ).ready(function() {
  console.log( "ready!" );
});
var mapOptions = {
  center: new naver.maps.LatLng(37.3595704, 127.105399),
  zoom: 10
};
var map = new naver.maps.Map('map', mapOptions); // id와 option