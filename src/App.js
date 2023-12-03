import React, { useState } from 'react';
import './App.css';
import { CgPhone  } from "react-icons/cg";

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleInputChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, '');
  
    if (value.length > 0) {
      // ตรวจสอบว่ามีตัวเลขอยู่ในเบอร์โทรศัพท์
      if (value[0] === '0') {
        if (value.length > 3) {
          value = value.slice(0, 3) + '-' + value.slice(3);
        }
        if (value.length > 7) {
          value = value.slice(0, 7) + '-' + value.slice(7);
        }
        if (value.length > 12) {
          value = value.replace(/-/g, '');
          console.log('เพิ่มเงื่อนไขเมื่อกรอกจำนวนตัวเลขมากกว่า 10');
        }
      } else {
        if (value.length > 2) {
          value = value.slice(0, 2) + '-' + value.slice(2);
        }
        if (value.length > 6) {
          value = value.slice(0, 6) + '-' + value.slice(6);
        }
        if (value.length > 11) {
          value = value.replace(/-/g, '');
          console.log('เพิ่มเงื่อนไขเมื่อกรอกจำนวนตัวเลขมากกว่า 9');

        }
      }
    }
  
    setPhoneNumber(value);
  };
  

  return (
    <div className="App">
      <div className="flex-container">
        <div className="flex-item"></div>
        <div className="box-content">
          <div className='flex1'>
          <label className="test">Test Coding</label>
          </div>
          <div className="input-container">
            <div className="icon">  
            <CgPhone style={{ fontSize: '42px', color: 'white' }} />
            </div>
            <input
              type="text"
              placeholder="ป้อนเบอร์โทรศัพท์"
              className="custom-input"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex-item"></div>
      </div>
    </div>
  );
}

export default App;
