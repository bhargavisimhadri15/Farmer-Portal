import React from "react";

import {
Search,
ShoppingCart,
TrendingUp,
Truck
} from "lucide-react";

import "./Marketplace.css";

const products=[

{
icon:"🌾",

name:"Rice Seeds",

price:"₹850",

category:"Seeds"
},

{
icon:"🌽",

name:"Maize Seeds",

price:"₹620",

category:"Seeds"
},

{
icon:"🧪",

name:"Organic Fertilizer",

price:"₹450",

category:"Fertilizer"
},

{
icon:"🌿",

name:"Bio Pesticide",

price:"₹380",

category:"Pesticide"
},

{
icon:"🚜",

name:"Mini Tractor",

price:"₹3,20,000",

category:"Equipment"
},

{
icon:"💧",

name:"Drip Irrigation Kit",

price:"₹12,500",

category:"Irrigation"
}

];

export default function Marketplace(){

return(

<div className="marketplace-page">

<div className="marketplace-banner">

<div>

<h1>

🛒 Digital Agri Marketplace

</h1>

<p>

Buy products and sell crops easily

</p>

</div>

</div>



<div className="search-box">

<Search size={20}/>

<input

type="text"

placeholder="Search products..."

/>

</div>



<div className="stats-grid">

<div className="stats-card">

<ShoppingCart/>

<h3>

150+

</h3>

<p>

Products

</p>

</div>



<div className="stats-card">

<TrendingUp/>

<h3>

24%

</h3>

<p>

Price Growth

</p>

</div>



<div className="stats-card">

<Truck/>

<h3>

Fast

</h3>

<p>

Delivery

</p>

</div>



<div className="stats-card">

💰

<h3>

Best

</h3>

<p>

Deals

</p>

</div>

</div>



<h2>

🔥 Popular Products

</h2>

<div className="products-grid">

{products.map(item=>(

<div

key={item.name}

className="product-card"

>

<div className="product-icon">

{item.icon}

</div>

<h3>

{item.name}

</h3>

<p>

{item.category}

</p>

<div className="product-price">

{item.price}

</div>

<button>

Add To Cart

</button>

</div>

))}

</div>



<div className="sell-card">

<h2>

🌾 Sell Your Crops

</h2>

<p>

Connect with buyers and get better prices.

</p>

<button>

Sell Now

</button>

</div>

</div>

);

}