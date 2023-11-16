import React from "react";
import '../styles/App.css';

const SearchResults = ({results}) => {

    return (
        <div className={"Results-list"} >
            {results.map((host)=>(
                <ul key={host.ip}>{host.ip} - {host.services.length} Protocols</ul>
            ))}
        </div>
    );

}

export default SearchResults;

