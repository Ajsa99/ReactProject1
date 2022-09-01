import React, { useEffect } from "react";
import { useState } from "react";
import style from "./main.module.css";
import newApi from "../../api/data";


const Main = (props) => {


    const [quote, setQuote] = useState([])

    const getQuote = async() => {
        try {
          const res = await newApi.get("posts");
          
          console.log(res.data)
          setQuote(res.data)
        } catch (error) {
            console.log(error);
            
        }
    }
 
  return (
    <div>
        {/* <p>Search:</p>
        <input type="text" onChange={(event)=> setValue(event.target.value)} value={value} />

        <p>
            {result.map((result, index)=>{
                <a href="#" key={index}>
                    <div>
                        {result}
                    </div>

                </a>
            })}
        </p> */}


      <button onClick={getQuote}>Get Quotes</button>
      <br />
     
       {quote.map((item,index)=>{return <p className={style.card} key={index}>Title: {item.title} <br /> Body: {item.body}</p>})}
      {/* <p>{quote.title}</p> */}
    </div>
  );
}
export default Main;