import React, { useRef, useEffect } from 'react';
import '../css/pageination.css';

function Pageination({ currentPage, updatePage }) {
    const pageinationRef = useRef(null);

    const nextPage = () => {
        updatePage(currentPage + 1)
        document.documentElement.scrollTop = 0; 
    }
    const prevPage = () => {
        updatePage(currentPage - 1)
        document.documentElement.scrollTop = 0; 
    }
    const gotoPage = (e) => {
        updatePage(parseInt(e.target.dataset.current))
        document.documentElement.scrollTop = 0; 
    }

    useEffect(() => {
        const button = pageinationRef.current.getElementsByTagName('button');
        const anchor = pageinationRef.current.getElementsByTagName('a');

        if (currentPage == 1 || currentPage == 5) {
            const activeButton = currentPage == 1 ? 0 : 1;
            const disableButton = -1 * (activeButton - 1);
            button[activeButton].disabled = true;
            button[activeButton].style.opacity = "0.6";
            button[disableButton].disabled = false;
            button[disableButton].style.opacity = "1";
        }
        else {
            Array.from(button).forEach((item) => {
                item.disabled = false;
                item.style.opacity = "1";
            })
        }

        Array.from(anchor).forEach((item) => {
            if (item.dataset.current == currentPage) {
                item.style.backgroundColor = "red";
                item.style.pointerEvents = "none";
                item.style.color="white";
            }
            else if (item.style.backgroundColor == "red") {
                item.style.backgroundColor = "";
                item.style.pointerEvents = "";
                item.style.color="black"
            }
        })

    }, [currentPage])


    return (
        <div className='pageination' ref={pageinationRef}>
            <button onClick={prevPage} ><i className="fa-solid fa-angle-left"></i></button>
            <a data-current="1" onClick={gotoPage}>1</a>
            <a data-current="2" onClick={gotoPage}>2</a>
            <a data-current="3" onClick={gotoPage}>3</a>
            <a data-current="4" onClick={gotoPage}>4</a>
            <a data-current="5" onClick={gotoPage}>5</a>
            <button onClick={nextPage}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    )
}

export default React.memo(Pageination)
