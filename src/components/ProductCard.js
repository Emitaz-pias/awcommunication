import React, { useContext, useState, useEffect } from "react";
import "./../scss/ProductCard.scss";
import Information from "./Information";
import "./productCard.css";

function ProductCard(props) {
  const { TDATA, setTDATA } = useContext(Information);

  const [data, setData] = useState({
    id: "",
    name: "",
    subCat: "",
    supCat: "",
    image: "",
    price: "",
    rating: "",
    quantity: "",
  });
  useEffect(() => {
    if (props.info) {
      setData(props.info);
    }
  }, [props.info]);

  const setCart = (product) => {
    localStorage.setItem("cart", product);
  };

  const saveProduct = (e) => {
    if (!TDATA.saved.includes(e.target.getAttribute("productid"))) {
      localStorage.setItem("saved", [
        ...TDATA.saved,
        e.target.getAttribute("productid"),
      ]);
      setTDATA({
        ...TDATA,
        saved: [...TDATA.saved, e.target.getAttribute("productid")],
      });
    } else {
      let index = TDATA.saved.indexOf(e.target.getAttribute("productid"));
      if (index > -1) {
        TDATA.saved.splice(index, 1);
      }
      localStorage.setItem("saved", [...TDATA.saved]);
      setTDATA({
        ...TDATA,
        saved: [...TDATA.saved],
      });
    }
  };

  const buyProduct = (e) => {
    if (!TDATA.buy.includes(e.target.getAttribute("productid"))) {
      localStorage.setItem("buy", [
        ...TDATA.buy,
        e.target.getAttribute("productid"),
      ]);
      setTDATA({
        ...TDATA,
        buy: [...TDATA.buy, e.target.getAttribute("productid")],
      });
    } else {
      let index = TDATA.buy.indexOf(e.target.getAttribute("productid"));
      if (index > -1) {
        TDATA.buy.splice(index, 1);
      }
      localStorage.setItem("buy", [...TDATA.buy]);
      setTDATA({
        ...TDATA,
        buy: [...TDATA.buy],
      });
    }
  };

  return (
    <>
      <div className="mt-1 mb-2 w-100 rows">
        <div
          className="ms-1 mt-3 me-1 card col-lg-4 col-md-4 col-sm-6 col-xs-6"
          style={{
            minwidth: "26em",
            maxWidth: "26em",
            float: "left",
            border: " 2px solid #333",
            borderRadius: "0px",
          }}
          subCat={data.subCat}
          supCat={data.supCat}
        >
          <div className="row g-0">
            <p className="mb-2 mt-1">
              <strong className="link">{data.subCat}</strong>

              <strong className="link">/{data.subCat}</strong>
            </p>
          </div>
          <div class="row w-100 g-0">
            <div className=" d-flex justify-content-center align-items-center">
              <div class="">
                <a
                  href={`/product?id=${data.id}`}
                  className="t049-toPDP t049-rec-SAPPIXR64GWUNLB"
                  data-url={`/product?id=${data.id}`}
                >
                  <img
                    src={data.image}
                    alt={data.name}
                    title={data.name}
                    className="productImg img-fluid"
                  />
                </a>
              </div>
              <div class="row">
                <div class="card-body ">
                  <h5 class="card-title pt-2">
                    <a
                      href={`/product?id=${data.id}`}
                      data-url={`/product?id=${data.id}`}
                    >
                      {data.name}
                    </a>
                  </h5>
                  <p class="card-text">
                    <div className="rating-static ratingDiv">
                      <div
                        className="rating-static filed-star"
                        style={{
                          width: `${(data.rating / 5) * 80 + "px"}`,
                        }}
                      />
                      {data.rating}
                    </div>
                  </p>
                  <p class="card-text">
                    <strong>We sell for £ {data.price}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <button
              onClick={buyProduct}
              style={{
                width: "100%",
                height: "2.4em",
              }}
              className="mt-5 text-white thisbuyNowButton col-md-3"
              productid={data.id}
            >
              {`${
                TDATA.buy.includes(data.id)
                  ? "Remove from cart"
                  : "I want to buy this item"
              }`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;

// {
//   /* <div className="__ProductCard">
//         <div
//           id="t049-SAPPIXR64GWUNLB"
//           className="t049-rec hotproducts marginTop t049-rec-seen product-card"
//           style={{ height: "303px" }}
//         >
//           <div
//             style={{ height: "64px", paddingLeft: "10px", lineHeight: "18px" }}
//             className="superCatLink"
//           >
//             <span className="link">
//               <b>{data.subCat}</b>
//             </span>
//             <span className="link">/ {data.subCat}</span>
//           </div>
//           <div className="hotProductDetails">
//             <div className="prodImg t058-checked">
//               <a
//                 href={`/product?id=${data.id}`}
//                 className="t049-toPDP t049-rec-SAPPIXR64GWUNLB"
//                 data-url={`/product?id=${data.id}`}
//               >
//                 <img
//                   src={data.image}
//                   alt={data.name}
//                   title={data.name}
//                   border={0}
//                 />
//               </a>
//             </div>
//             <div className="prodDetails">
//               <div className="prodName">
//                 <div className="savdiv">
//                   <a
//                     href={`/product?id=${data.id}`}
//                     data-url={`/product?id=${data.id}`}
//                   >
//                     {data.name}
//                   </a>
//                   <div className="rating-static ratingDiv">
//                     <div
//                       className="rating-static filed-star"
//                       style={{ width: `${(data.rating / 5) * 80 + "px"}` }}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="prodPrice">
//                 <div className="prodprisediv">
//                   <div className="labelTxt">WeSell for</div>
//                   <div className="priceTxt"> £{data.price} </div>
//                   <div className="clear" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="btnSection">
//             <a
//               href="/#"
//               className="t049-button t049-rec-SAPPIXR64GWUNLB"
//               style={{ cursor: "pointer" }}
//               onClick={buyProduct}
//               productid={data.id}
//             >
//               <div className="buyNowButton" productid={data.id}>
//                 <div className="addShine" productid={data.id} />
//                 <span productid={data.id}>{`${
//                   TDATA.buy.includes(data.id)
//                     ? "Remove from cart"
//                     : "I want to buy this item"
//                 }`}</span>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div> */
// }
