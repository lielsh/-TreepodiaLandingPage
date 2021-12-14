import { useState, useRef } from 'react';
import './App.css';

export default function App() {

  const [img, setImg] = useState('https://bit.ly/3dJbaW3');
  const inputEl = useRef(img);

  return (
    <div className="App container">
      <br />
      <img src={img||''} width='50%' alt='logo'/>
      <br />
      <p>treepodia player</p>
      <div id="treepodiaPlayerMain" width='50%'></div>
      <br />
      <div className='row'>
        <div className='col-sm'>
          <span>ENTER URL FOR LOGO:</span>
        </div>
        <div className='col-sm'>
          <input
            type='text' className='form-control' defaultValue={img} ref={inputEl} style={{textAlign: 'center'}}
          />
        </div> 
        <div className='col-sm'>
          <button className='btn btn-primary' onClick={() => setImg(inputEl.current.value)}>SEND</button>
        </div>
      </div>
      <br/>
    </div>
  );
}