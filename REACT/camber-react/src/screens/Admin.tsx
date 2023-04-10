import React from "react";
import { data } from "../data/dummyData";
import { RxCross2 } from "react-icons/rx";
import { BsCheck2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
const Admin = () => {
  return (
    <div
      style={{ maxWidth: 1389, height: "120vh", backgroundColor: "#d7e6fa" }}
      className=" container d-flex flex-column mx-0 align-items-center"
    >
      <div className="col-10 my-2 d-flex align-items-center ">
        <AiOutlineUser
          style={{ color: "#498ca5", fontWeight: "bold" }}
          className="fs-3"
        />
        <span style={{ color: "#498ca5", fontWeight: "bold" }} className="fs-3">
          Admin
        </span>
      </div>
      <div
        style={{ height: "10vh", backgroundColor: "white" }}
        className="col-10 my-2 d-flex align-items-center  justify-content-center rounded"
      >
        <input
          style={{
            width: "90%",
            borderWidth: 1,
            fontSize: 18,
            height: "50%",
            paddingLeft: 8,
          }}
          className="rounded"
          placeholder="enter first name, second name or emial to search..."
        ></input>
      </div>
      <div
        style={{ height: "80vh" }}
        className=" bg-light col-10 my-4 rounded p-3"
      >
        <table
          style={{ fontSize: 12 }}
          className="table table-striped table-bordered"
        >
          <thead>
            <tr style={{ minWidth: 700 }}>
              <th>Client Name</th>
              <th>Email</th>
              <th>Branches</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Admin</th>
              <th>Responder Profile</th>
              <th>Re-Marketing</th>
              <th>In-Market Monitoring</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <th>{item.clientName}</th>
                  <th>{item.email}</th>
                  <th>{item.branches}</th>
                  <th>{item.status}</th>
                  <th>{item.createdDate}</th>
                  <th>
                    {item.admin ? (
                      <span>
                        <RxCross2 style={{ color: "red", fontSize: 18 }} />
                        True
                      </span>
                    ) : (
                      <span>
                        <BsCheck2 style={{ color: "green", fontSize: 18 }} />
                        False
                      </span>
                    )}
                  </th>
                  <th>
                    {item.responder ? (
                      <span>
                        <RxCross2 style={{ color: "red", fontSize: 18 }} />
                        True
                      </span>
                    ) : (
                      <span>
                        <BsCheck2 style={{ color: "green", fontSize: 18 }} />
                        False
                      </span>
                    )}
                  </th>
                  <th>
                    {item.reMarketing ? (
                      <span>
                        <RxCross2 style={{ color: "red", fontSize: 18 }} />
                        True
                      </span>
                    ) : (
                      <span>
                        <BsCheck2 style={{ color: "green", fontSize: 18 }} />
                        False
                      </span>
                    )}
                  </th>
                  <th>
                    {item.inMarketing ? (
                      <span>
                        <RxCross2 style={{ color: "red", fontSize: 18 }} />
                        True
                      </span>
                    ) : (
                      <span>
                        <BsCheck2 style={{ color: "green", fontSize: 18 }} />
                        False
                      </span>
                    )}
                  </th>
                  <th style={{ height: "100%", padding: 0 }}>
                    <BsPencil
                      style={{
                        color: "white",
                        backgroundColor: "blue",
                        fontSize: 18,
                        padding: 2,
                        marginLeft: 2,
                        marginTop: 5,
                        borderRadius: 3,
                      }}
                    />
                    <BsPencil
                      style={{
                        color: "white",
                        backgroundColor: "blue",
                        fontSize: 18,
                        padding: 2,
                        marginLeft: 2,
                        marginTop: 5,
                        borderRadius: 3,
                      }}
                    />
                    <BsPencil
                      style={{
                        color: "white",
                        backgroundColor: "blue",
                        fontSize: 18,
                        padding: 2,
                        marginLeft: 2,
                        marginTop: 5,
                        borderRadius: 3,
                      }}
                    />
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
