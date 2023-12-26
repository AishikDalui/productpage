import React from 'react'





export default function Nav(props) {
    

    return (
        <>
           <nav className='container'>
            <div className='logo'>
            <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact-us</li>
            </ul>
            <button>login</button>
            </nav> 
        </>
    )
}
