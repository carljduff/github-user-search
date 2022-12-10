import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../css/App.css";
import searchIcon from "../assets/icon-search.svg";

const Search = () => {
    return(
        <div className="search-container">
            <img src={searchIcon} alt="search icon"/>
                    <input className="search-input" placeholder="Search GitHub username..."/>
               
                    <Button className="search-btn">Search</Button>
           
        </div>
    )
}

export default Search;