import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// कस्टम बटन कंपोनेंट, जो `forwardRef` का उपयोग करके ref को फॉरवर्ड करता है
const CustomButton = forwardRef((props, ref) => {
    const inpRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inpRef.current.focus();
        },
        click: () => {
            inpRef.current.disabled = false;
        },
    }));

    return <input ref={inpRef}  disabled/>
});

// Main Component where CustomButton is used
const UseImperativeHandlefu = () => {
    const buttonRef = useRef();

    return (
        <div>
            <CustomButton ref={buttonRef} />
            <button onClick={() => buttonRef.current.focus()}>Focus the Button</button>
            <button onClick={() => buttonRef.current.click()}>Click the Button</button>
        </div>
    );
}

export default UseImperativeHandlefu;
