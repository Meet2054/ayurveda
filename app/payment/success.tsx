'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const PaymentSuccess: React.FC = () => {
    const router = useRouter();
    const transactionId = "123456789"; // Replace with dynamic data from your payment processing logic

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-green-600 mb-4 text-center">Payment Successful</h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Your payment has been processed successfully!
                </p>
                <p className="text-center text-gray-500">Transaction ID:</p>
                <p className="text-center text-lg font-bold text-gray-900">{transactionId}</p>

                <button
                    onClick={() => router.push('/')} // Redirect to homepage
                    className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
