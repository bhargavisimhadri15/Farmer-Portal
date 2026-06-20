import React from "react";

import {
MapPin,
Droplets,
Wind,
Sun,
AlertTriangle
} from "lucide-react";

import "./Weather.css";

const forecast=[

{
day:"Today",

icon:"⛅",

temp:"31°C",

rain:"20%"

},

{
day:"Tomorrow",

icon:"🌧️",

temp:"30°C",

rain:"40%"

},

{
day:"Monday",

icon:"☀️",

temp:"33°C",

rain:"10%"

},

{
day:"Tuesday",

icon:"☀️",

temp:"34°C",

rain:"0%"

},

{
day:"Wednesday",

icon:"🌦️",

temp:"29°C",

rain:"50%"

},

{
day:"Thursday",

icon:"☁️",

temp:"30°C",

rain:"25%"

}

];

export default function Weather(){

return(

<div className="weather-page">

<div className="weather-banner">

<div>

<h1>

🌦️ Smart Weather Center

</h1>

<p>

AI powered weather insights for farmers

</p>

</div>

</div>



<div className="location-card">

<MapPin size={20}/>

Tanuku, Andhra Pradesh

</div>



<div className="today-grid">

<div className="today-card">

<h2>

31°C

</h2>

<p>

⛅ Partly Cloudy

</p>

</div>

<div className="today-card">

<Droplets/>

<h3>

68%

</h3>

<p>

Humidity

</p>

</div>

<div className="today-card">

<Wind/>

<h3>

14 km/h

</h3>

<p>

Wind Speed

</p>

</div>

<div className="today-card">

<Sun/>

<h3>

Moderate

</h3>

<p>

UV Index

</p>

</div>

</div>



<div className="forecast-section">

<h2>

📅 7 Day Forecast

</h2>

<div className="forecast-grid">

{forecast.map(item=>(

<div

key={item.day}

className="forecast-card"

>

<div>

{item.day}

</div>

<div>

{item.icon}

</div>

<div>

{item.temp}

</div>

<div>

💧 {item.rain}

</div>

</div>

))}

</div>

</div>



<div className="farming-card">

<h2>

🌾 Farming Suggestions

</h2>

<ul>

<li>🌱 Good week for Rice cultivation</li>

<li>💧 Irrigate crops tomorrow</li>

<li>🧪 Apply fertilizer in the morning</li>

<li>☀️ Avoid spraying during afternoon</li>

</ul>

</div>



<div className="alert-card">

<AlertTriangle size={24}/>

⚠️ Rain expected tomorrow. Keep seeds protected.

</div>

</div>

);

}