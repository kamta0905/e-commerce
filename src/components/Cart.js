import React, { useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="row py-5">
          {state.map((state) => {
            return (
              <>
                <div className="col-md-6 my-3 py-4" style={{ background: "#f7f3f3" }}>
                  <img src={state.image} alt={state.title} height="300px" width="400px" />
                </div>
                <div className="col-md-6 my-3 py-4" style={{ background: "#f7f3f3" }}>
                  {/* <h4 className="text-uppercase text-black-50"> {state.category}</h4> */}
                  <h1 className="display-5">{state.title}</h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
