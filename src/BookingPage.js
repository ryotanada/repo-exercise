import './App.css';
import React from "react";
import BookingForm from "./BookingForm";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const BookingPage = (props) => {
    return(
        <>
            <Header>

            </Header>
            <Nav>

            </Nav>
            <BookingForm availableTimes={props.availableTimes} dispatchOnChange={props.dispatchOnChange} handleDate={props.handleDate} />
            <Footer>

            </Footer>
        </>
        
    );
};

export default BookingPage;