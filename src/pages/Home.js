import React, { useEffect } from 'react';



const Home = () => {
  useEffect(()=>{
    alert("접속 성공!")
  },[])

  return (
    <div>게시판 홈</div>
  );
};

export default Home;