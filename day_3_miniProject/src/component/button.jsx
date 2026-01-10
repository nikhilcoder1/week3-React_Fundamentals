import React from 'react'


function Button() {

  const handleclick = () => {
    console.log("Button Clicked");
    window.location.href = "https://www.google.com"  ;
  }  

  return (
    <div>
        <button 
          className='rounded-lg border-8 cursor-pointer px-4 py-2' 
          onClick={handleclick}>
          Visit Me
        </button>
    </div>
  )
}

export default Button