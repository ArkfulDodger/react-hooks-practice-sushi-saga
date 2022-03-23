import React, { useState } from "react";

function SushiWallet ({ setBudget }) {
    // State and Variable Declaration
    const [formData, setFormData] = useState(0);

    // Reset formData to default values
    const resetForm = () => setFormData(0);

    // Handles form onSubmit event
    const handleSubmit = (e) => {
        e.preventDefault();

        setBudget(budget => budget + parseInt(formData));

        resetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={formData} onChange={(e) => setFormData(e.target.value)}></input>
            <button type="submit">Add Money to Wallet</button>
        </form>
    );
}

export default SushiWallet;