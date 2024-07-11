import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { TokenContext } from '../TokenContext';
import './styles.css';

const Page3 = () => {
    const { clickTokens, setClickTokens, scrollTokens, setScrollTokens } = useContext(TokenContext);  // Added setClickTokens and setScrollTokens
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
        <div className="container mt-4">
            <div className="d-flex justify-content-around mb-4">
                <div className="card p-3 text-center">
                    <h5>Click Tokens</h5>
                    <p className="display-4">{clickTokens} ({clickTokensValue} INR)</p>
                </div>
                <div className="card p-3 text-center">
                    <h5>Scroll Tokens</h5>
                    <p className="display-4">{scrollTokens} ({scrollTokensValue} INR)</p>
                </div>
                <div className="card p-3 text-center">
                    <h5>Total Rupees</h5>
                    <p className="display-4">{totalMoney} INR</p>
                </div>
            </div>
            <div id="content">
                <button className="btn btn-success mb-4" onClick={handleWithdrawINR}>Withdraw in INR</button>
                <button className="btn btn-info mb-4" onClick={handleWithdrawStocks}>Withdraw in Stocks</button>
                <button className="btn btn-warning mb-4" onClick={handleAddMoney}>Add Money to Wallet</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Token Type</th>
                            <th>Conversion Rate (INR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Click Token</td>
                            <td>{clickTokenRate}</td>
                        </tr>
                        <tr>
                            <td>Scroll Token</td>
                            <td>{scrollTokenRate}</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </div>
    );
};

export default Page3;
