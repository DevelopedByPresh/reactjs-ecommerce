import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import ClothFilter from './ClothFilter';


export default class ProductList extends Component {
  

  render() {
    return (
       
          <div className="container">
            <Title name="Feel trendy." title="Feel authentic." />
          <ClothFilter/>
            <div className="column">
              <ProductConsumer>
                
                {value => {
                  let products = value.sortedbooks;
                  return  <React.Fragment> 
                    <div className = "row">
                   { products.map(product => {
                            return <Product key={product.id} product={product} />;
                      }) } 
                  </div> 

                  <div className = "d-flex justify-content-center">

                  </div>
                    </React.Fragment>;
                }}

             </ProductConsumer>
            </div>
          </div>
    );
  }
}
