import React, { useState } from "react";

import {
User,
Bell,
Moon,
Globe,
Shield,
Save
} from "lucide-react";

import "./Settings.css";

export default function Settings(){

const [notifications,setNotifications]=useState(true);

const [darkMode,setDarkMode]=useState(false);

return(

<div className="settings-page">
    <div className="settings-banner">

<h1>

⚙️ Smart Portal Settings

</h1>

<p>

Customize your Farmer Support Portal

</p>

</div>



<div className="settings-grid">

<div className="setting-card">

<User size={28}/>

<div>

<h3>

Profile Settings

</h3>

<p>

Manage account information

</p>

</div>

</div>



<div className="setting-card">

<Bell size={28}/>

<div>

<h3>

Notifications

</h3>

<p>

Weather and market alerts

</p>

</div>

<label className="switch">

<input

type="checkbox"

checked={notifications}

onChange={()=>

setNotifications(

!notifications

)

}

/>

<span className="slider">

</span>

</label>

</div>



<div className="setting-card">

<Moon size={28}/>

<div>

<h3>

Dark Mode

</h3>

<p>

Enable dark theme

</p>

</div>

<label className="switch">

<input

type="checkbox"

checked={darkMode}

onChange={()=>

setDarkMode(

!darkMode

)

}

/>

<span className="slider">

</span>

</label>

</div>



<div className="setting-card">

<Globe size={28}/>

<div>

<h3>

Language

</h3>

<p>

Select your language

</p>

</div>

<select>

<option>

English

</option>

<option>

తెలుగు

</option>

<option>

Hindi

</option>

</select>

</div>



<div className="setting-card">

<Shield size={28}/>

<div>

<h3>

Privacy

</h3>

<p>

Secure your information

</p>

</div>

</div>

</div>



<div className="save-card">

<button>

<Save size={18}/>

 Save Settings

</button>

</div>

</div>

);

}