"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function MapExample() {
  var mapRef = _react.default.useRef(null);
  _react.default.useEffect(function () {
    var google = window.google;
    var map = mapRef.current;
    var lat = "40.748817";
    var lng = "-73.985428";
    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 12,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [{
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#444444"
        }]
      }, {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
          color: "#f2f2f2"
        }]
      }, {
        featureType: "poi",
        elementType: "all",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "road",
        elementType: "all",
        stylers: [{
          saturation: -100
        }, {
          lightness: 45
        }]
      }, {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{
          visibility: "simplified"
        }]
      }, {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
          color: "#4299e1"
        }, {
          visibility: "on"
        }]
      }]
    };
    map = new google.maps.Map(map, mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Notus React!"
    });
    var contentString = '<div class="info-window-content"><h2>Notus React</h2>' + "<p>A free Admin for Tailwind CSS, React, and React Hooks.</p></div>";
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full rounded h-600-px"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded h-full",
    ref: mapRef
  })));
}
var _default = MapExample;
exports.default = _default;