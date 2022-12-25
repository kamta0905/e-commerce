import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(id);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <Skeleton height={250} />
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50"> {product.category}</h4>

          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            {" "}
            Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3>$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <Button variant="outline-dark" className="px-4 py-2">
            Add to Cart
          </Button>
          <Button variant="dark" className="ms-2 px-3 py-2">
            Go to Cart
          </Button>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
