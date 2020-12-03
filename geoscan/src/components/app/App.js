import './app.css';
import React from 'react';
import {Button} from 'antd';
import AntModal from '../modal/modal';
import AntTable from '../table/table';

const App = () => {
  
  const [visible, setVisible] = React.useState(false);

  const onCancel = () => {
    setVisible(false);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" className="add-btn" onClick={() => {setVisible(true)}}>Добавить</Button>
      </header>
      <main>
        <AntModal visible={visible} onCancel={onCancel}/>
        <AntTable />
      </main>
    </div>
  );
}

export default App;
