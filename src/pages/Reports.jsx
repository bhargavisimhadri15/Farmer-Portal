import React from "react";

import {
BarChart3,
TrendingUp,
FileText,
Download,
Calendar,
Wallet
} from "lucide-react";

import "./Reports.css";

const reports=[

{

title:"Rice Production",

value:"850 Kg",

growth:"+12%"

},

{

title:"Cotton Revenue",

value:"₹1,25,000",

growth:"+18%"

},

{

title:"Water Usage",

value:"6200 L",

growth:"-8%"

},

{

title:"Expenses",

value:"₹42,000",

growth:"+5%"

}

];

const history=[

{

month:"January",

income:"₹55,000"

},

{

month:"February",

income:"₹68,000"

},

{

month:"March",

income:"₹82,000"

},

{

month:"April",

income:"₹74,000"

}

];

export default function Reports(){

return(

<div className="reports-page">

<div className="reports-banner">

<div>

<h1>

📊 Farm Analytics & Reports

</h1>

<p>

Track production, expenses and farm performance

</p>

</div>

</div>



<div className="summary-grid">

<div className="summary-card">

<BarChart3/>

<h3>

18

</h3>

<p>

Reports

</p>

</div>



<div className="summary-card">

<TrendingUp/>

<h3>

24%

</h3>

<p>

Growth

</p>

</div>



<div className="summary-card">

<Wallet/>

<h3>

₹2.4L

</h3>

<p>

Revenue

</p>

</div>



<div className="summary-card">

<FileText/>

<h3>

2026

</h3>

<p>

Yearly Data

</p>

</div>

</div>



<h2>

📈 Farm Performance

</h2>

<div className="report-grid">

{reports.map(item=>(

<div

key={item.title}

className="report-card"

>

<h3>

{item.title}

</h3>

<div className="report-value">

{item.value}

</div>

<div className="growth">

{item.growth}

</div>

</div>

))}

</div>



<h2>

📅 Monthly Income

</h2>

<div className="history-grid">

{history.map(item=>(

<div

key={item.month}

className="history-card"

>

<Calendar size={22}/>

<h3>

{item.month}

</h3>

<div>

{item.income}

</div>

</div>

))}

</div>



<div className="download-card">

<h2>

📄 Export Reports

</h2>

<p>

Download PDF reports for farm records.

</p>

<button>

<Download size={18}/>

 Download Report

</button>

</div>

</div>

);

}