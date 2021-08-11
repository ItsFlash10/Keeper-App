import React from "react";

var curr_year = new Date().getFullYear();

function Footer(){

    return (
        <footer>
            <p>Copyright Kshitij Anand</p>
            <p>{curr_year}</p>
        </footer>
    );

}

export default  Footer;