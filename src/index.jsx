import Post from "@models/Post";
import "@/styles/styles.css"
import webpackLogo from "@/assets/webpack-logo.png"
import * as $ from "jquery"
import "@/styles/less.less"
import "@/styles/scss.css"
import "@/babel"
import React from "react"
import {render} from "react-dom"

// import xml from "./assets/data.xml"
// import csv from "./assets/data.csv"
// import json from "./assets/json"
// console.log("json", json)
// console.log("xml", xml)
// console.log("csv",csv)


const post = new Post("Webpack Post title 11", webpackLogo)

// $("pre").addClass("code").html(post.toSring())

const App = () =>
    <div className="container">
        <h1>Webpach !!!</h1>
        <hr/>
        <div className="logo"/>
        <hr/>
        <pre/>
        <hr/>
        <div className="box">
            <h2>Less</h2>
        </div>
        <div className="card">
            <h2>Card</h2>
        </div>
    </div>

render(<App/>,document.getElementById("app"))