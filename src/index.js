import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date=new Date()
    const hours= date.getHours()%12
    let timeOfDay

    if(hours<12){
      timeOfDay="Morning"
    }
    else if(hours>=12 && hours<13){
      timeOfDay="Afternoon"
    }
    else{
      timeOfDay="Night"
    }
    return (
        
        <h1>good {timeOfDay} </h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))