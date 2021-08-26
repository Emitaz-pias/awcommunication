import React, { useEffect, useState } from "react";
import ProductCard from "./../components/ProductCard";
import "./../scss/Home.scss";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [gaming, setGaming] = useState([]);
  const [phone, setPhone] = useState([]);
  const [electronic, setElectronic] = useState([]);
  const [laptops, setLaptops] = useState([]);

  const [AP, setAP] = useState([]);
  const [F, setF] = useState([]);

  const [loadRows, setLoadRows] = useState(10);
  const [cat, setCat] = useState("all");
  const [subcat, setSubcat] = useState("");
  const [search, setSearch] = useState("");
  let query = useQuery();

  useEffect(() => {
    if (query.get("cat") === "phone") {
      setCat(query.get("cat"));
    } else if (query.get("cat") === "gaming") {
      setCat(query.get("cat"));
    } else if (query.get("cat") === "electronic") {
      setCat(query.get("cat"));
    } else if (query.get("cat") === "laptops") {
      setCat(query.get("cat"));
    }

    if (query.get("s")) {
      setSearch(query.get("s"));
    }
    if (query.get("subcat")) {
      setSubcat(query.get("subcat"));
    }

    fetch("js/electronic.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setElectronic(data);
      });

    fetch("js/gaming.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setGaming(data);
      });

    fetch("js/phone.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setPhone(data);
      });

    fetch("js/laptops.json")
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        setLaptops(data);
      });
  }, []);

  useEffect(() => {
    setAP([...laptops, ...phone, ...electronic, ...gaming]);

    setF(
      [...laptops, ...phone, ...electronic, ...gaming].filter((P) => {
        return (
          P.name.toLowerCase().includes(search.toLowerCase()) ||
          P.supCat.toLowerCase().includes(search.toLowerCase()) ||
          // P.subCat.toLowerCase().includes(subcat.toLowerCase()) ||
          P.image.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [laptops, phone, electronic, gaming]);

  return (
    <div className="__Home">
      {search !== ""
        ? F.slice(0, loadRows).map((info, i) => {
            return <ProductCard key={i} info={info} />;
          })
        : subcat !== ""
        ? [...laptops, ...phone, ...electronic, ...gaming]
            .filter((P) => {
              return (
                P.subCat
                  // .replace(/\s/g, "")
                  .toLowerCase()
                  .includes(subcat.toLowerCase())
              );
            })
            .slice(0, loadRows)
            .map((info, i) => {
              return <ProductCard key={i} info={info} />;
            })
        : F.slice(0, loadRows).map((product, i) => {
            return cat === "all" ? (
              <>
                <ProductCard key={i} product={product} />
              </>
            ) : cat === "phone" ? (
              <ProductCard key={"phone[" + i + "]"} info={phone[i]} />
            ) : cat === "laptops" ? (
              <ProductCard key={"laptops[" + i + "]"} info={laptops[i]} />
            ) : cat === "electronic" ? (
              <ProductCard key={"electronic[" + i + "]"} info={electronic[i]} />
            ) : cat === "gaming" ? (
              <ProductCard key={"gaming[" + i + "]"} info={gaming[i]} />
            ) : (
              ""
            );
          })}
      <div id="showmore">
        <a
          onClick={() => {
            setLoadRows(loadRows + 20);
          }}
          href
          id="showmoreresult"
        >
          Show more products
        </a>
      </div>
    </div>
  );
}

export default Home;
