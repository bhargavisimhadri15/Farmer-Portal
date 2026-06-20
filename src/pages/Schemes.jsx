import React from "react";

import {
Search,
FileText,
ShieldCheck,
CreditCard
} from "lucide-react";

import "./Schemes.css";

const schemes=[

{
icon:"👨‍🌾",

name:"PM Kisan Samman Nidhi",

benefit:"₹6000 per year",

status:"Active"

},

{
icon:"🛡️",

name:"PM Fasal Bima Yojana",

benefit:"Crop Insurance",

status:"Open"

},

{
icon:"💳",

name:"Kisan Credit Card",

benefit:"Low Interest Loan",

status:"Available"

},

{
icon:"💧",

name:"PM Krishi Sinchai",

benefit:"Irrigation Support",

status:"Open"

},

{
icon:"🏠",

name:"Rural Housing Scheme",

benefit:"Housing Assistance",

status:"Active"

},

{
icon:"🚜",

name:"Farm Equipment Subsidy",

benefit:"50% Subsidy",

status:"Available"

}

];

export default function GovernmentSchemes(){

return(

<div className="scheme-page">

<div className="scheme-banner">

<div>

<h1>

🏛️ Government Schemes

</h1>

<p>

Farmer welfare and support programs

</p>

</div>

</div>



<div className="search-card">

<Search size={20}/>

<input

type="text"

placeholder="Search schemes..."

/>

</div>



<div className="summary-grid">

<div className="summary-card">

<FileText/>

<h3>

6+

</h3>

<p>

Schemes

</p>

</div>



<div className="summary-card">

<ShieldCheck/>

<h3>

100%

</h3>

<p>

Verified

</p>

</div>



<div className="summary-card">

<CreditCard/>

<h3>

Easy

</h3>

<p>

Benefits

</p>

</div>



<div className="summary-card">

🏛️

<h3>

Active

</h3>

<p>

Applications

</p>

</div>

</div>



<h2>

📋 Available Schemes

</h2>

<div className="scheme-grid">

{schemes.map(item=>(

<div

key={item.name}

className="scheme-card"

>

<div className="scheme-icon">

{item.icon}

</div>

<h3>

{item.name}

</h3>

<p>

🎁 {item.benefit}

</p>

<div className="status">

{item.status}

</div>

<button>

Apply Now

</button>

</div>

))}

</div>



<div className="help-card">

<h2>

📞 Need Help ?

</h2>

<p>

Visit your nearest agriculture office.

</p>

<h3>

1800-180-1551

</h3>

</div>

</div>

);


}