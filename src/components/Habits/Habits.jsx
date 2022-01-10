import React, {Component} from 'react';
import './Habits.css';


export default class Habits extends Component {
    render() {
        return (
            <div className="habits">

                <label class="input__label input__label_cbx form__checkbox-wrapper" for="input-checkbox">
                    <input type="checkbox" class="visually-hidden" id="input-checkbox" />
                    <div class="input input_type_checkbox">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <polyline points="3.4,7.8 6.6,11.0 12.7,5.2"></polyline>
                        </svg>
                    </div>
                    <span>Sleep 8 hours</span>
                </label>
                <label class="input__label input__label_cbx form__checkbox-wrapper" for="input-checkbox">
                    <input type="checkbox" class="visually-hidden" id="input-checkbox" checked/>
                    <div class="input input_type_checkbox">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <polyline points="3.4,7.8 6.6,11.0 12.7,5.2"></polyline>
                        </svg>
                    </div>
                    <span>No coffee</span>
                </label>
                <label class="input__label input__label_cbx form__checkbox-wrapper" for="input-checkbox">
                    <input type="checkbox" class="visually-hidden" id="input-checkbox"  checked/>
                    <div class="input input_type_checkbox">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <polyline points="3.4,7.8 6.6,11.0 12.7,5.2"></polyline>
                        </svg>
                    </div>
                    <span>Vitamins</span>
                </label>
                <label class="input__label input__label_cbx form__checkbox-wrapper" for="input-checkbox">
                    <input type="checkbox" class="visually-hidden" id="input-checkbox" />
                    <div class="input input_type_checkbox">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <polyline points="3.4,7.8 6.6,11.0 12.7,5.2"></polyline>
                        </svg>
                    </div>
                    <span>Blog post</span>
                </label>
                <label class="input__label input__label_cbx form__checkbox-wrapper" for="input-checkbox">
                    <input type="checkbox" class="visually-hidden" id="input-checkbox"  checked/>
                    <div class="input input_type_checkbox">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <polyline points="3.4,7.8 6.6,11.0 12.7,5.2"></polyline>
                        </svg>
                    </div>
                    <span>Exercise</span>
                </label>
                <label class="input__label input__label_cbx form__checkbox-wrapper" for="input-checkbox">
                    <input type="checkbox" class="visually-hidden" id="input-checkbox" />
                    <div class="input input_type_checkbox">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <polyline points="3.4,7.8 6.6,11.0 12.7,5.2"></polyline>
                        </svg>
                    </div>
                    <span>10000 steps</span>
                </label>
                <label class="input__label input__label_cbx form__checkbox-wrapper" for="input-checkbox">
                    <input type="checkbox" class="visually-hidden" id="input-checkbox" />
                    <div class="input input_type_checkbox">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <polyline points="3.4,7.8 6.6,11.0 12.7,5.2"></polyline>
                        </svg>
                    </div>
                    <span>Reading 20 mins</span>
                </label>
            </div> 
        )
    }
}