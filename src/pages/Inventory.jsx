import React from "react";

import {
Package,
Warehouse,
AlertTriangle,
Boxes,
Plus,
Search
} from "lucide-react";

import "./Inventory.css";

const inventory=[

{

name:"Rice Seeds",

quantity:"120 Kg",

status:"In Stock"

},

{

name:"Organic Fertilizer",

quantity:"25 Bags",

status:"Low Stock"

},

{

name:"Bio Pesticide",

quantity:"18 Bottles",

status:"In Stock"

},

{

name:"Drip Pipes",

quantity:"12 Units",

status:"Out Of Stock"

},

{

name:"Tomato Seeds",

quantity:"80 Kg",

status:"In Stock"

},

{

name:"Sprayers",

quantity:"6 Units",

status:"Low Stock"

}

];

export default function Inventory(){

return(

<div className="inventory-page">

<div className="inventory-banner">

<div>

<h1>

📦 Smart Inventory Management

</h1>

<p>

Manage farm products and equipment efficiently

</p>

</div>

</div>



<div className="search-box">

<Search size={20}/>

<input

type="text"

placeholder="Search inventory..."

/>

</div>



<div className="summary-grid">

<div className="summary-card">

<Warehouse/>

<h3>

62

</h3>

<p>

Items

</p>

</div>



<div className="summary-card">

<Package/>

<h3>

38

</h3>

<p>

In Stock

</p>

</div>



<div className="summary-card">

<AlertTriangle/>

<h3>

8

</h3>

<p>

Low Stock

</p>

</div>



<div className="summary-card">

<Boxes/>

<h3>

4

</h3>

<p>

Out Of Stock

</p>

</div>

</div>



<h2>

📋 Inventory Items

</h2>

<div className="inventory-grid">

{inventory.map(item=>(

<div

key={item.name}

className="inventory-card"

>

<h3>

{item.name}

</h3>

<p>

📦 {item.quantity}

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



<div className="action-card">

<h2>

➕ Add New Inventory

</h2>

<p>

Track seeds, fertilizers and farm equipment.

</p>

<button>

<Plus size={18}/>

 Add Item

</button>

</div>

</div>

);

}