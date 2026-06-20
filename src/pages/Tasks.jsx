import React from "react";

import {
Calendar,
Clock,
CheckCircle,
Bell,
Plus
} from "lucide-react";

import "./Tasks.css";

const tasks=[

{

title:"Water Crops",

time:"06:00 AM",

status:"Completed"

},

{

title:"Check Soil Moisture",

time:"08:00 AM",

status:"Completed"

},

{

title:"Buy Fertilizer",

time:"11:00 AM",

status:"Pending"

},

{

title:"Spray Pesticides",

time:"04:00 PM",

status:"Pending"

},

{

title:"Harvest Rice",

time:"05:30 PM",

status:"Upcoming"

},

{

title:"Check Weather",

time:"07:00 PM",

status:"Upcoming"

}

];

export default function Tasks(){

return(

<div className="tasks-page">

<div className="tasks-banner">

<div>

<h1>

📅 Smart Farm Task Manager

</h1>

<p>

Manage daily farming activities efficiently

</p>

</div>

</div>



<div className="summary-grid">

<div className="summary-card">

<CheckCircle/>

<h3>

2

</h3>

<p>

Completed

</p>

</div>



<div className="summary-card">

<Clock/>

<h3>

2

</h3>

<p>

Pending

</p>

</div>



<div className="summary-card">

<Bell/>

<h3>

2

</h3>

<p>

Upcoming

</p>

</div>



<div className="summary-card">

<Calendar/>

<h3>

Today

</h3>

<p>

Schedule

</p>

</div>

</div>



<div className="tasks-grid">

{tasks.map(item=>(

<div

key={item.title}

className="task-card"

>

<h3>

{item.title}

</h3>

<p>

🕒 {item.time}

</p>

<div

className={`status ${

item.status.toLowerCase()

}`}

>

{item.status}

</div>

</div>

))}

</div>



<div className="add-task-card">

<h2>

➕ Add New Task

</h2>

<p>

Create reminders for daily activities.

</p>

<button>

<Plus size={18}/>

 Add Task

</button>

</div>

</div>

);

}