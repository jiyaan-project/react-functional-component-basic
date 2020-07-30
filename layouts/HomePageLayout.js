import React,{useContext} from "react";
import AppNav from "./common/Nav";
import ThemeContext from "../utility/ThemeContext";

const HomepageLayout = props => {
  const { style, toggleStyle} = useContext(
    ThemeContext
  );
  return (
    <>
   
       <AppNav />
       <br />
        <button className="btn btn-primary" onClick={toggleStyle}>Current Theme : {style}</button> <br />
        <br />
        <main className={"container "+style }>{props.children}</main>
    
    </>
  );
};

export default HomepageLayout;
