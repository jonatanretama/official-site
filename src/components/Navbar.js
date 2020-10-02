import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import './styles/Button.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        (window.innerWidth <= 960 ? setButton(false) : setButton(true))
    }

    //useEffect no depende de ningún valor "[]"
  //por lo tanto, sólo debería ejecutarse al 
  //montarse y desmontarse el componente.
  // https://midu.dev/react-hooks-use-effect-funcionalidad-en-el-ciclo-vida-componentes/
  //Evitar llamadas al método de forma innecesaria, ya que se usa un window resize

useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton)
}, []);

    return (
        <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to = '/' className = "navbar-title" onClick = {closeMenu}>
                        Jonatan Retama
                        <i className = "fas fa-code" />
                    </Link>
                    
                    <div className = "menu-icon" onClick = {handleClick}>
                        <i className = {click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    <ul className = {click ? "nav-menu active" : "nav-menu"} >
                        <li className = "nav-li" >
                            <Link to = '/' className = "nav-link" onClick = { closeMenu } >
                                Home
                            </Link>
                        </li>

                        <li className = "nav-li" >
                            <Link to = '/about' className = "nav-link" onClick = { closeMenu } >
                                About me
                            </Link>
                        </li>

                        <li>
                            <Link to = '/contact' className = "nav-link-contact" onClick = { closeMenu } >
                                Contact me
                            </Link>
                        </li>
                    </ul>
                {(button ?  
                <Link to = '/contact'>
                    <button className = "btn btn--outline btn--medium">Contact me</button>
                </Link> : null)
                }
                </div>
            </nav>
        </>
    );
}

export default Navbar
