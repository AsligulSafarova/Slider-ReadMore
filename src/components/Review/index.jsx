import React, { useState, useEffect } from 'react';
import { data } from "../../data";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs"
import "./style.scss"

export default function Review() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = data[index];
    const [readMore, setReadMore] = useState(false)

    const checkNumber = (number) => {
        if (number > data.length - 1) {
            return 0
        } else if (number < 0) {
            return data.length - 1;
        }
        return number
    };
    const nextPerson = () => {
        setIndex((index) => {
            let newPerson = index + 1;
            return checkNumber(newPerson)
        })
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * data.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    const readsMore = () => {
        setReadMore(!readMore)
    }
    return (
        <article className="article">
            <div className="article__box">
                <img src={image} alt="img" className='article__box__img' />
                <h1>{name}</h1>
                <h2>{job}</h2>
                <div>
                    <p>{readMore ? text : `${text.substring(0, 100)}...`}
                        <button className='article__readmore' onClick={readsMore}>
                            {readMore ? 'show less' : 'read more'}
                        </button>
                    </p>
                </div>
            </div>
            <div className="article__tragger">
                <BsChevronCompactLeft onClick={prevPerson} />
                < BsChevronCompactRight onClick={nextPerson} />
            </div>
            <div className="article__botton">
                <button onClick={randomPerson}>Surprice Me</button>
            </div>

        </article>
    )
}
