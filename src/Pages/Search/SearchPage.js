import React from 'react'
import Menu from "../homePage/Components/Navbar/Menu/Menu"
import Item from "./Item/Item"
import './SearchPage.css'

function SearchPage(){
  return(
    <div>
      <Menu></Menu>
      <div class="searchResults">
        <Item></Item>
      </div>
      <div className="Foot">
        <div class="container-fluid !direction !spacing">
          <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
            <div class="col-md-4 col-sm-12">
              Provided by HexClan Team
            </div>
            <div class="col-md-4 col-sm-12">
              مطابق قوانین جمهوری اسلامی ایران 
            </div>
            <div class="col-md-4 col-sm-12">
              پیوند ها 
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default SearchPage;

