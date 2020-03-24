import * as React from 'react';

import {useState, useEffect} from 'react';

const UseEffectWithMouseEvent =()=>{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const detectMouseMovement=(evt)=>{
        console.log('Mouse Move');
        setX(evt.clientX);
        setY(evt.clientY);
    };

    // use effect wiil contineously track the movement
    // to remove the movement we need to detach the event listener
    useEffect(()=>{
        console.log('Mouse Move Event in Effect called');
        window.addEventListener('mousemove', detectMouseMovement);
        // cleanup
        return ()=>{
            console.log('UnMount the event');
        window.removeEventListener('mousemove', detectMouseMovement);

        }
    },[]);

    return (
        <div className="container">
          Use Effect X -- {x} && Y -- {y}
        </div>
    )
};

export default  UseEffectWithMouseEvent;