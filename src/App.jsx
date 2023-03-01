import React from "react"
import { useEffect, useState } from "react"

function App() {

  const [showPost, setshowPost] = useState()
  const apiUrl = "https://api.sr.se/api/v2/channels?format=json&size=100";

let displayData

async function radioplayer() {
  const response = await fetch(apiUrl)
  const responseData = await response.json()
  console.log(responseData)

  displayData = responseData.channels.map(function (radio) {
    return (
      <div key={radio.id} className="bg-black pb-6">
        <div
          className="flexbox">
          <img src={radio.image} className="w-26"></img>
          <div className="flex flex-col pb-4 pr-4" style={{backgroundColor: `#${radio.color}`}}>
            <p className="text-4xl pl-8 pb-4 pt-2 ">{radio.name}</p>
            <audio controls src={radio.liveaudio.url}></audio>
          </div>
        </div>
      </div>
    );
  })
  setshowPost(displayData)
}

    useEffect(() => {
      radioplayer()
    }, []);

  return (
    <div className="">
 
   {showPost} 

    </div>
  )
}

export default App
