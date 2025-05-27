import travel from "./assets/images/travel.png";
import seoul from "./assets/images/seoul.jpg";
import london from "./assets/images/london.jpg";
import paris from "./assets/images/paris.jpg";
import newyork from "./assets/images/newyork.jpg";
import { useState } from "react";
export default function App() {
  const cities = [
    { name: "Seoul", image: seoul, alt: "서울" },
    { name: "London", image: london, alt: "런던" },
    { name: "Paris", image: paris, alt: "파리" },
    { name: "NewYork", image: newyork, alt: "뉴욕" },
  ];
  const [country, setCountry] = useState(seoul);
  const [altdata, setaltdata] = useState("서울");

  const handleClickEvent = (city: string, a: string) => {
    console.log(city, a);

    setCountry(city);
    setaltdata(a);
  };
  return (
    <>
      <div className="absolute top-10 left-10 text-3xl cursor-pointer">
        <div className="light-icon fa-regular fa-sun"></div>
        <div className="dark-icon fa-regular fa-moon hidden"></div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center   max-w-[500px]">
          <img src={travel} alt={"로고"} width={80} />
          <ul className="flex items-center antialiased justify-around w-full h-[50px] mt-3">
            {cities.map((city) => (
              <li
                key={city.name}
                className="hover:bg-gray-300 w-full h-full flex justify-center items-center transform transition duration-200 ease-in-out"
              >
                <a
                  href="#"
                  onClick={() => handleClickEvent(city.image, city.alt)}
                >
                  {city.name}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <img src={country} alt={altdata} />
            {/* <img src={london} alt={"런던"} />
            <img src={paris} alt={"파리"} />
            <img src={newyork} alt={"뉴욕"} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
