import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from './../Hooks/useAuth';
import './ManageOrder.css';

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  const [status, setStatus] = useState('');
  const { user } = useAuth();

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  useEffect(() => {
    fetch(' https://oclock.onrender.com/allOrders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);

  // const status = "apporved";
  const handleUpdate = (id) => {
    fetch(` https://oclock.onrender.com/updateStatus/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ status }),
    });

    console.log(id);
  };

  //delete
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you Sure,you wan to delete?');
    if (proceed) {
      fetch(` https://oclock.onrender.com/deleteOrder/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setControl(!control);
            alert('deleted Successfully');
          }
        });
      console.log(id);
    }
  };

  return (
    <div className="manage">
      <h1>Total orders : {orders.length}</h1>
      <div className="row">
        <div className="col-12 col-md-10">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>By</th>

                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {orders?.map((order, index) => (
              <tbody>
                <tr>
                  <td>{index}</td>
                  <td>{order.name}</td>
                  <td>$ {order.price}</td>
                  <td>{order.Email}</td>
                  <td>{order.Address}</td>
                  <td>{order.Mobile}</td>

                  <td>
                    <input
                      onChange={handleStatus}
                      type="text"
                      defaultValue={order.status}
                    />
                  </td>
                  <button
                    onClick={() => handleDelete(order?._id)}
                    className="btnDelete text-white p-2 my-1"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(order._id)}
                    className="btnUpdate text-white p-2 my-1"
                  >
                    Update
                  </button>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
