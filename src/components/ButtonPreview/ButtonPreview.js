import './ButtonPreview.css';
import React from 'react';

function ButtonPreview(props) {
  return (
    <button type='submit' className='btn-preview'>{props.title}{props.icon}</button>
  );
}

export default ButtonPreview;