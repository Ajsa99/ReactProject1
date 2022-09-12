import style from "./navbar.module.css"

const NavBar = () => {
    return <div className={style.topnav}>
          <a className="active" href="/">Home</a>
          <a href="/">News</a>
          <a href="/">Contact</a>
          <a href="/">About</a>
    </div>
}

export default NavBar;