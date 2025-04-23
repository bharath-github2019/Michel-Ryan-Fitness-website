import React, { useState } from 'react';
import Button from '../components/ui/Button';

// Mock data - in a real application, this would come from a backend
const mockPurchases = [
  { 
    id: 'INV-2023-001', 
    date: '2023-12-15', 
    plan: 'Labrador', 
    amount: 49.00, 
    status: 'Active' 
  },
  { 
    id: 'INV-2023-002', 
    date: '2023-11-15', 
    plan: 'Labrador', 
    amount: 49.00, 
    status: 'Active' 
  },
  { 
    id: 'INV-2023-003', 
    date: '2023-10-15', 
    plan: 'Labrador', 
    amount: 49.00, 
    status: 'Active' 
  },
  { 
    id: 'INV-2023-004', 
    date: '2023-09-15', 
    plan: 'Chihuahua', 
    amount: 30.00, 
    status: 'Completed' 
  },
];

const PurchaseHistoryPage: React.FC = () => {
  const [purchases] = useState(mockPurchases);
  
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Your Purchase History</h1>
          
          {purchases.length > 0 ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Invoice</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Plan</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Amount</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {purchases.map((purchase) => (
                      <tr key={purchase.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-800">{purchase.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{purchase.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">{purchase.plan}</td>
                        <td className="px-6 py-4 text-sm text-gray-800">${purchase.amount.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            purchase.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {purchase.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800">
                          <button className="text-blue-600 hover:text-blue-800">
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold mb-4">No purchase history yet</h2>
              <p className="text-gray-600 mb-6">
                You haven't made any purchases yet. Check out our pricing plans to get started!
              </p>
              <Button href="/#pricing" variant="primary">
                View Pricing Plans
              </Button>
            </div>
          )}
          
          <div className="mt-8">
            <Button href="/" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryPage;