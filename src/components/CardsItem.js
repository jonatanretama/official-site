import React from 'react';

const myUrl2 = () => (window.open('https://github.com/jonatanretama/calculate-credit-react.git', '_blank'));


function CardsItem(props) {
    
    return (
        <>
            <li className='cards-item'>
                <a className='cards-item-link' href={props.path} target = "_blank" rel="noopener noreferrer" onClick = {(props.pathTwo ? myUrl2 : null)} >
                    <figure className='cards-item-figure' data-title-item={props.title}>
                        <img className='cards-item-image' alt={props.title} src={props.src} />
                    </figure>
                    <div className='cards-item-text-container'>
                        <h5 className='cards-item-text'>{props.text} </h5>
                    </div>
                </a>
            </li>
        </>
    );
}

export default CardsItem;
