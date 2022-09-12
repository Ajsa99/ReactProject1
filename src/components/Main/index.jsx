import React, { useEffect } from "react";
import { useState } from "react";
import style from "./main.module.css";
import newApi from "../../api/data";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";


const Main = (props) => {

    const [date, setDate] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState('popularity')
    const [category, setCategory] = useState('general')
    const [drop, setDrop] = useState(false)

    async function getDate() {
    try {
      let res;
      if (search) {
        res = await newApi.get(`/v2/everything?domains=techcrunch.com,thenextweb.com&sortBy=${sort}&pageSize=20&page=${page}&apiKey=b5b9e0dd69124bab91dfc30accca761b&q=${search}`);
        console.log(res.data);
      } else {
        res = await newApi.get(`/v2/top-headlines?domains=techcrunch.com,thenextweb.com&category=${category}&pageSize=20&page=${page}&apiKey=b5b9e0dd69124bab91dfc30accca761b`);
      }
      console.log(res.data.articles);
      
      setDate([...date,...res.data.articles]);
    } catch (error) {
      console.log(error);

    }
  }

    useEffect(()=>{
        getDate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page,category,sort]);

    const navigation = useNavigate();

    const redirectHome = (el) => {
      navigation("/information", { state: { el } });
    };
 
  return (
    <Layout>
      <div className={style.search}>
      <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className={style.inputSearch} />
      <button className={style.button} onClick={() => getDate(search)}>Search</button>

      <div className={style.Sortby}>
      Sort by: <hr />
      <div className={style.buttonCategory} onClick={()=>{setDrop(!drop); 
            console.log(drop)}}>
              {search !== ''?<div>{sort.toUpperCase()}</div>:<div>{category.toUpperCase()}</div>}
      </div>
      </div>
    

      {drop ? (
        <div className={style.categories}>
          {search !== ''?(
            <div>
              <p className={style.categoriesText} onClick={()=>{setSort('popularity'); setPage(1)}}>Popularity</p>
              <p className={style.categoriesText} onClick={()=>{setSort('relevency'); setPage(1)}}>Relevency</p>
              <p className={style.categoriesText} onClick={()=>{setSort('publishedAt'); setPage(1)}}>PublishedAt</p>
            </div>
          ):(
            <div>
              <p className={style.categoriesText} onClick={()=>{setCategory('general'); setPage(1)}}>Popularity</p>
              <p className={style.categoriesText} onClick={()=>{setCategory('business'); setPage(1)}}>Business</p>
              <p className={style.categoriesText} onClick={()=>{setCategory('sports'); setPage(1)}}>Sports</p>
              <p className={style.categoriesText} onClick={()=>{setCategory('science'); setPage(1)}}>Science</p>
              <p className={style.categoriesText} onClick={()=>{setCategory('entertainment'); setPage(1)}}>Entertainment</p>
              <p className={style.categoriesText} onClick={()=>{setCategory('health'); setPage(1)}}>Health</p>
              <p className={style.categoriesText} onClick={()=>{setCategory('technology'); setPage(1)}}>Technology</p>
            </div>
          )}
        </div>
      ):(
        null
      )}
            

      </div>
     
      <br />
     <div className={style.containerCards}>
     {date.map((item,index) => {return <p className={style.card} key={index}>
     <h4 className={style.name}> Author: {item.author}</h4>
     <button to="/information" onClick={()=>{redirectHome(item)}} className={style.link}>Read full article</button> <br /> 
     <p><img src={item.urlToImage} alt="" className={style.image}/></p>
     <p> {item.content} </p>
       </p>})}
     </div>
     
     <div className={style.more}>
       <button className={style.buttonMore} onClick={()=> { setPage(page+1)}}>View more....</button>
     </div>
      
    </Layout>
  );
}
export default Main;