import React, { useState } from 'react'
import Shuffle from '../ReactBits/Shuffle/Shuffle';

const Preloader = () => {
    const [title, setTitle] = useState(false)

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className=' col-md-4 d-flex flex-column justify-content-center align-items-center preLoader' >
                <img src="http://clipartmag.com/images/animated-shoes-clipart-24.gif" alt="no img" className='w-50' />
                <Shuffle
                    text="SUPERKICKS"
                    className='fw-bolder fs-1 text-dark border rounded p-2 border-dark'
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                />
            </div>
        </div>
    )
}

export default Preloader