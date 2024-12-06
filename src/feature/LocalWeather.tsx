import useForecast from "../cache/queries/useForecast.tsx";
import Whale from "../Whale.tsx";
import { useEffect, useState } from "react";
import Play from "../Play.tsx";

export default function LocalWeather() {
  const [location, setLocation] = useState(null);
  const [coords, setCoords] = useState({lat:0,long:0});
  // const [error, setError] = useState(null);
  const [skipOnboarding, setSkipOnboarding] = useState<boolean>(false);

  let timer: number | null = null;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(() => {
      setSkipOnboarding(true);
    }, 2_000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  });
  function getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  }
  const fetchLocationName = async (latitude:any, longitude:any) => {
    const API_KEY = "317ab0df8d2e4b4d8cf07d38acadd7e9"; // Replace with your API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch location data.");
      const data = await response.json();
      if (data.results.length > 0) {
        setLocation(data.results[0].formatted); // The formatted address
      } else {
        // setError("No location data found.");
      }
    } catch (err) {
      // setError(err.message);
    }
  };

  useEffect(() => {
    getLocation()
      .then((position:any) => {
        const { latitude, longitude } = position.coords;
      setCoords({long:position.coords.longitude,lat:position.coords.latitude})
        fetchLocationName(latitude,longitude)
      })
    //   .catch((err) =>
    //     //  setError(err.message)
    // );
  }, []);
  const weather = useForecast(coords.lat, coords.long);

  if (weather.isLoading || !skipOnboarding) {
    return <Intro />;
  }

  if (weather.isError || !weather.data) {
    return "error occurred";
  }




  return (
    <>
      <div>
        <p className="text-center text-blue-700 bg-gray-100">
        {
          location&& location
        }
        </p>
      </div>
      <div className="snow p-2 py-6 bg-blue-400 border-b-4 border-b-blue-300">
        <div></div>
        <h2 className="text-center font-semibold text-5xl text-white">
          {weather.data.current.temperature_2m}{" "}
          <span className="text-lg">°C</span>
        </h2>
        <p className="text-center  text-white">
          <span className="font-semibold">Vitesse du vent</span>{" "}
          {weather.data.current.wind_speed_10m} km/h
        </p>
      </div>

      <div className="flex">
        <div className="relative flex-1 bg-blue-200">
          <div className="flex items-center justify-center h-[150px] w-full animate-pulse overflow-hidden">
            <div className="flex items-center justify-center w-[210px] h-[210px] rounded-full bg-yellow-100 translate-y-1/3">
              <div className="flex items-center justify-center w-[140px] h-[140px] rounded-full bg-yellow-200">
                <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-yellow-300"></div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 h-full flex flex-col items-center justify-center">
            <p className="text-center text-blue-700">
              Aujourd'hui à Sidi Bouzid
            </p>
            <h2 className="text-center font-semibold text-5xl text-blue-700">
              36 <span className="text-lg">°C</span>
            </h2>
            <p className=" text-blue-700">Forte soleil</p>
          </div>
        </div>
        <div className="relative w-full flex-1 bg-blue-900">
          <div className="rain-effects-container">
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-center text-white">Aujourd'hui à Ain Draham</p>
            <h2 className="text-center font-semibold text-5xl text-white">
              24 <span className="text-lg">°C</span>
            </h2>
            <p className="text-white">Forte pluie de tonnerre</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1">
          <iframe
            width="100%"
            height="100%"
            style={{ minHeight: 350 }}
            src="https://www.youtube.com/embed/z9YWRgqrlQo?si=6-SQyy6pnGtpIeIG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex-1 flex flex-col gap-2 p-3">
          <a href="#" className="flex gap-2 text-blue-700">
            <Play height={33} width={33} className="flex-shrink-0" /> Un
            changement de modèle apportera un échauffement bienvenu
          </a>
          <a href="#" className="flex gap-2 text-blue-700">
            <Play height={33} width={33} className="flex-shrink-0" /> Un
            changement de modèle On ne les voit pas souvent sur le lac Érié en
            décembre
          </a>
          <a href="#" className="flex gap-2 text-blue-700">
            <Play height={33} width={33} className="flex-shrink-0" /> Un
            changement de modèle Vidéo : un requin gifle un pêcheur après avoir
            sauté dans un bateau
          </a>
          <a href="#" className="flex gap-2 text-blue-700">
            <Play height={33} width={33} className="flex-shrink-0" /> Un
            changement de modèle Vidéo : un requin gifle un pêcheur après avoir
            sauté dans un bateau
          </a>
          <a href="#" className="flex gap-2 text-blue-700">
            <Play height={33} width={33} className="flex-shrink-0" /> Un
            changement de modèle apportera un échauffement bienvenu
          </a>
        </div>
      </div>
    </>
  );
}

function Intro() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-blue-100">
      <div className="rounded-full h-[450px] w-[250px] bg-blue-300 overflow-hidden">
        <div className="flex items-center justify-center h-[150px] w-full animate-pulse overflow-hidden">
          <div className="flex items-center justify-center w-[210px] h-[210px] rounded-full bg-yellow-100 translate-y-1/3">
            <div className="flex items-center justify-center w-[140px] h-[140px] rounded-full bg-yellow-200">
              <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-yellow-300"></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-100 via-blue-400 to-blue-200 h-full">
          <Whale
            className="animate-bounce animate-whale-to-left"
            height={140}
            width={140}
          />
        </div>
      </div>

      <p className="py-4 font-semibold text-gray-600">Chargement en cours...</p>
    </div>
  );
}
