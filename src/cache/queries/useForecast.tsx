import axios from "axios";
import keyOf from "../keys.ts";
import { useQuery } from "react-query";

export default function useForecast(lat: number, lng: number) {
  return useQuery(keyOf.forecastByLatLng(lat, lng), {
    staleTime: 60 * 15,
    queryFn: () => fetchForecastByLatLng(lat, lng),
  });
}

function getApiUrl(lat: number, lng: number) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");

  url.searchParams.set("latitude", lat.toString());
  url.searchParams.set("longitude", lng.toString());
  url.searchParams.set(
    "current",
    ["temperature_2m", "wind_speed_10m"].join(","),
  );
  url.searchParams.set(
    "hourly",
    ["temperature_2m", "relative_humidity_2m", "wind_speed_10m"].join(","),
  );

  return url;
}

type ForecastRO = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    wind_speed_10m: string;
  };
  current: {
    time: string; // ISO8601 date string
    interval: number; // in seconds
    temperature_2m: number;
    wind_speed_10m: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
  };
  hourly: {
    time: string[]; // array of ISO8601 date strings
    temperature_2m: number[];
    relative_humidity_2m: number[];
    wind_speed_10m: number[];
  };
};

function fetchForecastByLatLng(lat: number, lng: number) {
  return axios<ForecastRO>(getApiUrl(lat, lng).toString()).then(
    (response) => response.data,
  );
}
