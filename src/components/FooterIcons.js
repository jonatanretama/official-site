import React from 'react';

function FooterIcons() {
    return (
        <>
        <section className = 'social-media-extra'>
                <div className = 'social-media-wrap-extra'>
                    <div className = 'social-icons'>
                        <a
                            className = 'social-icon-link'
                            href = 'https://fb.com/jonatanretama'
                            target = '_blank'
                            rel = "noopener noreferrer"
                        >
                            <i className = 'fab fa-facebook-f' />
                        </a>
            
                        <a
                            className = 'social-icon-link'
                            href = 'https://instagram.com/jonatanretama'
                            target = '_blank'
                            rel = "noopener noreferrer"
                        >
                            <i className = 'fab fa-instagram' />
                        </a>
            
                        <a
                            className = 'social-icon-link'
                            href = 'https://github.com/jonatanretama'
                            target = '_blank'
                            rel = "noopener noreferrer"
                        >
                            <i className = "fab fa-github"></i>
                        </a>
            
                        <a
                            className = 'social-icon-link'
                            href = 'https://twitter.com/jonatanretama'
                            target = '_blank'
                            rel = "noopener noreferrer"
                        >
                            <i className = 'fab fa-twitter' />
                        </a>
            
                        <a
                            className = 'social-icon-link'
                            href = 'https://linkedin.com/in/jonatan-joel-luna-retama-213571187'
                            target = '_blank'
                            rel = "noopener noreferrer"
                        >
                            <i className = 'fab fa-linkedin' />
                        </a>

                        <a
                            className = 'social-icon-link'
                            href = 'https://codepen.io/jonatanretama'
                            target = '_blank'
                            rel = "noopener noreferrer"
                        >
                            <i className = "fab fa-codepen"></i>
                        </a>

                        <a
                            className = 'social-icon-link'
                            href = 'https://stackoverflow.com/users/11501499'
                            target = '_blank'
                            rel = "noopener noreferrer"
                        >
                            <i className = "fab fa-stack-overflow"></i>
                        </a>

                        <a
                            className = 'social-icon-link'
                            href = 'https://account.xbox.com/es-mx/profile?gamertag=i7VFz lSnupi'                            
                            target = '_blank' 
                            rel = "noopener noreferrer"
                        >
                            <i className = "fab fa-xbox"></i>
                        </a>

                    </div>
                </div>
            </section>
            <section className = 'social-media'>
                <div className = 'social-media-wrap'>
                    
    
                    <div className = 'footer-logo'>
                        <a href = '/' className = 'social-logo'>
                        Jonatan Retama
                            <i className = 'fas fa-code' />
                        </a>
                    </div>  
    
                    <small className = 'website-rights'>Jonatan Retama © 2020</small>
                </div>
            </section>
        </>
    )
}

export default FooterIcons
