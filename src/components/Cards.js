import React from 'react';
import './styles/Cards.css';
import CardsItem from './CardsItem';


function Cards() {
    const url2 = "https://github.com/jonatanretama/calculate-credit-react.git";

    return (
        <div className = 'cards-global-container'>
        <h1><i className = "fas fa-terminal"></i> Projects and practices</h1>
        <div className = 'cards-sub-container'>
            <div className = 'cards-content'>
                <ul className = 'cards-ul'>
                    <CardsItem
                        src = "images/personal/credit-page.png"
                        title = "React app | Personal"
                        text = "A page to calculate credit"
                        path = 'https://jonatanretama.github.io/calculate-credit-react/'
                        pathTwo = {url2}
                        
                        />
                    <CardsItem
                        src = "images/fcc/tribute.png"
                        title = "HTML, CSS | Free Code Camp"
                        text = "A tribute page"
                        path = 'https://codepen.io/jonatanretama/full/jOqLxdK'
                    />
                </ul>
                <ul className = 'cards-ul'>
                    <CardsItem
                        src = "images/fcc/product.png"
                        title = "HTML, CSS | Free Code Camp"
                        text = "A Product Landing Page"
                        path = 'https://codepen.io/jonatanretama/full/MWyEVre'
                    />
                    <CardsItem
                        src = "images/fcc/form.png"
                        title = "HTML, CSS | Free Code Camp"
                        text = "Survey Form Page"
                        path = 'https://codepen.io/jonatanretama/full/mdPBbBB'
                    />
                    <CardsItem
                        src = "images/fcc/documentation.png"
                        title = "HTML, CSS | Free Code Camp"
                        text = "Technical Documentation Page"
                        path = 'https://codepen.io/jonatanretama/full/jOqaqjd'
                    />
                    </ul>
            </div>
        </div>
        </div>
    );
}

export default Cards;
