import React from "react";

import {
MessageSquareWarning,
FileText,
Phone,
CheckCircle,
AlertCircle,
Send
} from "lucide-react";

import "./Complaint.css";

const complaints=[

{

id:"CMP001",

issue:"Delayed PM Kisan Payment",

status:"In Progress"

},

{

id:"CMP002",

issue:"Crop Insurance Issue",

status:"Resolved"

},

{

id:"CMP003",

issue:"Subsidy Verification",

status:"Pending"

}

];

export default function Complaint(){

return(

<div className="complaint-page">

<div className="complaint-banner">

<div>

<h1>

📢 Farmer Support Center

</h1>

<p>

Submit complaints and track their status

</p>

</div>

</div>



<div className="summary-grid">

<div className="summary-card">

<MessageSquareWarning/>

<h3>

12

</h3>

<p>

Complaints

</p>

</div>



<div className="summary-card">

<CheckCircle/>

<h3>

8

</h3>

<p>

Resolved

</p>

</div>



<div className="summary-card">

<AlertCircle/>

<h3>

4

</h3>

<p>

Pending

</p>

</div>



<div className="summary-card">

<Phone/>

<h3>

24/7

</h3>

<p>

Support

</p>

</div>

</div>



<div className="form-card">

<h2>

📝 Raise a Complaint

</h2>

<input

type="text"

placeholder="Complaint title"

/>

<textarea

placeholder="Describe your issue"

rows="5"

></textarea>

<button>

<Send size={18}/>

 Submit Complaint

</button>

</div>



<h2>

📋 Complaint History

</h2>

<div className="complaint-grid">

{complaints.map(item=>(

<div

key={item.id}

className="complaint-card"

>

<FileText size={24}/>

<h3>

{item.issue}

</h3>

<p>

🆔 {item.id}

</p>

<div

className={`status ${

item.status

.toLowerCase()

.replaceAll(

" ",

"-"

)

}`}

>

{item.status}

</div>

</div>

))}

</div>



<div className="help-card">

<h2>

☎️ Helpline Support

</h2>

<p>

Agriculture Help Desk

</p>

<h3>

1800-180-1551

</h3>

</div>

</div>

);

}