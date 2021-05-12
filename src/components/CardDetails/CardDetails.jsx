import React from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom';

const CardDetails = ({ className, match }) => {
    const location = useLocation()
    const tiledata = location.tiledata;

    return (
        <div className={className}>
            <div className={'app-search-card-details-image-section'}>
                <Link className={'app-search-home-link'} to={{ pathname: '/' }}>{'>Back to Home'}</Link>
                <img className={'app-search-card-detail-image'} src={tiledata.href} alt={'nasa-images'} />
            </div>
            <div className={'app-search-card-details'}>
                <h3>DETAILS</h3>
                <span> <b>TITLE: </b> {tiledata.data.title}</span>
                <span> <b>NASA ID: </b> {tiledata.data.nasa_id}</span>
                <span><b> CENTER: </b> {tiledata.data.center}</span>
                <span><b> DESCRIPTION: </b> {tiledata.data.description}</span>
                <span><b> DATE CREATED: </b> {tiledata.data.date_created}</span>
                <span><b> SECONDARY CREATOR: </b> {tiledata.data.secondary_creator}</span>
                <span><b> MEDIA TYPE: </b> {tiledata.data.media_type}</span>

            </div>
        </div>
    );
}

const StyledCardDetails = styled(CardDetails) `
    background-color: #26282f;
    display: flex;
    color: white;
    .app-search-card-details-image-section{
        margin-top:40px;
        display :grid;

    }
    .app-search-card-detail-image{
        width:100%;
        height:calc(100vh - 100px);
    }
    .app-search-card-details {
        display:grid;
        margin-top:80px;
        margin-left: 80px;
    }

    .app-search-home-link{
        color: white;
        margin-bottom: 20px;
        margin-left :20px;
    }

`;

export default StyledCardDetails;