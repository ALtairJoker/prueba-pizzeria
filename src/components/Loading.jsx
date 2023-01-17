import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';

export default function Loading() {
  return (
    <div className='divPadre'>
        <div className='divHijo'>
        <div class="loader">
  <span class="hour"></span>
  <span class="min"></span>
  <span class="circel"></span>
</div>
        </div>
    </div>
  )
}
