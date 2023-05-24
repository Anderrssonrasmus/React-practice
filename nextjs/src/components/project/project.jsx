"use client"
import React, { useEffect } from 'react'
import { useState, useRef } from 'react';

export default function Project({key, title, content}) {

    let input = useRef(null);

    const [titlestate, setTitlestate] = useState(title);

    useEffect(() => {
        console.log(titlestate, title)
        if(titlestate != title) {
            let request = {
                method: "PUT",
                body: `{title: ${titlestate}}`
            };
            fetch(`http://localhost:1337/api/projects/${key}`, request)
                .then(response => response.json());
        } else {console.log("not same")}
    })

    const sendNew = () => {
        console.log(titlestate, title)
        setTitlestate(input.value);
        console.log("after " + titlestate, title)
    }

  return (
    <div key={key}>
        <input type="text" defaultValue={titlestate} ref={input}/>
        <textarea defaultValue={content} cols="30" rows="10" ></textarea>
        <button onClick={sendNew}>Send</button>
    </div>
  )
}
