import React, { useState, useEffect } from "react";
import { Table, Spin, Empty, Button, Popconfirm, message } from "antd";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";

const AccountHolderList = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4545/Get_AccountMaster")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.success) {
          console.log(data.success);
          setAccounts(data.data);
        } else {
          console.error(data.msg);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (accountId) => {
    // Here, you should implement the logic to delete the account with the specified accountId.
    // For example, you can use another API call or any other method to delete the account.
    // After successfully deleting the account, you should update the accounts state accordingly.
    // For demonstration purposes, let's just show a message indicating that the account is deleted.
    message.success(`Account with ID ${accountId} is deleted.`);
  };

  const columns = [
    // Your existing columns
    {
      title: "Account ID",
      dataIndex: "Account_id",
      key: "Account_id",
    },
    {
      title: "Client ID",
    
      dataIndex: "client_id",
      key: "client_id",
    },
    {
      title: "Account Name",
      dataIndex: "Account_name",
      key: "Account_name",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    // {
    //   title: "Delete",
    //   dataIndex: "Delete",
    //   key: "Delete",
    // },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    // Custom column for the delete button
    {
      title: "Delete",
      dataIndex: "action",
      key: "action",
      render: (_, record) =>
        accounts.length >= 1 ? (
          <Popconfirm
            title={`Sure to delete account with ID ${record.Account_id}?`}
            onConfirm={() => handleDelete(record.Account_id)}
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        ) : null,
    },
  ];

  const getRowProps = (record) => {
    if (record.Account_id === 12345) {
      return {
        style: { width: "300px" },
      };
    }
    return {};
  };

  return (
    <>
       <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="container">
          {loading ? (
            <Spin size="large" />
          ) : accounts.length === 0 ? (
            <Empty description="No accounts found." />
          ) : (
            <div style={{ overflowX: "auto" }}>
              <Table
                dataSource={accounts}
                columns={columns}
                scroll={{ x: "max-content", y: 400 }}
                rowClassName={getRowProps} 
                              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AccountHolderList;
