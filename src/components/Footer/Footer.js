import React from "react";
import './Footer.css';

const currentYear = new Date().getFullYear();


export default function Footer(){

    return(

        <footer>
            <p><small>Copyright &copy; {currentYear} </small></p>
            
        </footer>
    )
}