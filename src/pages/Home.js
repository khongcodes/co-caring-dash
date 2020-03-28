import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Co-Caring'
  })
  
  return (
    <div>
      Home page
    </div>
  )
}

export default Home