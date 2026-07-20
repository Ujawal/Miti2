import React, { useState } from 'react'

interface CurrencyConverterCardProps {
  initialAmount: number
  exchangeRate: number
  fromCurrency: string
  toCurrency: string
}

const CurrencyConverterCard: React.FC<CurrencyConverterCardProps> = ({
  initialAmount,
  exchangeRate,
  fromCurrency,
  toCurrency,
}) => {
  const [amount, setAmount] = useState<number>(initialAmount)

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value) || 0)
  }

  const convertedAmount = (amount * exchangeRate).toFixed(2)

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex-1">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">मुद्रा रूपान्तरण</h2>
      <p className="text-sm text-gray-600 mb-6">कात्तिक ०४, २०८१ - 20 Oct, 2024</p>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="amount">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium mb-1">From</label>
        <div className="relative">
          <select
            className="block w-full px-3 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
            defaultValue={fromCurrency}
          >
            <option value="USD">U.S Dollar</option>
            <option value="USD">U.S Dollar</option>
            <option value="USD">U.S Dollar</option>
          </select>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <img src="/path-to-us-flag.png" alt="US flag" className="w-6 h-6" />
          </span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium mb-1">Converted to</label>
        <div className="relative">
          <input
            type="text"
            value={convertedAmount}
            readOnly
            className="w-full px-3 py-2 border rounded-md text-gray-800 bg-gray-50"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <img src="/path-to-nepal-flag.png" alt="Nepal flag" className="w-6 h-6" />
          </span>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          1 U.S. Dollar equals{' '}
          <span className="font-bold text-orange-500">{exchangeRate} Nepalese Rupee</span>
        </p>
      </div>
    </div>
  )
}

export default CurrencyConverterCard
