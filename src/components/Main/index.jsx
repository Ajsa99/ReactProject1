import React, { useEffect } from "react";
import { useState } from "react";
import style from "./main.module.css";
import newApi from "../../api/data";


const Main = (props) => {

    const [quote, setQuote] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(20)

    async function getQuote(searchProp) {
    try {
      let res;
      if (searchProp) {
        res = await newApi.get(`/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=${page}&apiKey=b4060aac97114d56bf7a78de9702b1b1&q=${searchProp}`);
      } else {
        res = await newApi.get("/v2/top-headlines?domains=techcrunch.com,thenextweb.com&pageSize=20&apiKey=b4060aac97114d56bf7a78de9702b1b1");
      }
      console.log(res.data.articles);

      setQuote(res.data.articles);
    } catch (error) {
      console.log(error);

    }
  }

    useEffect(()=>{
        getQuote()
    }, );

    
 
  return (
    <div>
      <div className={style.search}>
      <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className={style.inputSearch} />
      <button className={style.button} onClick={() => getQuote(search)}>Search</button>
      </div>
     
      <br />
     <div className={style.containerCards}>
     {quote.map((item,index) => {return <p className={style.card} key={index}>
     <h4 className={style.name}> Author: {item.author}</h4>
     <p className={style.link}>Click for description...</p> <br /> 
     <p><img src={item.urlToImage} alt="" className={style.image}/></p>
     <p> {item.content} </p>
       </p>})}
     </div>
     
     <div className={style.more}>
       <button className={style.buttonMore} onClick={()=>{setPage(page+20); getQuote(search)}} value={search} >More....</button>
     </div>
      
    </div>
  );
}
export default Main;