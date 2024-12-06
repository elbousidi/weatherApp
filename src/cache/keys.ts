const keyOf = {
  forecastByLatLng(lat: number, lng: number) {
    return ["forecast", "lat", lat, "lng", lng];
  },
};

export default keyOf;
