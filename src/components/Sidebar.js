import React from "react";

import "./Sidebar.css";

export default function Sidebar({

activePage,

setActivePage,

isSidebarOpen,

setIsSidebarOpen

}){

const menus=[

"Dashboard",

"AI Assistant",

"Weather",

"Crop Advisor",

"Market Prices",

"Schemes",

"News",

"Maps",

"Reports",

"Tasks",

"Finance",

"Farm Records",

"Inventory",

"Complaints",

"Calendar",

"Profile",

"Settings"

];

return(

<div

className={

isSidebarOpen

?

"sidebar open"

:

"sidebar"

}

>

<div className="logo-box">

<h2>

🌾 Farmer Portal

</h2>

<p>

Digital Agriculture

</p>

</div>

<div className="menu-list">

{menus.map(item=>(

<button

key={item}

className={

activePage===item

?

"menu-btn active"

:

"menu-btn"

}

onClick={()=>{

setActivePage(item);

setIsSidebarOpen(false);

}}

>

{item}

</button>

))}

</div>

</div>

);

}