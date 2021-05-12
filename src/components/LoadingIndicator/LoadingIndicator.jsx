import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';


const LoadingIndicator = ({ className }) => {

    return (
        <div className={className}>
            <CircularProgress size={100} />
        </div >
    );
};

const styledLoadingIndicator = styled(LoadingIndicator) `

`;

export default styledLoadingIndicator;