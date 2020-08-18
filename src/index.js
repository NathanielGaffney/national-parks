import $ from 'jquery';
import './index.css';

const apiKey = 'h4mQBecBcVauL39fZOdXoRybbmy07A9eCMq2nsCP';

function getStates(){
 return 'SC';
}

function getMaxResults(){
    return '10';
}

function formatUrl(){
    return `https://developer.nps.gov/api/v1/parks?stateCode=${getStates()}&limit=${getMaxResults()}&api_key=${apiKey}`
}

function results(){
    fetch (`${formatUrl()}`)
        .then (response => response.json())
        .then (responseJson => responseJson.data)
        .then (data => {
        $("#park-results").html(`<h3>${data[0].name}</h3>`);
    });
    
}

function displayResults(){
    $('form').submit(e => {
        e.preventDefault();
        results();
        //$("#park-results").append(results());
    });
}

$(displayResults());