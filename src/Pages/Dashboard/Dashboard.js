import React, { useState } from "react";



import "./Dashboard.css";
import AllProducts from './../../Components/AllProducts/AllProducts';
import ManageOrder from "../../Components/ManageOrders/ManageOrder";
import AddProducts from './../../Components/AddProducts/AddProducts';
import ManageProducts from "../../Components/ManageProducts/ManageProducts";



const Dashboard = () => {
  const [control, setControl] = useState("addServices");

  console.log(control);

 
  return (

    <div>
        
    </div>


  );
};

export default Dashboard;