"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, X } from 'lucide-react';
import { indianStates, currencyRates, products } from '@/app/types/forex';
import { safeWindowOpen } from '@/utils/safe-window';

interface ExchangeFormData {
  type: 'buy' | 'sell';
  city: string;
  haveCurrency: string;
  wantCurrency: string;
  product: string;
  forexAmount: string;
  inrAmount: string;
}

interface CurrencyExchangeProps {
  onClose: () => void;
}

const CurrencyExchange: React.FC<CurrencyExchangeProps> = ({ onClose }) => {
  const [formType, setFormType] = useState<'buy' | 'sell'>('buy');
  const [formData, setFormData] = useState<ExchangeFormData>({
    type: 'buy',
    city: '',
    haveCurrency: 'INR',
    wantCurrency: '',
    product: '',
    forexAmount: '',
    inrAmount: '',
  });

  const handleForexAmountChange = (amount: string) => {
    const currency = currencyRates.find(c =>
      formType === 'buy'
        ? c.code === formData.wantCurrency
        : c.code === formData.haveCurrency
    );

    if (currency && amount) {
      const rate = formType === 'buy' ? currency.sellRate : currency.buyRate;
      const inrAmount = (parseFloat(amount) * rate).toFixed(2);
      setFormData(prev => ({ ...prev, forexAmount: amount, inrAmount }));
    } else {
      setFormData(prev => ({ ...prev, forexAmount: amount, inrAmount: '' }));
    }
  };

  const handleBookOrder = () => {
    const message = `
Hello! I would like to ${formType} foreign currency:
City: ${formData.city}
${formType === 'buy' ? 'From' : 'Selling'}: ${formData.haveCurrency}
${formType === 'buy' ? 'To' : 'Getting'}: ${formData.wantCurrency}
Product: ${formData.product}
Forex Amount: ${formData.forexAmount} ${formType === 'buy' ? formData.wantCurrency : formData.haveCurrency}
INR Amount: ₹${formData.inrAmount}
Rate: ${currencyRates.find(c => c.code === (formType === 'buy' ? formData.wantCurrency : formData.haveCurrency))?.sellRate}
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
        {/* Tabs */}
        <div className="flex gap-4 border-b">
          <button
            onClick={() => {
              setFormType('buy');
              setFormData(prev => ({ ...prev, type: 'buy', wantCurrency: '', product: '' }));
            }}
            className={`px-4 py-2 ${formType === 'buy' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Buy Forex Cards & Currency
          </button>
          <button
            onClick={() => {
              setFormType('sell');
              setFormData(prev => ({ ...prev, type: 'sell', haveCurrency: '', product: '' }));
            }}
            className={`px-4 py-2 ${formType === 'sell' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          >
            Sell Foreign Currency Notes
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* City Selection */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Select City</label>
            <div className="relative">
              <select
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          </div>

          {/* Currency Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency You {formType === 'buy' ? 'Have' : 'Want'}
              </label>
              {formType === 'buy' ? (
                <div className="p-3 border border-gray-300 rounded-lg flex items-center">
                  <Image src="/Assets/Forex/currency/2.webp" alt="India Flag" width={24} height={24} className="mr-2" />
                  <span>Indian Rupee (INR)</span>
                </div>
              ) : (
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none"
                  value={formData.haveCurrency}
                  onChange={(e) => setFormData(prev => ({ ...prev, haveCurrency: e.target.value }))}
                >
                  <option value="">Select currency</option>
                  {currencyRates.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {currency.name} ({currency.code})
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency You {formType === 'buy' ? 'Want' : 'Have'}
              </label>
              {formType === 'sell' ? (
                <div className="p-3 border border-gray-300 rounded-lg flex items-center">
                  <Image src="/Assets/Forex/currency/2.webp" alt="India Flag" width={24} height={24} className="mr-2" />
                  <span>Indian Rupee (INR)</span>
                </div>
              ) : (
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg appearance-none"
                  value={formData.wantCurrency}
                  onChange={(e) => setFormData(prev => ({ ...prev, wantCurrency: e.target.value }))}
                >
                  <option value="">Select currency</option>
                  {currencyRates.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {currency.name} ({currency.code})
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          {/* Product Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Product</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg appearance-none"
              value={formData.product}
              onChange={(e) => setFormData(prev => ({ ...prev, product: e.target.value }))}
            >
              <option value="">Select product</option>
              {products[formType].map(product => (
                <option key={product} value={product}>{product}</option>
              ))}
            </select>
          </div>

          {/* Amount Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Forex Amount</label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter amount"
                  value={formData.forexAmount}
                  onChange={(e) => handleForexAmountChange(e.target.value)}
                />
                {(formType === 'buy' ? formData.wantCurrency : formData.haveCurrency) && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    Rate = ₹{currencyRates.find(c =>
                      c.code === (formType === 'buy' ? formData.wantCurrency : formData.haveCurrency)
                    )?.sellRate}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">INR Amount</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                value={formData.inrAmount ? `₹${formData.inrAmount}` : ''}
                readOnly
              />
            </div>
          </div>

          {/* Book Order Button */}
          <button
            onClick={handleBookOrder}
            className="w-full py-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            BOOK THIS ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchange; 