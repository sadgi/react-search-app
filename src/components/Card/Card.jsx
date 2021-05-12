import React from 'react';
import styled from 'styled-components';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';

const CardComponent = ({ className, tiledata }) => {
    return (
        <div className={className}>
            {tiledata && (<Card className={'search-result-card'}>
                <CardActionArea>
                    <CardMedia
                        className={'app-search-card-media'}
                        image={tiledata.href}
                        title={tiledata.data.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <b>Title:</b> {tiledata.data.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            <b>Description:</b> {tiledata.data.description}
                        </Typography>
                        <Link to={{ pathname: '/details/' + tiledata.data.nasa_id, tiledata: tiledata }}>{'Link for more details'}</Link>
                    </CardContent>
                </CardActionArea>
            </Card>
            )}
        </div>
    );
}

const StyledCard = styled(CardComponent) `
    .search-result-card{
        width:300px;
        height:300px;
        overflow:scroll;
        z-index:2;
    }
    .app-search-card-media{
        height:100px;
        width:300px;
    }
`;

export default StyledCard;