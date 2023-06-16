import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [forminputvalididty, setForminputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredNameisValid = !isEmpty(enteredName);
    const enteredStreetisValid = !isEmpty(enteredStreet);
    const enteredCityisValid = !isEmpty(enteredCity);
    const enteredPostalisValid = !isFiveChars(enteredPostalCode);

    setForminputValidity({
      name: enteredNameisValid,
      street: enteredStreetisValid,
      city: enteredCityisValid,
      postalCode: enteredPostalisValid,
    });
    const formisValid =
      enteredNameisValid &&
      enteredStreetisValid &&
      enteredCityisValid &&
      enteredPostalisValid;
    if (!formisValid) {
      return;
    }
    //Submit the cart data
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };
  const nameControlClasses = `${classes.control}
  ${forminputvalididty.name ? "" : classes.invalid}`;
  const streetcontrollclass = `${classes.control}
  ${forminputvalididty.street ? "" : classes.invalid}`;

  const postalcontrollclass = `${classes.control}
  ${forminputvalididty.postalCode ? "" : classes.invalid}`;
  const citycontrollclass = `${classes.control}
  ${forminputvalididty.city ? "" : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!forminputvalididty.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetcontrollclass}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!forminputvalididty.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalcontrollclass}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
        {!forminputvalididty.postalCode && (
          <p>Please enter a valid postalcode(5 characters long)</p>
        )}
      </div>
      <div className={citycontrollclass}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!forminputvalididty.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
