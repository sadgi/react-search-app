import React from 'react';
import styled from 'styled-components';
import Search from '../Search';
import { SearchStateProvider } from '../../context/SearchContext'


const App = ({ className }) => {

    return (
        <div className={className} data-testid={'search-app'} >
            <SearchStateProvider>
                <Search data-testid={'search-comp'} />
                <h1 data-testid={'search-header'} className={"search-header"}>{"Welcome to Search Application"} </h1>
            </SearchStateProvider>
        </div>
    );
}

const styledApp = styled(App) `
    background-color: black;
    height:calc(100vh - 50px);
    width:100%;
    display : grid;
    justify-content:center;
    padding-top:50px;

    .search-header{
        margin-top :-100px;
        color: #fff;
    }

`;

export default styledApp;