import React from "react";
import { movies } from "../data/data"; // 1. นำเข้าข้อมูล movies มาใช้งาน
import MovieCard from "../components/MovieCard";
import MovieGallery from "../components/MovieGallery";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>

      <h2 className="mt-8 text-2xl font-bold text-slate-800 mb-4">หนังแนะนำ</h2>

      {/* 2. เปลี่ยนมาใช้ movies.slice แทน MovieCard.slice */}
      <div className="mx-auto mt-8 max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.slice(0, 3).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-bold text-slate-800 mb-4">ดูหนังเพิ่มเติม</h2>
      <div className="mx-auto mt-8 max-w-md">
        <MovieGallery />
      </div>
    </div>
  );
}

export default Home;