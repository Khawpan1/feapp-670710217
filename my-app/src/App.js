import React from 'react';
import Header from './components/Header';
import MovieList from './components/Movielist';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';

const members = [
  { id: 1, name: 'อศิรกรณ์', nickname: 'ข้าวปั้น',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชานม', 'หมา'] },
  {id: 2, name: 'ประกอบกิจ', nickname: 'เซฟ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['น้ำแอปเปิล', 'นกแก้ว']},
  {id: 2, name: 'ประกอบปุย', nickname: 'แชมป์',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'ลิง']}
];
const students = [
  { id: 1, name: 'ฝน', year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];

function App() {
   return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}


export default App;