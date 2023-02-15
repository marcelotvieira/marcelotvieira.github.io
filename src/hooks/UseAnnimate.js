import { useState } from "react";

const UseAnimate = () => {

    const [location, setLocation] = useState('/');
    const [visibleContent, setVisibleContent] = useState('/');


    const handleNavigate = ({ target: { name }}) => {
        setVisibleContent(name);
        setTimeout(() => {
            setLocation(name);
        }, 400);
    }

    return {
        location,
        handleNavigate,
        visibleContent,
        setVisibleContent,
    }
}

export default UseAnimate;