import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./UserList.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { userRows } from "../../dummyData";
import Button from "../../components/button/Button";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <div className="userListAction">
              <Link to={"/user/" + params.row.id}>
                <Button type="Approved" className="userListEdit">
                  Edit
                </Button>
              </Link>
              <MdDeleteOutline
                className="userListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
