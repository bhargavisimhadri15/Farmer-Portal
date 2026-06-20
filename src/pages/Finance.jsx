import React from "react";

import {
Wallet,
TrendingUp,
TrendingDown,
PiggyBank,
Receipt,
IndianRupee
} from "lucide-react";

import "./Finance.css";

const transactions=[

{
title:"Rice Sale",

amount:"+ ₹35,000",

type:"income"

},

{
title:"Buy Fertilizer",

amount:"- ₹4,500",

type:"expense"

},

{
title:"Cotton Sale",

amount:"+ ₹22,000",

type:"income"

},

{
title:"Pesticides",

amount:"- ₹2,800",

type:"expense"

}

];

export default function Finance(){

return(

<div className="finance-page">

<div className="finance-banner">

<div>

<h1>

💰 Farm Finance Center

</h1>

<p>

Track income, expenses and savings

</p>

</div>

</div>



<div className="summary-grid">

<div className="summary-card">

<Wallet/>

<h3>

₹2.4 Lakh

</h3>

<p>

Total Balance

</p>

</div>



<div className="summary-card">

<TrendingUp/>

<h3>

₹1.8 Lakh

</h3>

<p>

Income

</p>

</div>



<div className="summary-card">

<TrendingDown/>

<h3>

₹62,000

</h3>

<p>

Expenses

</p>

</div>



<div className="summary-card">

<PiggyBank/>

<h3>

₹45,000

</h3>

<p>

Savings

</p>

</div>

</div>



<h2>

📑 Recent Transactions

</h2>

<div className="transaction-grid">

{transactions.map(item=>(

<div

key={item.title}

className="transaction-card"

>

<Receipt size={22}/>

<h3>

{item.title}

</h3>

<div

className={`amount ${

item.type

}`}

>

{item.amount}

</div>

</div>

))}

</div>



<div className="budget-card">

<h2>

🎯 Monthly Budget Goal

</h2>

<div className="progress-bar">

<div className="progress">

</div>

</div>

<p>

₹78,000 / ₹1,00,000 completed

</p>

</div>



<div className="loan-card">

<IndianRupee size={28}/>

<h2>

🏦 Finance Suggestions

</h2>

<ul>

<li>

💳 Apply for Kisan Credit Card

</li>

<li>

📈 Save 15% monthly profit

</li>

<li>

🧾 Track all expenses

</li>

<li>

🏛️ Use subsidy schemes

</li>

</ul>

</div>

</div>

);

}