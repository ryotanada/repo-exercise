import React from "react";
import { useState } from "react";
import {submitAPI} from "./api.js";

function BookingForm(props) {
    const [formData, setFormData] = useState(
        {
            resDate: null,
            resTime: "",
            guests: 1,
            occasion: "",
        }
    );

    const handleFormDataChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        if (name === "resDate") {
            props.handleDate(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(submitAPI(event));
    }

    const availableTimes = props.availableTimes();
    const dispatchOnChange = props.dispatchOnChange;

    return(
        <div className ="main">
            <form onSubmit={handleSubmit}>
                <label htmlFor="resDate">Choose date</label>
                <input name="resDate" id="resDate" type="date" value={formData.resDate} onChange={handleFormDataChange}/>
                <label htmlFor="resTime">Choose time</label>
                <select name="resTime" id="resTime" value={formData.resTime} onChange={handleFormDataChange}>
                    {availableTimes.map((time) => <option value={time}>{time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input name="guests" id="guests" type="number" placeholder="1" min="1" max="10" value={formData.guests} onChange={handleFormDataChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select name="occasion" id="occasion" value={formData.occasion} onChange={handleFormDataChange}>
                    <option value="Bithday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
        </div>
    );
}

export default BookingForm;