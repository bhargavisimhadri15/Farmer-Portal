import React from "react";

import {
Newspaper,
Bell,
TrendingUp,
Calendar
} from "lucide-react";

import "./News.css";

const newsData=[

{
emoji:"🌧️",

title:"Heavy Rain Alert",

desc:"Rain expected in Andhra Pradesh tomorrow.",

time:"2 hours ago"

},

{
emoji:"💰",

title:"Cotton Prices Increased",

desc:"Cotton market price increased by 3%.",

time:"5 hours ago"

},

{
emoji:"🏛️",

title:"PM Kisan Released",

desc:"New installment has been released.",

time:"1 day ago"

},

{
emoji:"🌾",

title:"Rice Season Started",

desc:"Good conditions for rice cultivation.",

time:"1 day ago"

},

{
emoji:"🧪",

title:"Organic Farming Awareness",

desc:"Use organic fertilizers for better yield.",

time:"2 days ago"

},

{
emoji:"🚜",

title:"Subsidy Applications Open",

desc:"Farm equipment subsidy applications started.",

time:"2 days ago"

}

];

export default function News(){

return(

<div className="news-page">

<div className="news-banner">

<div>

<h1>

📰 Agriculture News Center

</h1>

<p>

Latest farming updates and alerts

</p>

</div>

</div>



<div className="summary-grid">

<div className="summary-card">

<Newspaper/>

<h3>

25+

</h3>

<p>

Daily News

</p>

</div>



<div className="summary-card">

<Bell/>

<h3>

5

</h3>

<p>

Alerts

</p>

</div>



<div className="summary-card">

<TrendingUp/>

<h3>

Live

</h3>

<p>

Market Updates

</p>

</div>



<div className="summary-card">

<Calendar/>

<h3>

Today

</h3>

<p>

Latest

</p>

</div>

</div>



<h2>

🔥 Trending Updates

</h2>

<div className="news-grid">

{newsData.map(item=>(

<div

key={item.title}

className="news-card"

>

<div className="news-icon">

{item.emoji}

</div>

<h3>

{item.title}

</h3>

<p>

{item.desc}

</p>

<div className="news-time">

🕒 {item.time}

</div>

<button>

Read More

</button>

</div>

))}

</div>



<div className="alert-box">

⚠️ Weather alert issued for tomorrow.

Protect harvested crops.

</div>

</div>

);

}