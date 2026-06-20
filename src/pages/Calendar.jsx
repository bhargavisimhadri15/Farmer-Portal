import React from "react";

import {
CalendarDays,
Bell,
Clock,
CheckCircle,
Sun,
Plus
} from "lucide-react";

import "./Calendar.css";

const events=[

{

date:"18 Jun",

task:"🌱 Rice Plantation",

time:"06:00 AM"

},

{

date:"20 Jun",

task:"💧 Irrigation",

time:"07:00 AM"

},

{

date:"22 Jun",

task:"🧪 Fertilizer Application",

time:"08:00 AM"

},

{

date:"25 Jun",

task:"🚜 Crop Inspection",

time:"09:00 AM"

},

{

date:"28 Jun",

task:"🌾 Harvest Preparation",

time:"05:00 PM"

},

{

date:"30 Jun",

task:"🌦️ Weather Check",

time:"06:30 PM"

}

];

export default function Calendar(){

return(

<div className="calendar-page">

<div className="calendar-banner">

<div>

<h1>

📅 Smart Farm Calendar

</h1>

<p>

Schedule and manage farming activities

</p>

</div>

</div>



<div className="summary-grid">

<div className="summary-card">

<CalendarDays/>

<h3>

24

</h3>

<p>

Events

</p>

</div>



<div className="summary-card">

<CheckCircle/>

<h3>

12

</h3>

<p>

Completed

</p>

</div>



<div className="summary-card">

<Bell/>

<h3>

6

</h3>

<p>

Reminders

</p>

</div>



<div className="summary-card">

<Sun/>

<h3>

Today

</h3>

<p>

Weather Plan

</p>

</div>

</div>



<h2>

🗓️ Upcoming Activities

</h2>

<div className="calendar-grid">

{events.map(item=>(

<div

key={item.task}

className="event-card"

>

<h3>

{item.task}

</h3>

<p>

📅 {item.date}

</p>

<p>

🕒 {item.time}

</p>

</div>

))}

</div>



<div className="planner-card">

<h2>

➕ Create Schedule

</h2>

<input

type="text"

placeholder="Enter activity"

/>

<input

type="date"

/>

<input

type="time"

/>

<button>

<Plus size={18}/>

 Add Schedule

</button>

</div>



<div className="tips-card">

<h2>

🧠 Smart Suggestions

</h2>

<ul>

<li>

🌅 Water crops early morning.

</li>

<li>

🧪 Apply fertilizer before rain.

</li>

<li>

🌦️ Check weather before harvesting.

</li>

<li>

📅 Plan weekly farming activities.

</li>

</ul>

</div>

</div>

);

}