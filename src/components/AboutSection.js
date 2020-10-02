import React from 'react'
import './styles/AboutSection.css';

function AboutSection() {
    return (
        <div className = "about-section-container" >
            <h1 className = "title-about-section">Fight for your dreams. <i className="fas fa-user-astronaut"></i></h1>
            <div className = "first-about-section">
                <div className = "first-image-about-section">
                    <img src="/official-site/images/about/me2.jpg" alt="Avatar" className = "first-image" /> 
                </div>
                <div className = "text-section">
                    <h2 className = "subtitle-about-section" >
                        What I'm?
                    </h2>
                    <p className = "text-background">
                    I'm 21 years old, I love video games, developing back-end 
                    & front-end software, listening to music all the time and lastly, 
                    I love cars.
                    </p>
                </div>
            </div>

            <div className = "second-about-section">
                <div className = "second-image-about-section">
                    <img src="/official-site/images/about/me.jpg" alt="Avatar" className = "second-image" /> 
                </div>
                <div className = "text-section">
                    <h2 className = "subtitle-about-section" >
                        Who I'm?
                    </h2>
                    
                    <ul className = "text-background">
                        <li>
                            I have a career as a programming technician at the "C.B.Tis 179" in Tulancigo, 
                            Hidalgo, Mexico.
                        </li>
                        <li>
                            I'm also an engineer in Computer Systems, graduated from the Polytechnic 
                            University of Tulancingo (UPT).
                        </li>
                        <a href = "http://www.cbtis179.edu.mx/portal/" target = "_blank" rel="noopener noreferrer">
                            <img src="official-site/images/about/cbtis.jpg" alt="Avatar" className = "logo-cbtis" /> 
                        </a>
                        <a href="http://www.upt.edu.mx/" target = "_blank" rel="noopener noreferrer">
                            <img src="official-site/images/about/logoupt.png" alt="Avatar" className = "logo-upt" />
                        </a>
                    </ul>
                    
                </div>
            </div>

            <div className = "dev-container">
                <h2 className = "title-dev">Development languages and technologies that I have worked</h2>
                <div className = "dev-icons">
                    <div className = "icons-dev-container">
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg" 
                        alt="react" className = "icon-dev-into" />
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg" 
                        alt="java" className = "icon-dev-into"/> 
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/linux/linux-original.svg" 
                        alt="linux" className = "icon-dev-into"/> 
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg" 
                        alt="css3" className = "icon-dev-into"/> 
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg" 
                        alt="mysql" className = "icon-dev-into"/> 
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" 
                        alt="javascript" className = "icon-dev-into"/> 
                        <img src = "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/csharp.svg" 
                        alt = "csharp" className = "icon-dev-into" />
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/android/android-original-wordmark.svg" 
                        alt="android" className = "icon-dev-into"/> 
                        <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" 
                        alt="bash" className = "icon-dev-into"/> 
                        <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" 
                        alt="git" className = "icon-dev-into"/> 
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg" 
                        alt="html5" className = "icon-dev-into"/> 
                        <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" 
                        alt="illustrator" className = "icon-dev-into"/> 
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" 
                        alt="nodejs" className = "icon-dev-into"/> 
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/photoshop/photoshop-plain.svg" 
                        alt="photoshop" className = "icon-dev-into"/> 
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/php/php-original.svg" 
                        alt="php" className = "icon-dev-into"/> 
                        <img src="https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg" 
                        alt="python" className = "icon-dev-into"/> 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutSection
