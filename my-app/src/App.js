import React from 'react';
import Greeting from './components/Greeting'; 
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Hello from './components/Hello';
import Movielist from './components/Movielist';
import './App.css';

const students = [
  { id: 1, name: 'ฝน', year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

function App() {
  return (
    <div>
      <Card title="ประกาศ">
        <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
        <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
      </Card>
      <h1>รายชื่อนักศึกษา</h1>
      {students.map((s) => (
        <Greeting key={s.id} name={s.name} year={s.year} />
      ))}
    </div>
  );
}

export default App;