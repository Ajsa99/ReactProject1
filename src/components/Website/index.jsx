// import style from "./site.css";
import Layout from "../Layout";
import Main from "../Main";


const Website = (props) => {
  console.log(window.location);
  const url = window.location.pathname;
  console.log(url);

  return (
    <div>
      <Layout>
        {url && url.length === 1 && <Main />}
        {url && url.includes("contacts") && <p>Contacts</p>}
        {url && url.includes("price") && <p>Price</p>}
        {url && url.includes("shop") && <p>Shop</p>}
        {url && url.includes("about") && <p>about</p>}
      </Layout>
    </div>
  );
};
export default Website;
