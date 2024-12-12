export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi"
];

export const transferCountries = [
  'Maldives', 'Dubai', 'Europe', 'Thailand', 'Bali', 'Azerbaijan', 'Malaysia', 'Fiji',
  'Australia', 'New Zealand', 'USA', 'Canada', 'Brazil', 'Argentina', 'Peru', 'Chile', 'Mexico',
  'Egypt', 'South Africa', 'Kenya', 'Tanzania', 'Morocco', 'Mauritius',
  'Japan', 'China', 'Hong Kong', 'Macau', 'South Korea', 'Philippines',
  'India', 'Almaty', 'Baku', 'Singapore', 'Turkey',
];

export interface CurrencyRate {
  code: string;
  name: string;
  flag: string;
  buyRate: number;
  sellRate: number;
  cashBuyRate?: number;
  cashSellRate?: number;
  cardRate?: number;
}

export const currencyRates: CurrencyRate[] = [
  { code: 'USD', name: 'US Dollar', flag: '/Assets/Forex/currency/1.webp', buyRate: 85.1275, sellRate: 85.4227, cashBuyRate: 85.6916, cashSellRate: 84.7332, cardRate: 84.3532 },
  { code: 'EUR', name: 'Euro', flag: '/Assets/Forex/currency/2.webp', buyRate: 89.4345, sellRate: 89.7438, cashBuyRate: 89.7139, cashSellRate: 90.6445, cardRate: 88.5357 },
  { code: 'GBP', name: 'British Pound', flag: '/Assets/Forex/currency/3.webp', buyRate: 108.5255, sellRate: 108.8555, cashBuyRate: 109.5034, cashSellRate: 107.9781, cardRate: 107.4781 },
  { code: 'AUD', name: 'Australian Dollar', flag: '/Assets/Forex/currency/4.webp', buyRate: 54.7025, sellRate: 54.9925, cashBuyRate: 55.2843, cashSellRate: 54.431, cardRate: 54.0466 },
  { code: 'CAD', name: 'Canadian Dollar', flag: '/Assets/Forex/currency/5.webp', buyRate: 60.2762, sellRate: 60.5822, cashBuyRate: 61.0524, cashSellRate: 61.2304, cardRate: 59.6049 },
  { code: 'SGD', name: 'Singapore Dollar', flag: '/Assets/Forex/currency/6.webp', buyRate: 63.4096, sellRate: 63.7143, cashBuyRate: 64.2755, cashSellRate: 63.2147, cardRate: 62.7147 },
  { code: 'NZD', name: 'New Zealand Dollar', flag: '/Assets/Forex/currency/7.webp', buyRate: 49.5223, sellRate: 49.8226, cashBuyRate: 50.0711, cashSellRate: 49.1436, cardRate: 48.8826 },
  { code: 'HKD', name: 'Hong Kong Dollar', flag: '/Assets/Forex/currency/8.webp', buyRate: 11.0987, sellRate: 11.2743, cashBuyRate: 11.2896, cashSellRate: 11.1257, cardRate: 10.8257 },
  { code: 'AED', name: 'UAE Dirham', flag: '/Assets/Forex/currency/9.webp', buyRate: 23.3289, sellRate: 23.4789, cashBuyRate: 23.4338, cashSellRate: 23.1136, cardRate: 22.9214 },
  { code: 'SAR', name: 'Saudi Riyal', flag: '/Assets/Forex/currency/10.webp', buyRate: 22.8513, sellRate: 22.9858, cashBuyRate: 22.4561, cashSellRate: 22.4815, cardRate: 22.4477 },
  { code: 'CHF', name: 'Swiss Franc', flag: '/Assets/Forex/currency/11.webp', buyRate: 95.9285, sellRate: 96.2998, cashBuyRate: 97.3338, cashSellRate: 95.1294, cardRate: 94.8705 },
  { code: 'JPY', name: 'Japanese Yen', flag: '/Assets/Forex/currency/12.webp', buyRate: 0.5764, sellRate: 0.6914, cashBuyRate: 0.5774, cashSellRate: 0.5472, cardRate: 0.538 },
  { code: 'SEK', name: 'Swedish Krona', flag: '/Assets/Forex/currency/13.webp', buyRate: 8.0647, sellRate: 8.0647, cashBuyRate: 8.0158, cashSellRate: 7.9775 },
  { code: 'THB', name: 'Thai Baht', flag: '/Assets/Forex/currency/14.webp', buyRate: 2.5789, sellRate: 2.57, cashBuyRate: 2.57, cashSellRate: 2.5226, cardRate: 2.4386 },
  { code: 'MYR', name: 'Malaysian Ringgit', flag: '/Assets/Forex/currency/15.webp', buyRate: 19.4164, sellRate: 19.4164, cashBuyRate: 19.4164, cashSellRate: 19.3816 },
  { code: 'CNY', name: 'Chinese Yuan', flag: '/Assets/Forex/currency/16.webp', buyRate: 12.2993, sellRate: 12.2993, cashBuyRate: 12.2993, cashSellRate: 12.0909 },
  { code: 'ZAR', name: 'South African Rand', flag: '/Assets/Forex/currency/17.webp', buyRate: 4.9582, sellRate: 5.0486, cashBuyRate: 5.0486, cashSellRate: 4.7435, cardRate: 4.6135 },
  { code: 'OMR', name: 'Omani Rial', flag: '/Assets/Forex/currency/18.webp', buyRate: 226.2416, sellRate: 226.2416, cashBuyRate: 226.2416, cashSellRate: 216.0009 },
  { code: 'BHD', name: 'Bahraini Dinar', flag: '/Assets/Forex/currency/19.webp', buyRate: 233.4324, sellRate: 233.4324, cashBuyRate: 233.4324, cashSellRate: 217.4091 },
  { code: 'KWD', name: 'Kuwaiti Dinar', flag: '/Assets/Forex/currency/20.webp', buyRate: 282.54, sellRate: 282.54, cashBuyRate: 282.54, cashSellRate: 265.1405 },
  { code: 'NOK', name: 'Norwegian Krone', flag: '/Assets/Forex/currency/21.webp', buyRate: 8.4094, sellRate: 8.4094, cashBuyRate: 8.4094, cashSellRate: 7.6647 },
  { code: 'DKK', name: 'Danish Krone', flag: '/Assets/Forex/currency/22.webp', buyRate: 11.33, sellRate: 11.33, cashBuyRate: 11.33, cashSellRate: 11.9795 },
  { code: 'IDR', name: 'Indonesian Rupiah', flag: '/Assets/Forex/currency/23.webp', buyRate: 0.0061, sellRate: 0.0061, cashBuyRate: 0.0061, cashSellRate: 0.0054, cardRate: 0.005 },
  { code: 'LKR', name: 'Sri Lankan Rupee', flag: '/Assets/Forex/currency/24.webp', buyRate: 0.3477, sellRate: 0.3477, cashBuyRate: 0.3477, cashSellRate: 0.2874 },
  { code: 'KRW', name: 'Korean Won', flag: '/Assets/Forex/currency/25.webp', buyRate: 0.0623, sellRate: 0.0623, cashBuyRate: 0.0623, cashSellRate: 0.0641 },
  { code: 'TRY', name: 'Turkish Lira', flag: '/Assets/Forex/currency/26.webp', buyRate: 2.955, sellRate: 2.955, cashBuyRate: 2.955, cashSellRate: 2.496 },
  { code: 'RUB', name: 'Russian Ruble', flag: '/Assets/Forex/currency/27.webp', buyRate: 1.085, sellRate: 1.085, cashBuyRate: 1.085, cashSellRate: 0.82 },
  { code: 'QAR', name: 'Qatari Rial', flag: '/Assets/Forex/currency/28.webp', buyRate: 23.8068, sellRate: 23.8068, cashBuyRate: 23.8068, cashSellRate: 22.8074 },
  { code: 'PHP', name: 'Philippine Peso', flag: '/Assets/Forex/currency/29.webp', buyRate: 1.84, sellRate: 1.84, cashBuyRate: 1.84, cashSellRate: 1.2972 },
  { code: 'VND', name: 'Vietnam Dong', flag: '/Assets/Forex/currency/30.webp', buyRate: 0.004, sellRate: 0.004, cashBuyRate: 0.004, cashSellRate: 0.0038 },
  { code: 'MUR', name: 'Mauritius Rupee', flag: '/Assets/Forex/currency/31.webp', buyRate: 2, sellRate: 2, cashBuyRate: 2, cashSellRate: 1.9098 },
  { code: 'BDT', name: 'Bangladesh Taka', flag: '/Assets/Forex/currency/32.webp', buyRate: 0.77, sellRate: 0.77, cashBuyRate: 0.77, cashSellRate: 0.65 },
  { code: 'BRL', name: 'Brazilian Real', flag: '/Assets/Forex/currency/33.webp', buyRate: 22.26, sellRate: 22.26, cashBuyRate: 22.26, cashSellRate: 16.732 },
  { code: 'KES', name: 'Kenyan Shilling', flag: '/Assets/Forex/currency/34.webp', buyRate: 1.05, sellRate: 1.05, cashBuyRate: 1.05, cashSellRate: 0.4578 },
  { code: 'EGP', name: 'Egyptian Pound', flag: '/Assets/Forex/currency/35.webp', buyRate: 2.6, sellRate: 2.6, cashBuyRate: 2.6, cashSellRate: 1.2713 },
  { code: 'ILS', name: 'Israeli Shekel', flag: '/Assets/Forex/currency/36.webp', buyRate: 26, sellRate: 26, cashBuyRate: 26, cashSellRate: 22.1748 },
  { code: 'PLN', name: 'Polish Zloty', flag: '/Assets/Forex/currency/37.webp', buyRate: 24.8412, sellRate: 24.8412, cashBuyRate: 24.8412, cashSellRate: 19.8388 },
  { code: 'MOP', name: 'Macau Pataca', flag: '/Assets/Forex/currency/38.webp', buyRate: 14.5, sellRate: 14.5, cashBuyRate: 14.5, cashSellRate: 8.0953 },
  { code: 'CZK', name: 'Czech Koruna', flag: '/Assets/Forex/currency/39.webp', buyRate: 5.0597, sellRate: 5.0597, cashBuyRate: 5.0597, cashSellRate: 3.1593 },
  { code: 'MVR', name: 'Maldivian Rufiyaa', flag: '/Assets/Forex/currency/40.webp', buyRate: 6.3, sellRate: 6.3, cashBuyRate: 6.3, cashSellRate: 4.3 }
];

export const products = {
  buy: ['Forex Card', 'Currency Notes'],
  sell: ['Currency Notes']
}; 