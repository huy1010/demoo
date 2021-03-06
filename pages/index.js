import Head from "next/head";
import { Layout, Row, Col, Tree, Table, Button, Input, Select } from "antd";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Option } = Select;
const treeData = [
  {
    title: "All Categories",
    key: "0-0",
    children: [
      {
        title: "IT Asset",
        key: "0-0-0",
        children: [
          {
            title: "Monitor",
            key: "0-0-0-0"
          },
          {
            title: "Laptop",
            key: "0-0-0-1"
          },
          {
            title: "Desktop",
            key: "0-0-0-2"
          }
        ]
      },
      {
        title: "Office Equipment",
        key: "0-0-1",
        children: [
          {
            title: "Desk",
            key: "0-0-1-0"
          },
          {
            title: "Chair",
            key: "0-0-1-1"
          },
          {
            title: "Stuff",
            key: "0-0-1-2"
          },
        ]
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        children: [
          {
            title: "leaf",
            key: "0-0-2-0"
          },
          {
            title: "leaf",
            key: "0-0-2-1"
          }
        ]
      }
    ]
  }
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park"
  }
];
const columns = [
  {
    title: "Category Type",
    dataIndex: "name",
    align: "center",
    key: "name"
  },
  {
    title: "Category Description",
    dataIndex: "age",
    align: "center",
    key: "age"
  },
  {
    title: "Category Refix",
    dataIndex: "address",
    align: "center",
    key: "address"
  },
  {
    title: "Category Name",
    dataIndex: "address",
    align: "center",
    key: "address"
  }
];

export default function Home() {
  // tree

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  // table

  const initState = {
    selectedRowKeys: [] // Check here to configure the default column
  };
  const [state, setState] = useState(initState);
  const { selectedRowKeys } = state;
  const onSelectChange = (selectedRowKeys) => {
    if (selectedRowKeys.length > 1) {
      const lastSelectedRowIndex = [...selectedRowKeys].pop();
      setState({ selectedRowKeys: lastSelectedRowIndex });
    }
    setState({ selectedRowKeys });
    console.log("selectedRowKeys changed: ", selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    type: "radio"
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Row width={1000}>
          <Col span={24}>
            <div className={styles.filterContainer}>
              <Row>
                <Col span={8} offset={1}>
                  <Input
                    className={styles.inputSearch}
                    placeholder="Category Name"
                    allowClear
                  ></Input>
                </Col>
                <Col span={13} offset={1}>
                  <Button type="primary" className={styles.myButton}>
                    Search
                  </Button>
                </Col>
                <Col span={4} offset={1}>
                  <div className={styles.filterCatetype}>
                    <div className={styles.filterTitle}>Category Type:</div>
                    <Select
                      showSearch
                      style={{
                        width: 180
                      }}
                      placeholder="Select Type"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        optionA.children
                          .toLowerCase()
                          .localeCompare(optionB.children.toLowerCase())
                      }
                    >
                      <Option value="1">Not Identified</Option>
                      <Option value="2">Closed</Option>
                      <Option value="3">Communicated</Option>
                      <Option value="4">Identified</Option>
                      <Option value="5">Resolved</Option>
                      <Option value="6">Cancelled</Option>
                    </Select>
                  </div>
                </Col>
                <Col span={4}>
                  <div className={styles.filterPre}>
                    <div className={styles.filterTitle}>Prefix:</div>
                    <Select
                      showSearch
                      style={{
                        width: 180
                      }}
                      placeholder="Select Prefix"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        optionA.children
                          .toLowerCase()
                          .localeCompare(optionB.children.toLowerCase())
                      }
                    >
                      <Option value="1">Not Identified</Option>
                      <Option value="2">Closed</Option>
                      <Option value="3">Communicated</Option>
                      <Option value="4">Identified</Option>
                      <Option value="5">Resolved</Option>
                      <Option value="6">Cancelled</Option>
                    </Select>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={5}>
            <div className={styles.treeContainer}>
              <Tree
              className="cc"
              style={{
                marginLeft: 10
              }}
                showLine={true}
                showIcon={false}
                defaultExpandedKeys={["0-0-0"]}
                onSelect={onSelect}
                treeData={treeData}
              />
            </div>
          </Col>
          <Col span={19}>
            <div className={styles.tableContainer}>
              <Table
                columns={columns}
                dataSource={data}
                size="small"
                bordered
                pagination={false}
                rowSelection={rowSelection}
                onRow={(record, recordIndex) => ({
                  onClick: (event) => {
                    onSelectChange([(recordIndex + 1).toString()]);
                  }
                })}
              />
            </div>
          </Col>
          <Col span={4} offset={20}>
            <div className={styles.buttonContainer}>
              <Button type="primary" className={styles.myButton}>
                New
              </Button>
              <Button type="primary" className={styles.myButton}>
                Export
              </Button>
              <Button type="primary" className={styles.myButton}>
                Cancle
              </Button>
            </div>
          </Col>
        </Row>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
