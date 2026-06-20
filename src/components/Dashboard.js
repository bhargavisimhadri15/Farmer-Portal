import React, { useState } from "react";

import {
  Cloud,
  Sprout,
  ShoppingBag,
  Building2,
  Map,
  FileBarChart,
  TrendingUp,
  TrendingDown,
  Phone,
  Send,
  ArrowRight,
  ChevronRight
} from "lucide-react";

import "./Dashboard.css";

/* ===========================
   MARKET PRICES
=========================== */

const marketPrices = [

{
icon:"🌾",

name:"Rice",

price:"₹2800 / Quintal",

change:"+2.5%",

up:true
},

{
icon:"🍅",

name:"Tomato",

price:"₹32 / Kg",

change:"-1.2%",

up:false
},

{
icon:"🧅",

name:"Onion",

price:"₹28 / Kg",

change:"-0.8%",

up:false
},

{
icon:"🌿",

name:"Cotton",

price:"₹7600 / Quintal",

change:"+1.5%",

up:true
}

];


/* ===========================
   WEATHER FORECAST
=========================== */

const forecast = [

{
day:"Today",

icon:"⛅",

temp:"31°C",

rain:"20%"
},

{
day:"Tomorrow",

icon:"🌧️",

temp:"30°C",

rain:"40%"
},

{
day:"Monday",

icon:"☀️",

temp:"33°C",

rain:"10%"
},

{
day:"Tuesday",

icon:"☀️",

temp:"34°C",

rain:"0%"
},

{
day:"Wednesday",

icon:"🌦️",

temp:"29°C",

rain:"50%"
},

{
day:"Thursday",

icon:"☁️",

temp:"30°C",

rain:"25%"
}

];


/* ===========================
   GOVERNMENT SCHEMES
=========================== */

const schemes = [

{
icon:"👨‍🌾",

name:"PM Kisan Samman Nidhi",

desc:"Direct income support"

},

{
icon:"🛡️",

name:"PM Fasal Bima Yojana",

desc:"Crop insurance"

},

{
icon:"💧",

name:"PM Krishi Sinchai",

desc:"Irrigation support"

},

{
icon:"💳",

name:"Kisan Credit Card",

desc:"Easy farmer credit"

}

];


/* ===========================
   QUICK ACTIONS
=========================== */

const quickActions = [

{
icon:Cloud,

label:"Weather"

},

{
icon:Sprout,

label:"Crop Advisor"

},

{
icon:ShoppingBag,

label:"Market Prices"

},

{
icon:Building2,

label:"Government Schemes"

},

{
icon:FileBarChart,

label:"Reports"

},

{
icon:Map,

label:"Maps"

}

];


/* ===========================
   INSIGHTS
=========================== */

const insights = [

{
emoji:"🌧️",

text:"Rain Tomorrow"

},

{
emoji:"🌾",

text:"Rice Season"

},

{
emoji:"💰",

text:"Cotton +3%"

},

{
emoji:"🏛️",

text:"PM Kisan Open"

}

];


/* ===========================
   CROPS
=========================== */

const crops = [

{
icon:"🌾",

name:"Rice",

profit:"High Yield"

},

{
icon:"🌽",

name:"Maize",

profit:"Good Demand"

},

{
icon:"🍅",

name:"Tomato",

profit:"Fast Growth"

},

{
icon:"🌿",

name:"Cotton",

profit:"High Profit"

}

];


/* ===========================
   NEWS
=========================== */

const news = [

"🌧️ Heavy rain expected this week",

"🏛️ PM Kisan installment released",

"💰 Cotton prices increased"

];


/* ===========================
   TASKS
=========================== */

const tasks = [

"✅ Water Crops",

"✅ Check Soil Moisture",

"⬜ Buy Fertilizer",

"⬜ Spray Pesticides"

];


/* ===========================
   DASHBOARD
=========================== */

