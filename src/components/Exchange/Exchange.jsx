import React, {Component} from 'react';
import './Exchange.css';

const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;

export default class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EUR: 0,
            CAD: 0,
            RUB: 0,
            AUD: 0
        };
    }

    componentDidMount() {
        this.getRates();
    }

    getRates = async () => {
        fetch(`https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
                this.setState({
                    EUR: data.rates.EUR,
                    CAD: data.rates.CAD,
                    RUB: data.rates.RUB,
                    AUD: data.rates.AUD,
                });
            })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }  

    render({EUR, CAD, RUB, AUD} = this.state) {
        return (
            <div className="exchange">
                <div className="exchange_item">
                    <span className="exchange__currency">EUR</span>
                    <span className="exchange__rate">{EUR}</span>
                </div>
                <div className="exchange_item">
                    <span className="exchange__currency">RUB</span>
                    <span className="exchange__rate">{RUB}</span>
                </div>
                <div className="exchange_item">
                    <span className="exchange__currency">CAD</span>
                    <span className="exchange__rate">{CAD}</span>
                </div>
                <div className="exchange_item">
                    <span className="exchange__currency">AUD</span>
                    <span className="exchange__rate">{AUD}</span>
                </div>
            </div>
        )
    }
}