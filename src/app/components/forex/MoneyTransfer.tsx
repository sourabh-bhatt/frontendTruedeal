"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, X } from 'lucide-react';
import { indianStates, transferCountries, currencyRates } from '@/app/types/forex';
import { safeWindowOpen } from '@/utils/safe-window';

interface TransferFormData {
  city: string;
  fromCountry: string;
  toCountry: string;
  receivingCurrency: string;
  receivingAmount: string;
  sendingAmount: string;
}

interface MoneyTransferProps {
  onClose: () => void;
}

const MoneyTransfer: React.FC<MoneyTransferProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<TransferFormData>({
    city: '',
    fromCountry: 'India',
    toCountry: '',
    receivingCurrency: '',
    receivingAmount: '',
    sendingAmount: '',
  });

  const handleReceivingAmountChange = (amount: string) => {
    const currency = currencyRates.find(c => c.code === formData.receivingCurrency);
    if (currency && amount) {
      const inrAmount = (parseFloat(amount) * currency.sellRate).toFixed(2);
      setFormData(prev => ({ ...prev, receivingAmount: amount, sendingAmount: inrAmount }));
    } else {
      setFormData(prev => ({ ...prev, receivingAmount: amount, sendingAmount: '' }));
    }
  };

  const handleBookOrder = () => {
    const message = `
Hello! I would like to make a money transfer:
City: ${formData.city}
From: ${formData.fromCountry}
To: ${formData.toCountry}
Receiving Currency: ${formData.receivingCurrency}
Receiving Amount: ${formData.receivingAmount} ${formData.receivingCurrency}
Sending Amount: ₹${formData.sendingAmount}
Rate: ${currencyRates.find(c => c.code === formData.receivingCurrency)?.sellRate}
    `;

    // const whatsappUrl = `https://wa.me/918447498498?text=${encodeURIComponent(message)}`;
    // window.open(whatsappUrl, '_blank');

    const whatsappUrl = `https://wa.me/918447498498?text=${encodeURIComponent(message)}`;
    safeWindowOpen(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg modal-content relative">
      <div className="flex justify-end -mt-2 -mr-2">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="space-y-6 -mt-2">
        {/* City Selection */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select City</label>
          <div className="relative">
            <select
              className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#017ae3]"
              value={formData.city}
              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
            >
              <option value="">Select your city</option>
              {indianStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          {!formData.city && (
            <p className="text-red-500 text-xs mt-1">This field is required.</p>
          )}
        </div>

        {/* Transfer From/To */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">TRANSFER FROM</label>
            <div className="p-3 border border-gray-300 rounded-lg flex items-center">
              <Image src="/Assets/Forex/currency/2.webp" alt="India Flag" width={24} height={24} className="mr-2" />
              <span>India</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">TRANSFER TO</label>
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.toCountry}
                onChange={(e) => setFormData(prev => ({ ...prev, toCountry: e.target.value }))}
              >
                <option value="">Select country</option>
                {transferCountries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Amount Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">RECEIVING AMOUNT</label>
            <div className="relative">
              <select
                className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-l-lg px-3 appearance-none cursor-pointer hover:opacity-95 transition-opacity [&>option]:bg-[#017ae3]"
                value={formData.receivingCurrency}
                onChange={(e) => setFormData(prev => ({ ...prev, receivingCurrency: e.target.value }))}
                style={{
                  background: 'linear-gradient(to right, #017ae3, #00f6ff)',
                }}
              >
                <option value="" className="bg-[#017ae3]">Select</option>
                {currencyRates.map(currency => (
                  <option
                    key={currency.code}
                    value={currency.code}
                    className="bg-[#017ae3] hover:bg-[#00f6ff]"
                  >
                    {currency.code}
                  </option>
                ))}
              </select>
              <div className="absolute left-24 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-white" />
              </div>
              <input
                type="number"
                className="w-full pl-36 pr-24 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#017ae3]"
                placeholder="Enter amount"
                value={formData.receivingAmount}
                onChange={(e) => handleReceivingAmountChange(e.target.value)}
              />
              {formData.receivingCurrency && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                  Rate = ₹{currencyRates.find(c => c.code === formData.receivingCurrency)?.sellRate}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SENDING AMOUNT</label>
            <div className="relative">
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-l-lg px-3 flex items-center justify-center font-medium">
                INR
              </div>
              <input
                type="text"
                className="w-full pl-36 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                value={formData.sendingAmount ? `₹${formData.sendingAmount}` : ''}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between items-center py-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="font-medium">Total Amount</span>
          </div>
          <div className="text-xl font-bold text-[#017ae3]">₹{formData.sendingAmount || '0.00'}</div>
        </div>

        {/* Processing Time Notice */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#017ae3]/10 to-[#00f6ff]/10 p-4 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#017ae3] to-[#00f6ff] flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm text-gray-600">
            Remittance orders are usually processed within 48 working hours of placing the order
          </p>
        </div>

        {/* Book Order Button */}
        <button
          onClick={handleBookOrder}
          className="w-full py-4 bg-gradient-to-r from-[#017ae3] to-[#00f6ff] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          BOOK THIS ORDER
        </button>
      </div>
    </div>
  );
};

export default MoneyTransfer; 