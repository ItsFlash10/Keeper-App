import React from "react";

var curr_year = new Date().getFullYear();

function Footer(){

    return (
        <footer>
            <p>Copyright Satyam Shubham</p>
            <p>{curr_year}</p>
        </footer>
    );

}

export default  Footer;
