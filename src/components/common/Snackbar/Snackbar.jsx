import React from 'react';
import './Snackbar.css'

const Snackbar = ({ message }) => {
  return (
    <div className="snackbar-container">
      {message}
    </div>
  )
}


export default Snackbar;