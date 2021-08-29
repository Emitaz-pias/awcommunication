import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [ordersproducts, setOrderdProducts] = useState([]);
  console.log(orders[0]);
  useEffect(() => {
    fetch("http://localhost:8080/dashboardOwnerHafizVai")
      .then((res) => res.json())
      .then((orders) => {
        //   console.log("orders:", orders, "products:", orders[0].order);
        setOrders(orders);
        setOrderdProducts(orders[0].order);
      });
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <h1 className="text-center pt-2">
        active orders: <span className="text-success">{orders.length}</span>
      </h1>
    </div>
  );
};

export default Dashboard;
