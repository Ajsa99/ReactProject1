import style from "./navbar.module.css"

const NavBar = () => {
    return <div className={style.topnav}>
         <a className="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
    </div>
}

export default NavBar;