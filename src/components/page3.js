import React, { useState, useEffect } from 'react';
import './styles.css';

const Page3 = () => {
    const [clickTokens, setClickTokens] = useState(50); // Example initial value
    const [scrollTokens, setScrollTokens] = useState(100); // Example initial value
    const [manuallyAddedMoney, setManuallyAddedMoney] = useState(0);
    const [clickTokenRate, setClickTokenRate] = useState(0.1);
    const [scrollTokenRate, setScrollTokenRate] = useState(0.01);

    useEffect(() => {
        const updateExchangeRates = () => {
            setClickTokenRate((Math.random() * 0.4 + 0.1).toFixed(2));
            setScrollTokenRate((Math.random() * 0.04 + 0.01).toFixed(2));
        };
        updateExchangeRates();
        const interval = setInterval(updateExchangeRates, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleWithdrawINR = () => {
        alert(`Withdrawing ${totalMoney} INR`);
        setClickTokens(0);
        setScrollTokens(0);
        setManuallyAddedMoney(0);
    };

    const handleWithdrawStocks = () => {
        alert(`Withdrawing ${clickTokens + scrollTokens} tokens worth of stocks`);
        setClickTokens(0);
        setScrollTokens(0);
        setManuallyAddedMoney(0);
    };

    const handleAddMoney = () => {
        const moneyToAdd = parseFloat(prompt('Enter amount to add to wallet:', '0'));
        if (!isNaN(moneyToAdd) && moneyToAdd > 0) {
            setManuallyAddedMoney(manuallyAddedMoney + moneyToAdd);
        } else {
            alert('Invalid amount');
        }
    };

    const clickTokensValue = (clickTokens * clickTokenRate).toFixed(2);
    const scrollTokensValue = (scrollTokens * scrollTokenRate).toFixed(2);
    const totalMoney = (parseFloat(clickTokensValue) + parseFloat(scrollTokensValue) + manuallyAddedMoney).toFixed(2);

    return (
        <div>
            <div id="token-exchange">
                <div id="click-tokens">Click Tokens: {clickTokens} ({clickTokensValue} INR)</div>
                <div id="scroll-tokens">Scroll Tokens: {scrollTokens} ({scrollTokensValue} INR)</div>
                <div id="total-rupees">Total Rupees: {totalMoney} INR</div>
                <button id="withdraw-inr-button" onClick={handleWithdrawINR}>Withdraw in INR</button>
                <button id="withdraw-stocks-button" onClick={handleWithdrawStocks}>Withdraw in Stocks</button>
                <button id="add-money-button" onClick={handleAddMoney}>Add Money to Wallet</button>
                <table id="conversion-rates">
                    <thead>
                        <tr>
                            <th>Token Type</th>
                            <th>Conversion Rate (INR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Click Token</td>
                            <td id="click-token-rate">{clickTokenRate}</td>
                        </tr>
                        <tr>
                            <td>Scroll Token</td>
                            <td id="scroll-token-rate">{scrollTokenRate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page3;
