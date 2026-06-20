import React from "react";

import {
Phone,
MessageCircle,
Mail,
Headphones,
MapPin,
HelpCircle,
Clock
} from "lucide-react";

import "./HelpSupport.css";

const faq=[

{
question:"How to apply for PM Kisan?",

answer:"Visit Government Schemes page and apply online."
},

{
question:"How to check weather updates?",

answer:"Open Weather page for 7 day forecast."
},

{
question:"How to track market prices?",

answer:"Open Marketplace section."
},

{
question:"How to raise a complaint?",

answer:"Open Complaint page and submit details."
}

];

export default function HelpSupport(){

return(

<div className="support-page">

<div className="support-banner">

<div>

<h1>

📞 Farmer Help Center

</h1>

<p>

24/7 Digital support for farmers

</p>

</div>

</div>



<div className="summary-grid">

<div className="summary-card">

<Phone/>

<h3>

24/7

</h3>

<p>

Helpline

</p>

</div>



<div className="summary-card">

<MessageCircle/>

<h3>

Live

</h3>

<p>

Chat Support

</p>

</div>



<div className="summary-card">

<Headphones/>

<h3>

365

</h3>

<p>

Days Support

</p>

</div>



<div className="summary-card">

<Clock/>

<h3>

5 Min

</h3>

<p>

Response

</p>

</div>

</div>



<div className="contact-grid">

<div className="contact-card">

<Phone size={30}/>

<h2>

Call Support

</h2>

<h3>

1800-180-1551

</h3>

<p>

Toll Free Number

</p>

</div>



<div className="contact-card">

<MessageCircle size={30}/>

<h2>

WhatsApp

</h2>

<h3>

+91 98765 43210

</h3>

<p>

Instant Support

</p>

</div>



<div className="contact-card">

<Mail size={30}/>

<h2>

Email

</h2>

<h3>

support@farmerportal.com

</h3>

<p>

Official Support

</p>

</div>

</div>



<div className="faq-card">

<h2>

❓ Frequently Asked Questions

</h2>

{faq.map(item=>(

<div

key={item.question}

className="faq-item"

>

<h3>

<HelpCircle size={18}/>

 {item.question}

</h3>

<p>

{item.answer}

</p>

</div>

))}

</div>



<div className="office-card">

<h2>

📍 Agriculture Office

</h2>

<p>

<MapPin size={18}/>

 Sajjapuram, Andhra Pradesh

</p>

<p>

🕘 09:00 AM - 06:00 PM

</p>

</div>

</div>

);

}