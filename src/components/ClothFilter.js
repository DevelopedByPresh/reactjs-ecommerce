import React from "react";
import {useContext} from "react";
import {ProductContext} from "../context";
import './ClothFilter.css'
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const BookFilter = () => {

    const context = useContext(ProductContext);

    const {

    author,
    products,
    handleChange
    } = context;

    let authors = getUnique(products,"author");
    authors = ["All",...authors];

    authors = authors.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ));

    let languages = getUnique(products,"language");
    languages = ["All",...languages];
  
    languages = languages.map((item, index) => (
      <option key={index} value={item}>
        {item}
        </option>
    ));

    return (
        <section className="filter-container">
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Categories</label>
                    <select
                    name = "author"
                    id = "author"
                    onChange = {handleChange}
                    className = "form-control"
                    value = {author}>
                      {authors}
                    </select>
                </div>

             
            
            </form>
        </section>
    )
}

export default BookFilter;