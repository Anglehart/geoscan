import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

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
    <Table columns={columns} dataSource={props.books} />
  );
}

export default connect(
  state => ({
    books: state.books
  })
)(AntTable);