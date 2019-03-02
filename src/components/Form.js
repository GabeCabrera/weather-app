import React from "react";

const Form = props => (
  <div className="form-container">
    <form onSubmit={props.getWeather}>
    <input type="text" name="city" className="question" id="city" required autoComplete="off"/>
    <label htmlFor="city"><span>City</span></label>
    
    <input type="text" name="country" className="question" id="country" required autoComplete="off"/>
    <label htmlFor="name"><span>Country</span></label>
    <input type="submit" value="Submit"/>
    </form>
  </div>
);

export default Form;
