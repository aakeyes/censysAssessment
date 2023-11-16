import React, { useState, useEffect } from 'react';
import SearchResults from "./searchResults";
const Pagination = ({ itemsPerPage, results, startPage }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [currentNext, setCurrentNext] = useState(1)
    const [currentPrev, setCurrentPrev] = useState(0)
    const [currentPage, setCurrentPage] = useState(startPage)

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = results.hits.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(results.hits.length / itemsPerPage);
    useEffect(()=>{
        const updateOffSet = (currentPage * itemsPerPage) % results.hits.length;
        setItemOffset(updateOffSet)
    },[currentPage])

    const clickNext = () =>{
        if(currentNext !== pageCount){
            setCurrentNext(currentNext + 1)
            setCurrentPrev(currentPrev + 1)
            const page = currentPage + 1;
            setCurrentPage(page)
        }
    }
    const clickPrev = () =>{
        if(currentPrev > 0){
            setCurrentPrev(currentPrev - 1)
            setCurrentNext(currentNext - 1)
            const page = currentPage - 1;
            setCurrentPage(page)
        }

    }

    return (
        <>
            <SearchResults results={currentItems} />
            <input type="submit"
                     value="Prev"
                     onClick={event => clickPrev(event)}/>
            <input type="submit"
                   value="Next"
                   onClick={clickNext}/>
        </>
    );
}

export default Pagination;
