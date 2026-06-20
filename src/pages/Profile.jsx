import React from "react";

import {
User,
MapPin,
Phone,
Mail,
Award,
Leaf,
Calendar,
Edit
} from "lucide-react";

import "./Profile.css";

export default function Profile(){

return(

<div className="profile-page">

<div className="profile-banner">

<div>

<h1>

👨‍🌾 Farmer Profile

</h1>

<p>

Digital identity and farm information

</p>

</div>

</div>



<div className="profile-card">

<div className="profile-avatar">

👨‍🌾

</div>



<div className="profile-details">

<h2>

Bhargavi Simhadri

</h2>

<p>

🌱 Progressive Farmer

</p>

</div>



<button className="edit-btn">

<Edit size={18}/>

Edit Profile

</button>

</div>



<div className="summary-grid">

<div className="summary-card">

<Leaf/>

<h3>

6 Acres

</h3>

<p>

Farm Land

</p>

</div>



<div className="summary-card">

<Award/>

<h3>

4

</h3>

<p>

Achievements

</p>

</div>



<div className="summary-card">

<Calendar/>

<h3>

8 Years

</h3>

<p>

Experience

</p>

</div>



<div className="summary-card">

<User/>

<h3>

12

</h3>

<p>

Crop Cycles

</p>

</div>

</div>



<div className="info-grid">

<div className="info-card">

<h2>

📋 Personal Information

</h2>

<p>

<User size={18}/>

 Name : Farmer

</p>

<p>

<MapPin size={18}/>

 Location : Andhra Pradesh

</p>

<p>

<Phone size={18}/>

 Phone : +91 XXXXX XXXXX

</p>

<p>

<Mail size={18}/>

 Email : farmer@example.com

</p>

</div>



<div className="info-card">

<h2>

🌾 Farm Information

</h2>

<p>

🌱 Main Crop : Rice

</p>

<p>

💧 Irrigation : Drip System

</p>

<p>

🧪 Farming : Organic

</p>

<p>

🚜 Equipment : Tractor

</p>

</div>

</div>



<div className="achievement-card">

<h2>

🏆 Achievements

</h2>

<ul>

<li>

🥇 Best Yield Award 2025

</li>

<li>

🌱 Organic Farming Certified

</li>

<li>

🚜 Modern Equipment User

</li>

<li>

💧 Water Saving Champion

</li>

</ul>

</div>

</div>

);

}