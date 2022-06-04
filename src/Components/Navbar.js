import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <a className="navbar-brand" >
                    <img src="./Images/Logo.png" className="Logo" alt="Image" />
                </a>
            </nav>
            
            <ul className='navbar bars'>
                <li className='heading'>Home</li>
                <li className='heading'>About</li>
                <li className='heading'>Venue</li>
                <li className='heading'>Sponsors</li>
                <li className='heading'>Speakers</li>
                
            </ul>
        </div>
    )
}
