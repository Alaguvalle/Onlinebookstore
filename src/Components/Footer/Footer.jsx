import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Neohub!</h1>
                <p>Exclusive for Reader's</p>
            </div>
            <div>
                <a href='/'>
                <i class="bi bi-facebook"></i>
                </a>
                <a href='/'>
                <i class="bi bi-instagram"></i>
                </a>
                <a href='/'>
                <i class="bi bi-twitter"></i>
                </a>
                <a href='/'>
                <i class="bi bi-github"></i>
                </a>
            </div>
        </div>
    <div className='bottom'>
        <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
        </div>
        <div>
            <h4>HELP</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshoot</a>
            <a href="/contact">Contact Us</a>
        </div>
        
    </div>
    </div>
  )
}