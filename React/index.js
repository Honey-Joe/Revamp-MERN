
import React from 'react'
import ReactDOM from 'react-dom'

// const create=React.createElement("p",null,"Hello")
const root=ReactDOM.createRoot(document.getElementById("div"))


// const nest=React.createElement("p",{class:"nest"},[React.createElement("p",null,"Hello")])
 const jsx= <h1>heading</h1>
root.render(jsx)