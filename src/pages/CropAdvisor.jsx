import React from "react";

import {
Sprout,
Droplets,
Sun,
TrendingUp,
ShieldCheck
} from "lucide-react";

import "./CropAdvisor.css";

const crops=[

{
icon:"🌾",

name:"Rice",

season:"Kharif",

profit:"High",

water:"High"

},

{
icon:"🌽",

name:"Maize",

season:"Kharif",

profit:"Medium",

water:"Medium"

},

{
icon:"🍅",

name:"Tomato",

season:"All Season",

profit:"High",

water:"Medium"

},

{
icon:"🌿",

name:"Cotton",

season:"Kharif",

profit:"Very High",

water:"Medium"

}

];

export default function CropAdvisor(){

return(

<div className="crop-page">

<div className="crop-banner">

<h1>

🌱 Smart Crop Advisory

</h1>

<p>

AI based crop recommendations for farmers

</p>

</div>



<div className="summary-grid">

<div className="summary-card">

<Sun/>

<h3>

Summer

</h3>

<p>

Best Season

</p>

</div>

<div className="summary-card">

<Droplets/>

<h3>

Medium

</h3>

<p>

Water Need

</p>

</div>

<div className="summary-card">

<TrendingUp/>

<h3>

High

</h3>

<p>

Profit Potential

</p>

</div>

<div className="summary-card">

<ShieldCheck/>

<h3>

Safe

</h3>

<p>

Low Risk

</p>

</div>

</div>



<h2>

🌾 Recommended Crops

</h2>

<div className="crop-grid">

{crops.map(crop=>(

<div

key={crop.name}

className="crop-card"

>

<div className="crop-icon">

{crop.icon}

</div>

<h3>

{crop.name}

</h3>

<p>

📅 {crop.season}

</p>

<p>

💰 Profit : {crop.profit}

</p>

<p>

💧 Water : {crop.water}

</p>

<button>

View Details

</button>

</div>

))}

</div>



<div className="tips-card">

<h2>

🧠 Farming Suggestions

</h2>

<ul>

<li>

🌱 Rice is suitable for current weather.

</li>

<li>

💧 Water crops early morning.

</li>

<li>

🧪 Use organic fertilizer.

</li>

<li>

☀️ Avoid afternoon pesticide spraying.

</li>

</ul>

</div>

</div>

);

}