export default function Dashboard({

setActivePage

}){

const [chatInput,setChatInput]=useState("");

const [chatMessages,setChatMessages]=useState([]);


/* ===========================
   AI ASSISTANT
=========================== */

function handleSend(){

if(!chatInput.trim())

return;

let reply="";

const q=chatInput.toLowerCase();


if(q.includes("rice")){

reply=

"🌾 Rice grows best in June and July.";

}

else if(q.includes("rain")){

reply=

"🌧️ Tomorrow rain probability is 40%.";

}

else if(q.includes("fertilizer")){

reply=

"🧪 Organic fertilizer is recommended.";

}

else if(q.includes("crop")){

reply=

"🌱 Rice, Cotton and Maize are profitable.";

}

else{

reply=

"🤖 Please ask farming related questions.";

}


setChatMessages(prev=>[

...prev,

{

text:chatInput,

user:true

},

{

text:reply,

user:false

}

]);


setChatInput("");

}
return(

<div className="dashboard-layout">

{/* LEFT SIDE */}

<div className="dashboard-main">

{/* HERO BANNER */}

<div className="hero-banner">

<div className="hero-overlay">

<div className="hero-badge">

🤖 AI Powered Digital Agriculture

</div>

<h1 className="hero-title">

Empowering Every Farmer Digitally 🌾

</h1>

<p className="hero-sub">

Weather • Market Prices • AI Assistant • Government Schemes • Smart Farming

</p>

<div className="hero-actions">

<button

className="btn-primary"

onClick={()=>

setActivePage(

"Weather"

)

}

>

🌦️ Check Weather

</button>

<button

className="btn-secondary"

onClick={()=>

setActivePage(

"Government Schemes"

)

}

>

🏛️ Explore Schemes

</button>

</div>

</div>

</div>



{/* STATS */}

<div className="stats-row">

<div className="stat-card">

<div className="stat-icon">

🌤️

</div>

<div>

<div className="stat-label">

Weather

</div>

<div className="stat-value blue">

31°C

</div>

<div className="stat-sub">

Partly Cloudy

</div>

</div>

</div>



<div className="stat-card">

<div className="stat-icon">

🌾

</div>

<div>

<div className="stat-label">

Recommended Crop

</div>

<div className="stat-value green">

Rice

</div>

<div className="stat-sub">

High Yield

</div>

</div>

</div>



<div className="stat-card">

<div className="stat-icon">

💰

</div>

<div>

<div className="stat-label">

Market Price

</div>

<div className="stat-value green">

₹2800

</div>

<div className="stat-sub">

Rice Price

</div>

</div>

</div>



<div className="stat-card">

<div className="stat-icon">

🏛️

</div>

<div>

<div className="stat-label">

Government Schemes

</div>

<div className="stat-value purple">

4 Active

</div>

<div className="stat-sub">

Available

</div>

</div>

</div>

</div>



{/* QUICK ACTIONS */}

<div className="card">

<div className="card-header">

<h2>

⚡ Quick Actions

</h2>

</div>

<div className="quick-actions-grid">

{quickActions.map(

({icon:Icon,label})=>(

<button

key={label}

className="quick-action-btn"

onClick={()=>

setActivePage(label)

}

>

<Icon size={30}/>

<span>

{label}

</span>

</button>

)

)}

</div>

</div>



{/* WEATHER FORECAST */}

<div className="card">

<div className="card-header">

<h2>

🌦️ 7 Day Weather Forecast

</h2>

<button

className="view-all"

onClick={()=>

setActivePage(

"Weather"

)

}

>

View All

<ChevronRight size={16}/>

</button>

</div>

<div className="weather-grid">

{forecast.map(item=>(

<div

key={item.day}

className="weather-card"

>

<div className="weather-day">

{item.day}

</div>

<div className="weather-icon">

{item.icon}

</div>

<div className="weather-temp">

{item.temp}

</div>

<div className="weather-rain">

💧 {item.rain}

</div>

</div>

))}

</div>

</div>



{/* MARKET PRICES */}

<div className="card">

<div className="card-header">

<h2>

📈 Live Market Prices

</h2>

<button

className="view-all"

onClick={()=>

setActivePage(

"Market Prices"

)

}

>

View All

<ChevronRight size={16}/>

</button>

</div>

<div className="market-grid">

{marketPrices.map(item=>(

<div

key={item.name}

className="market-card"

>

<div className="market-top">

<div className="market-icon">

{item.icon}

</div>

<div>

<h3>

{item.name}

</h3>

<p>

Current Price

</p>

</div>

</div>

<div className="market-price">

{item.price}

</div>

<div

className={`market-change ${

item.up

?

"up"

:

"down"

}`}

>

{

item.up

?

<TrendingUp size={18}/>

:

<TrendingDown size={18}/>

}

{item.change}

</div>

</div>

))}

</div>

</div>
{/* ==========================
   GOVERNMENT SCHEMES
========================== */}

<div className="card">

<div className="card-header">

<h2>

🏛️ Government Schemes

</h2>

<button

className="view-all"

onClick={()=>

setActivePage(

"Government Schemes"

)

}

>

View All

<ChevronRight size={16}/>

</button>

</div>

<div className="schemes-grid">

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

{item.desc}

</p>

<div className="scheme-footer">

<button

className="scheme-btn"

onClick={()=>

setActivePage(

"Government Schemes"

)

}

>

Apply

<ArrowRight size={14}/>

</button>

</div>

</div>

))}

