import React from 'react'
import {Link} from 'react-router-dom'

function home() {
  return (
    <div>
        <h2>Managing shared expenses has never been easier! Expense Splitter helps you split bills, track payments, and settle debts with friends, family, or colleagues effortlessly.</h2>
        <ul>
          <li>Divide expensesby customize shares.</li>
          <li>Group Expense Tracking - Create groups for trips, roommates, or outings.</li>
          <li>Real-Time Balances - See who owes what instantly.</li>
          <li>Simple Settlements - Track payments and clear balances hassle-free.</li>
          <Link to={"/login"}>Get Started</Link>
        </ul>
    </div>
  )
}

export default home