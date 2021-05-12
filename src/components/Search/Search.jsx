import React, { useState } from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { useSearchState } from '../../context/SearchContext'
import SearchResult from '../SearchResult';
import LoadingIndicator from '../LoadingIndicator';
import logo from '../../images/nasa_logo.png'

const Search = ({ className }) => {
    const { dispatch } = useSearchState();
    const [searchValue, setSearchValue] = useState("");
    const { state } = useSearchState();

    const { errorMessage, loading } = state;
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        search(searchValue);
        resetInputField();
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            callSearchFunction(e);
        }
    }

    const search = searchValue => {
        dispatch({
            type: "SEARCH_IMAGES_REQUEST"
        });

        fetch(`https://images-api.nasa.gov/search?q=${searchValue}&media_type=image`)
            .then(response => response.json())
            .then(jsonResponse => {
                let itemsArray = jsonResponse.collection.items;
                let images = [];
                if (jsonResponse) {
                    // eslint-disable-next-line array-callback-return
                    itemsArray.map((item) => {
                        const imageObject = {};
                        // eslint-disable-next-line array-callback-return
                        item.data.map((data) => {
                            imageObject.data = data;
                        });
                        // eslint-disable-next-line array-callback-return
                        item.links.map((link) => {
                            imageObject.href = link.href;
                        });
                        images.push(imageObject);
                    });
                    dispatch({
                        type: "SEARCH_IMAGES_SUCCESS",
                        payload: images
                    });
                } else {
                    dispatch({
                        type: "SEARCH_IMAGES_FAILURE",
                        error: jsonResponse.error
                    });
                }
            });
    };


    const inputIcon = (
        <InputAdornment className={'search-input-adornment'} position='end' >
            <SearchIcon onClick={callSearchFunction} />
        </InputAdornment>
    )

    return (
        <div className={className}>
            <div className={'search-section'}>
                <Input
                    className={'search-input'}
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    onChange={handleSearchInputChanges}
                    onKeyDown={handleKeyDown}
                    placeholder='Search'
                    disableUnderline={true}
                    endAdornment={inputIcon}
                />
                <img className={'logo-image'} src={logo} alt={'nasa-logo'} />
            </div>
            {loading && !errorMessage ? (
                <LoadingIndicator className={'loading-indicator'} />
            ) : errorMessage ? (
                <div className="errorMessage">{errorMessage}</div>
            ) : <SearchResult />}
        </div>
    );
};

const StyledSearch = styled(Search) `
    background-color: black;

    .search-section{
        display : flex;
        justify-content: center;
    }

    .logo-image{
        margin-top :10px;
        margin-bottom:40px;
        margin-left:40px;
        width: 100px;
        height:100px;
    }

    .loading-indicator{
        margin-top :40px;
        margin-bottom:40px;
        display: inline-block;
        vertical-align: middle;
    }

    .MuiSvgIcon-root {
        fill:white;
        background-color: #15418c;
        height:40px;
        width:40px;
    }

    .search-input {
        margin-top :40px;
        margin-bottom:40px;
        background-color: #1c1f26;
        color: #fff;
        border-radius: 0;
        width: 400px;
        height:40px;
        border: 2px solid #15418c;
    }
`;

export default StyledSearch;