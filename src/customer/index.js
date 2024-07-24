import React from 'react';
import './index.css'

const CustomerTable = () => {
   
    const customers = [
        { name: 'Bella', product: 'Dress', quantity: 3, amount: 10000, totalAmount: 30000 },
        { name: 'Tom', product: 'Shirt', quantity: 4, amount: 8000, totalAmount: 36000 },
        { name: 'Ivy', product: 'Top', quantity: 2, amount: 5000, totalAmount: 25000 },
    ];

    return (
        <div>
            <h2>Customer Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.product}</td>
                            <td>{customer.quantity}</td>
                            <td>KES {customer.amount}</td>
                            <td>KES {customer.totalAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;