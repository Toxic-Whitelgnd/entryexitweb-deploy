import React, { useState } from 'react';
import "./imgslider.css"
import "./imgapi"
import * as faico from "react-icons/fa";
import data from './imgapi';




const Imgslider = () => {

    const [current, setcurrent] = useState(0);
    const length = data.length;

    console.log(length)

    const nextslide = () => {
        setcurrent(current === length - 1 ? 0 : current + 1);
    }
    console.log(current)
    const prevslide = () => {
        setcurrent(current === 0 ? length - 1 : current - 1);
    }
    console.log(prevslide)

    if (!Array.isArray(data) || length <= 0) {
        return null
    }

    return (
        <div className='containerimg'>
            <div className='header'>
                <h1>EncrypDecryp Outputs</h1>
            </div>

            <div className='slider'>
                <faico.FaArrowAltCircleLeft className='leftarrow' onClick={prevslide} />
                <faico.FaArrowAltCircleRight className='rightarrow' onClick={nextslide} />
    
                {
                    data.map((val, index) => {
                        return (


                            <div className={index === current ? 'val active' : 'val'} key={index}>

                                {index === current && (
                                    <img className='img' src={val.image} alt={val.alt} />)}

                            </div>

                        );
                    })

                }

            </div>

            <footer>
                <div className='footercontent'>

                    <p>The project Source code in Github is in development,so I can't share</p>

                    <a className='linkbox' href='https://github.com/Toxic-Whitelgnd'>
                        <faico.FaGithubSquare />
                    </a>

                </div>
            </footer>

        </div>
    );
}

export default Imgslider;

