import React, {Component} from 'react';
import './Quote.css';


export default class Quote extends Component {
    render() {
        return (
            <div className="quote">
                <div className="quote__card">
                    <span className="quote__text">You can’t use up creativity. The more you use, the more you have.
</span>
                    <span className="quote__autor">Maya Angelou</span>
                </div>
                <button className='btn btn_light'>Add to Diary</button>
            </div>
        )
    }
}