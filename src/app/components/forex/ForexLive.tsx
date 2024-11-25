import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CurrencyOption {
    symbol: string;
    name: string;
    code: string;
}

const currencies: CurrencyOption[] = [
    { symbol: '$', name: 'US Dollar', code: 'USD' },
    { symbol: '€', name: 'Euro', code: 'EUR' },
    { symbol: '£', name: 'British Pound Sterling', code: 'GBP' },
    { symbol: 'A$', name: 'Australian Dollar', code: 'AUD' },
    { symbol: 'C$', name: 'Canadian Dollar', code: 'CAD' },
    { symbol: '¥', name: 'Japanese Yen', code: 'JPY' },
    { symbol: 'F', name: 'Swiss Franc', code: 'CHF' },
    { symbol: 'S$', name: 'Singapore Dollar', code: 'SGD' },
];

const CurrencyExchange = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="mb-8">
                <p className="text-gray-600 text-sm mb-1">ONE STOP SHOP FOR ALL YOUR</p>
                <h1 className="text-3xl font-bold mb-6">FOREX NEEDS!</h1>

                {/* Navigation Links */}
                <div className="flex gap-6 border-b border-gray-200">
                    <a href="#" className="pb-2 border-b-2 border-blue-500 text-blue-500">
                        Currency Exchange
                    </a>
                    <a href="#" className="pb-2 text-gray-600 hover:text-blue-500">
                        Money Transfer
                    </a>
                    <a href="#" className="pb-2 text-gray-600 hover:text-blue-500">
                        Travel Currency Card
                    </a>
                </div>
            </div>

            {/* Currency Carousel */}
            <div className="relative">
                <div className="flex items-center">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <ChevronLeft className="w-6 h-6 text-gray-400" />
                    </button>

                    <div className="flex-1 overflow-hidden">
                        <div className="flex gap-4 justify-between">
                            {currencies.map((currency) => (
                                <div
                                    key={currency.code}
                                    className="flex flex-col items-center text-center min-w-[100px]"
                                >
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl mb-2">
                                        {currency.symbol}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {currency.name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        ({currency.code})
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CurrencyExchange;