</div>

</div>



{/* ==========================
   FARM INSIGHTS
========================== */}

<div className="card">

<h2>

🔥 Today's Farm Insights

</h2>

<div className="insights-grid">

{insights.map(

(item,index)=>(

<div

key={index}

className="insight-box"

>

<div>

{item.emoji}

</div>

<p>

{item.text}

</p>

</div>

)

)}

</div>

</div>



{/* ==========================
   CROPS
========================== */}

<div className="card">

<h2>

🌱 Recommended Crops

</h2>

<div className="crop-grid">

{crops.map(crop=>(

<div

key={crop.name}

className="crop-card"

>

<div>

{crop.icon}

</div>

<h3>

{crop.name}

</h3>

<p>

{crop.profit}

</p>

</div>

))}

</div>

</div>



{/* ==========================
   NEWS
========================== */}

<div className="card">

<h2>

📰 Agriculture News

</h2>

{news.map(

(item,index)=>(

<div

key={index}

className="news-item"

>

{item}

</div>

)

)}

</div>



{/* ==========================
   TASKS
========================== */}

<div className="card">

<h2>

📅 Today's Tasks

</h2>

{tasks.map(

(task,index)=>(

<div

key={index}

className="task-item"

>

{task}

</div>

)

)}

</div>



</div>



{/* RIGHT PANEL */}

<div className="right-panel">



{/* AI ASSISTANT */}

<div className="panel-card ai-card">

<h3>

🤖 Smart Farmer AI

</h3>

<div className="chat-messages">

{chatMessages.map(

(msg,index)=>(

<div

key={index}

className={`chat-msg ${

msg.user

?

"user-msg"

:

"bot-msg"

}`}

>

{msg.text}

</div>

)

)}

</div>

<div className="ai-input-row">

<input

type="text"

placeholder="Ask farming question"

value={chatInput}

onChange={(e)=>

setChatInput(

e.target.value

)

}

onKeyDown={(e)=>

e.key==="Enter"

&& handleSend()

}

/>

<button

className="send-btn"

onClick={handleSend}

>

<Send size={18}/>

</button>

</div>

</div>



{/* PROFILE */}

<div className="panel-card">

<h3>

👨‍🌾 Farmer Profile

</h3>

<div className="profile-box">

<div className="profile-avatar">

👨‍🌾

</div>

<h4>

Farmer

</h4>

<p>

West Godavari

</p>

<p>

Andhra Pradesh

</p>

<button

className="btn-primary"

>

View Profile

</button>

</div>

</div>



{/* EMERGENCY SUPPORT */}

<div className="panel-card emergency-card">

<h3>

☎️ Emergency Support

</h3>

<p>

24/7 Agriculture Helpline

</p>

<div className="emergency-number">

1800-180-1551

</div>

<button

className="call-btn"

>

☎️ Call Now

</button>

</div>



</div>



</div>

);

}