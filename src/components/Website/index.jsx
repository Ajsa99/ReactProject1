import { BrowserRouter, Route, Routes } from "react-router-dom";
import Information from "../Information";
import Main from "../Main";

const Website = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<Main/>}/>
                <Route path="/information" element={<Information/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Website;