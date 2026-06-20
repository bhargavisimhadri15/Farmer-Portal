import React, { useState } from "react";

import {
Send,
Cloud,
Sprout,
TrendingUp,
ShieldCheck,
Mic
} from "lucide-react";

import "./AIAssistant.css";

export default function AIAssistant() {

const [input,setInput]=useState("");

const [messages,setMessages]=useState([

{
text:"👋 Welcome Farmer. I can help with weather, crops, fertilizer, diseases and market prices.",

bot:true

}

]);

function handleSend(){

if(!input.trim())

return;

const q=input.toLowerCase();

let answer="";

if(q.includes("rice")){

answer="🌾 Rice grows well during June-July. Use NPK fertilizer and proper irrigation.";

}

else if(q.includes("weather")){

answer="🌦️ Today's temperature is 31°C. Rain probability tomorrow is 40%.";

}

else if(q.includes("fertilizer")){

answer="🧪 Organic fertilizer is recommended for better soil health.";

}

else if(q.includes("disease")){

answer="🦠 Use approved pesticides and monitor leaf color regularly.";

}

else if(q.includes("market")){

answer="💰 Cotton prices increased by 3% this week.";

}

else{

answer="🤖 Ask about weather, crops, market prices or fertilizers.";

}

setMessages(prev=>([

...prev,

{

text:input,

user:true

},

{

text:answer,

bot:true

}

]));

setInput("");

}

return(

<div className="ai-page">

<div className="ai-banner">

<div>

<h1>

🤖 Smart Agriculture AI

</h1>

<p>

Digital farming assistant for modern agriculture

</p>

</div>

<div className="ai-icons">

<Cloud size={26}/>

<Sprout size={26}/>

<TrendingUp size={26}/>

<ShieldCheck size={26}/>

</div>

</div>



<div className="feature-grid">

<div className="feature-card">

🌦️

<h3>

Weather Forecast

</h3>

<p>

7 day weather updates

</p>

</div>



<div className="feature-card">

🌱

<h3>

Crop Advisor

</h3>

<p>

Season wise crop suggestions

</p>

</div>



<div className="feature-card">

💰

<h3>

Market Prices

</h3>

<p>

Live crop prices

</p>

</div>



<div className="feature-card">

🧪

<h3>

Fertilizer Guide

</h3>

<p>

Best fertilizer recommendations

</p>

</div>

</div>



<div className="chat-box">

<div className="chat-window">

{messages.map((msg,index)=>(

<div

key={index}

className={`message ${

msg.user

?

"user"

:

"bot"

}`}

>

{msg.text}

</div>

))}

</div>



<div className="chat-input">

<input

type="text"

placeholder="Ask a farming question..."

value={input}

onChange={(e)=>

setInput(

e.target.value

)

}

onKeyDown={(e)=>

e.key==="Enter"

&& handleSend()

}

/>

<button

onClick={handleSend}

>

<Send size={18}/>

</button>

<button>

<Mic size={18}/>

</button>

</div>

</div>

</div>

);

}