import { useState } from "react"

const UsePortfolio = () => {

    const [currTab, setCurrTab] = useState('');

    const handleFilter = ({ target: {value} }) => setCurrTab(value);

    return {
        currTab,
        handleFilter
    }
}

export default UsePortfolio;