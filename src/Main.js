import React from "react";


export default function Main(){
    return(
            <main>
            <h1 className="main--title">Fun Facts about React</h1>
            <ul className="main--facts">
                <li className="list--items">Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li className="list--items2">Has well over 100k stars on Github</li>
                <li>It is maintained by Facebook</li>
                <li className="list--items1">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            </main>
    )
}