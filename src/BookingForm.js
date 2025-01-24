import React from "react";
import { useState } from "react";
import {submitAPI} from "./api.js";
import { ToastContainer, toast } from 'react-toastify';

function BookingForm(props) {
    const [formData, setFormData] = useState(
        {
            resDate: null,
            resTime: "",
            guests: 1,
            occasion: "",
            email: ""
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
        let notify = () => toast("Reservation success! See you there!");
        if (submitAPI(event)){
            notify();
            setFormData(
                {
                    resDate: null,
                    resTime: "",
                    guests: 1,
                    occasion: "",
                    email: ""
                }
            );
        }
        else{
            notify = () => toast("Reservation failed! Don't worry, it's not your fault.");
            notify();
        }
        
    }

    const nextMinimumDate = () => {
        let today = new Date();
        today.setDate(today.getDate() + 1)
        return today.toISOString().split('T')[0];
    }

    const availableTimes = props.availableTimes();
    const dispatchOnChange = props.dispatchOnChange;

    return(
        <div className ="main">
            <form onSubmit={handleSubmit}>
                <label htmlFor="resDate">Choose date</label>
                <input name="resDate" id="resDate" type="date" value={formData.resDate} onChange={handleFormDataChange} min={nextMinimumDate()} required/>
                <label htmlFor="resTime">Choose time</label>
                <select name="resTime" id="resTime" value={formData.resTime} onChange={handleFormDataChange}>
                    {availableTimes.map((time) => <option value={time}>{time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input name="guests" id="guests" type="number" placeholder="1" min="1" max="10" value={formData.guests} onChange={handleFormDataChange} required/>
                <label htmlFor="occasion">Occasion</label>
                <select name="occasion" id="occasion" value={formData.occasion} onChange={handleFormDataChange}>
                    <option value="Bithday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <label htmlFor="email">Contact Email</label>
                <input name="email" id="email" type="email" value={formData.email} onChange={handleFormDataChange} required/>
                <input type="submit" value="Make Your reservation" className="submit"/>
                <ToastContainer position="bottom-center" />
            </form>
        </div>
    );
}
export default BookingForm;