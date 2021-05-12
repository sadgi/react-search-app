import React from 'react';
import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { useSearchState } from '../../context/SearchContext'
import Tooltip from '@material-ui/core/Tooltip';
import Card from '../Card';

const SearchResult = ({ className }) => {
    const { state } = useSearchState();
    const { images } = state;

    return (
        <div className={className}>
            <GridList cellHeight={160} className={'grid'} cols={3}>
                {images.map((tile, index) => (
                    <Tooltip key={index} title={<Card tiledata={tile} />} placement="right" leaveDelay={200} interactive>
                        <GridListTile key={index} cols={tile.cols || 1} >
                            <img src={tile.href} alt={'nasa-images'} />
                            <GridListTileBar
                                title={tile.data.title}
                                subtitle={<span>Description: {tile.data.description}</span>}
                            />
                        </GridListTile>
                    </Tooltip>
                ))}
            </GridList>
        </div>
    );
};

const StyledSearchResult = styled(SearchResult) `
    .search-result-card{
        width:300px;
        height:150px;
        background-color:blue;
        z-index:2;
        position:absolute;
    }
`;

export default StyledSearchResult;