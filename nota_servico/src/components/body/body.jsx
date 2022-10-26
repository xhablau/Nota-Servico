import React from 'react';
import '../../css/body.css';
import CurrentActions from './currentActions';
import CurrentValue from './currentValue';
import Description from './description';

const Body = () => {
    return (
        <div id='body'>
            <Description/>
            <div id='currentView'>
                <CurrentValue/>
                <CurrentActions/>
            </div>
        </div>
    );
}

export default Body;