import React from 'react';
import {Modal, Form, Input, InputNumber} from 'antd';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

const AntModal = (props) => {
  
  const [form] = Form.useForm();
  
  const validateMessages = {
    required: 'Поле обязательно!',
    types: {
      number: 'Поле не может содержать буквы!',
    },
    number: {
      range: 'Число в недопустимом интервале.',
    },
  };
  
  return (
    <Modal
      visible={props.visible}
      title="Добавление новой книги"
      okText="Добавить"
      cancelText="Закрыть"
      onCancel={props.onCancel}
      onOk={() => {
      form
        .validateFields()
        .then((values) => {
          form.resetFields();
          props.onCreate(values);
        })
      }}
    >
    <Form
      form={form}
      validateMessages={validateMessages}
      labelCol={{span: 7}}
      wrapperCol={{span: 14}}
      layout='horizontal'
      initialValues={{
        name: '',
        author: '',
        pages: '',
        year: '',
      }}
      >
      <Form.Item name= 'name' label='Название' rules={[{required: true}]}>
        <Input />
      </Form.Item>
      
      <Form.Item name='author' label='Автор'>
        <Input />
      </Form.Item>
      
      <Form.Item name='pages' label='Кол-во страниц' rules={[{type: 'number', min: 1, max: 10000}]}>
        <InputNumber />
      </Form.Item>
      
      <Form.Item name='year' label='Год' rules={[{type: 'number', min: -3500, max: 2020}]}>
        <InputNumber />
      </Form.Item>
    </Form>
    </Modal>
  );
}

export default connect(
  state =>({}),
  dispatch => ({
    onCreate: (book) => {
      dispatch({type: 'BOOK_ADDED', payload: book})
    }
  })
)(AntModal);