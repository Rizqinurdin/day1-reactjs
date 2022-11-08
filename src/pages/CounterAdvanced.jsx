    import React, { useState } from "react";
    import propTypes from "prop-types";

    const CounterAdvanced = ({ intialValue }) => {
    let [count, setCount] = useState(intialValue);

    const handleApp = () => {
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
    };

    const minusApp = () => {
        setCount((currentCount) => currentCount - 1);
    };

    return (
        <>
        <div>Rizqinurdin</div>
        <h1>{count}</h1>
        <button onClick={handleApp}>Click</button>
        <button onClick={minusApp}>Click</button>
        </>
    );
    };

    CounterAdvanced.propTypes = {
    intialValue: propTypes.number,
    };

    export default CounterAdvanced;
