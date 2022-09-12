import { useLocation } from "react-router-dom";
import style from "./information.module.css"

const Information = () => {

    const location = useLocation();
    console.log(location);

    return <div style={{padding:"30px 100px"}}>
        <a className={style.button} href="/"> -- Back</a>
        <h1>Author: {location.state?.el.author}</h1>
        <p>{location.state?.el.publishedAt} - <a  style={{color:"#ee6986"}} href={location.state?.el.url}>Source</a></p>
        <p>{location.state?.el.title}</p>
        <hr />
        <p> <b>Description:</b>{location.state?.el.description}</p>
        <p> <b>Content:</b>  {location.state?.el.content}</p>
        <p><img style={{width:"600px"}} src={location.state?.el.urlToImage} alt="img"/></p>
    
    </div>
}

export default Information;