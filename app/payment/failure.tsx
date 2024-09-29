'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const PaymentFailure: React.FC = () => {
    const router = useRouter();
    const transactionId = "987654321"; // Replace with dynamic data from your payment processing logic

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">Payment Failed</h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Unfortunately, your payment could not be processed.
                </p>
                <p className="text-center text-gray-500">Transaction ID:</p>
                <p className="text-center text-lg font-bold text-gray-900">{transactionId}</p>

                <button
                    onClick={() => router.push('/payment/retry')} // Redirect to retry the payment
                    className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default PaymentFailure;
