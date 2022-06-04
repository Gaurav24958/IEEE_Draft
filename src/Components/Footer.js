import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="footermain">
                <div className="footerleft">
                    <img src="../Images/Logo.png" alt="Logo" srcset="" className='footerimg' />
                    <h9 className='footerleftcont'>The flagship event of IEEE India Council, IEEE AISYWLC, has always been a colloquium that brings together the youth with professionals and experts with their ideologies tallying up to be the best exchange of wisdom and insight.</h9>
                </div>
                <div className="footermid">
                    {/* <h2>Footer</h2> */}
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Speaker</li>
                        <li>Tracks</li>
                        <li>Schedule</li>
                    </ul>
                </div>
                <div className="footerright">
                    <h3>Follow us on:</h3>
                </div>
            </div>
        </>
    )
}
