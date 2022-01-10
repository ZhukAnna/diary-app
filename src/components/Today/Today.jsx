import React, { useEffect, useState } from 'react';
import './Today.css';

const Today = () => {

    const [date, setDate] = useState(new Date());
    const getDate = (options) => {
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    const time = getDate({hour: 'numeric', minute: 'numeric', hour12: false});
    const weekday = getDate({weekday:'long'});  
    const day = getDate({day: 'numeric'});
    const month = getDate({month:'short'});

    useEffect( () => {
        const interval = setInterval(
          () => current(),
          10000
        );

        return () => {
            clearInterval(interval);
          }

        function current() {
            setDate(new Date());

        }
        });

        return <div className='current'>
                    <div className="current__row">
                        <span className='current__date'>{day}</span>
                        <span className='current__month'>{month}</span>        
                    </div>
                    <div className="current__row">
                        <span className='current__day'>{weekday}</span>
                        <span className='current__time'>{time}</span>
                    </div>
                </div>
}

export default Today;