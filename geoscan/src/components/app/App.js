import './App.css';
import React from 'react';
import {Button} from 'antd';
import AntModal from '../modal/modal';
import AntTable from '../table/table';

const App = () => {
  
  const [visible, setVisible] = React.useState(false);
  const [books, setBooks] = React.useState([]);
  
  const onCreate = (book) => {
    book.key = books.length;
    setBooks(books.concat([book]));
  }
  const onCancel = () => {
    setVisible(false);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" className="add-btn" onClick={() => {setVisible(true)}}>Добавить</Button>
      </header>
      <main>
        <AntModal visible={visible} onCreate={onCreate} onCancel={onCancel}/>
        <AntTable data={books} />
      </main>
    </div>
  );
}

export default App;
