import React from "react";

import "./Maps.css";

export default function Maps(){

return(

<div className="maps-page">

<div className="maps-banner">

<h1>

🗺️ Smart Village & Farm Maps

</h1>

<p>

Locate farms, markets and agriculture offices

</p>

</div>



<div className="map-card">

<iframe

title="Farmer Map"

src="https://www.google.com/maps?q=Sajjapuram,Andhra%20Pradesh,India&output=embed"

width="100%"

height="500"

style={{

border:0

}}

loading="lazy"

allowFullScreen

>

</iframe>

</div>



<div className="location-grid">

<div className="location-card">

🌾

<h3>

Farm Location

</h3>

<p>

Tanuku

</p>

</div>



<div className="location-card">

🏛️

<h3>

Agriculture Office

</h3>

<p>

Nearby Office

</p>

</div>



<div className="location-card">

🛒

<h3>

Market Yard

</h3>

<p>

Local Market

</p>

</div>



<div className="location-card">

🏥

<h3>

Hospital

</h3>

<p>

Emergency Support

</p>

</div>

</div>

</div>

);

}