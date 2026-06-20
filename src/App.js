import React, { useState } from "react";

import "./App.css";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

import AIAssistant from "./pages/AIAssistant";
import Weather from "./pages/Weather";
import CropAdvisor from "./pages/CropAdvisor";
import MarketPrices from "./pages/MarketPrices";
import Schemes from "./pages/Schemes";
import News from "./pages/News";
import Maps from "./pages/Maps";
import Reports from "./pages/Reports";
import Tasks from "./pages/Tasks";
import Finance from "./pages/Finance";
import FarmRecords from "./pages/FarmRecords";
import Inventory from "./pages/Inventory";
import Complaints from "./pages/Complaints";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {

const [activePage,setActivePage]=useState("Dashboard");

const [isSidebarOpen,setIsSidebarOpen]=useState(false);

const renderPage=()=>{

switch(activePage){

case "Dashboard":

return (

<Dashboard

setActivePage={setActivePage}

/>

);

case "AI Assistant":

return <AIAssistant/>;

case "Weather":

return <Weather/>;

case "Crop Advisor":

return <CropAdvisor/>;

case "Market Prices":

return <MarketPrices/>;

case "Schemes":

return <Schemes/>;

case "News":

return <News/>;

case "Maps":

return <Maps/>;

case "Reports":

return <Reports/>;

case "Tasks":

return <Tasks/>;

case "Finance":

return <Finance/>;

case "Farm Records":

return <FarmRecords/>;

case "Inventory":

return <Inventory/>;

case "Complaints":

return <Complaints/>;

case "Calendar":

return <Calendar/>;

case "Profile":

return <Profile/>;

case "Settings":

return <Settings/>;

default:

return (

<Dashboard

setActivePage={setActivePage}

/>

);

}

};

return(

<div className="app-container">

<button

className="mobile-menu-btn"

onClick={()=>

setIsSidebarOpen(

!isSidebarOpen

)

}

>

☰

</button>

{isSidebarOpen && (

<div

className="overlay"

onClick={()=>

setIsSidebarOpen(false)

}

/>

)}

<Sidebar

activePage={activePage}

setActivePage={setActivePage}

isSidebarOpen={isSidebarOpen}

setIsSidebarOpen={setIsSidebarOpen}

/>

<div className="main-container">

{renderPage()}

</div>

</div>

);

}

export default App;