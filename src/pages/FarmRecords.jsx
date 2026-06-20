import React from "react";

import {
FolderOpen,
Calendar,
ClipboardList,
FileText,
Download,
Tractor
} from "lucide-react";

import "./FarmRecords.css";

const records=[

{

date:"15 Jun 2026",

activity:"Rice Plantation",

status:"Completed"

},

{

date:"20 Jun 2026",

activity:"Fertilizer Applied",

status:"Completed"

},

{

date:"24 Jun 2026",

activity:"Pesticide Spray",

status:"Pending"

},

{

date:"28 Jun 2026",

activity:"Crop Inspection",

status:"Upcoming"

}

];

export default function FarmRecords(){

return(

<div className="records-page">

<div className="records-banner">

<div>

<h1>

📂 Digital Farm Records

</h1>

<p>

Manage all farm activities in one place

</p>

</div>

</div>



<div className="summary-grid">

<div className="summary-card">

<FolderOpen/>

<h3>

48

</h3>

<p>

Records

</p>

</div>



<div className="summary-card">

<Calendar/>

<h3>

12

</h3>

<p>

Schedules

</p>

</div>



<div className="summary-card">

<ClipboardList/>

<h3>

6

</h3>

<p>

Activities

</p>

</div>



<div className="summary-card">

<Tractor/>

<h3>

4

</h3>

<p>

Crop Cycles

</p>

</div>

</div>



<h2>

📝 Farm Activity History

</h2>

<div className="records-grid">

{records.map(item=>(

<div

key={item.activity}

className="record-card"

>

<h3>

{item.activity}

</h3>

<p>

📅 {item.date}

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



<div className="notes-card">

<FileText size={28}/>

<h2>

📌 Important Notes

</h2>

<ul>

<li>

🌱 Record every farming activity.

</li>

<li>

🧪 Track fertilizer usage.

</li>

<li>

💧 Monitor irrigation schedules.

</li>

<li>

📈 Compare seasonal performance.

</li>

</ul>

</div>



<div className="download-card">

<h2>

📄 Export Farm Records

</h2>

<p>

Download records for future reference.

</p>

<button>

<Download size={18}/>

 Download

</button>

</div>

</div>

);

}