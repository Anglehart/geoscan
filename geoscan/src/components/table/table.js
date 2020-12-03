import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const AntTable = (props) => {
  const columns = [
    {
      title: 'Название',
      dataIndex: 'name',
    },
    {
      title: 'Автор',
      dataIndex: 'author',
    },
    {
      title: 'Кол-во страниц',
      dataIndex: 'pages',
    },
    {
      title: 'Год',
      dataIndex: 'year',
    }
  ];
  
  return (
    <Table columns={columns} dataSource={props.data} />
  );
}

export default AntTable;