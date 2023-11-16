import React from "react";
import {useEffect, useState} from 'react';
import Pagination from "./pagination";

const SearchForm = () => {
    const [searchText, setSearchText] = useState("");
    const [resultsFromSearch, setResultsFromSearch] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [searchStringCompleted, setSearchStringCompleted] = useState("");

    useEffect(() => {
        if (searchStringCompleted) {
            var myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");
            myHeaders.append("Authorization", "Basic MDZmMjVjY2YtNGM2MS00OWRmLTk0ODktOWY4NWUyZWNiYjRmOklxNWYxRm1rbk42ZE1STUhTNkxkZlRueHN0OFVoZmNz");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            fetch(`https://search.censys.io/api/v2/hosts/search?q=${searchStringCompleted}&service.service_name: HTTP`, requestOptions)
                .then(results => results.json())
                .then(data => {
                    setResultsFromSearch(data.result);
                })
        }
    }, [searchStringCompleted]);

    const handleClick = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setShowResults(false);

        if(searchText!==""){
            setShowResults(true);
            setSearchStringCompleted(searchText)
        }
        return false

    };
    const onChange = (event) => {
        if(event.target.value !== undefined && event.target.value !== null){
            setSearchText(event.target.value)
        }

    };
    return (
        <>
            <form name={"hostSearchForm"} onSubmit={handleClick}>
                <label>
                    Host:
                    <input  type="text"
                            onChange={onChange}
                           value={searchText}/>
                </label>
                <input type="submit"
                       value="Submit"
                       onClick={handleClick}
                />
            </form>
            {showResults && resultsFromSearch.total>0 ? <p> {resultsFromSearch.total} Results for {resultsFromSearch.query}</p> : null}
            {showResults && resultsFromSearch.total>0 ? <Pagination itemsPerPage={10} results={resultsFromSearch} startPage={0} /> : null}
        </>
    );

}
export default SearchForm;
