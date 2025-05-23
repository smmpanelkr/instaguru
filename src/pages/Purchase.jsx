import React from 'react';
import Header from '../components/Header';
import PurchaseForm from '../components/ui/PurchaseForm';
const Purchase = () => {
    return (
        <div>
            <Header />
            <div className="mt-20"></div>
            <PurchaseForm/>
        </div>
    );
}

export default Purchase;
