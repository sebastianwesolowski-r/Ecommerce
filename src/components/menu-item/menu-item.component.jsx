import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, history, match, linkUrl}) => (
    <div className="menu-item" style={{backgroundImage: `url(${imageUrl})`}} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="panel">
            <div className="company-name">Clothing Company {title}</div>
            <div className="btn">SHOP NOW</div>
        </div>
    </div>
);

export default withRouter(MenuItem);