import React,{useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/form';
import Gallerygrid from './comps/gallerygrid';
import Modal from './comps/Modal';

function App() {
  const [selected,setSelected]= useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <Gallerygrid setSelected={setSelected}/>
      {selected && <Modal selected={selected} setSelected={setSelected}/>}
    </div>
  );
}

export default App;
