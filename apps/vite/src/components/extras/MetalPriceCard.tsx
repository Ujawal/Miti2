import React from 'react'

interface MetalPriceCardProps {
  metalName: string
  metalImage: string
  price: number
  unit: string
}

const MetalPriceCard: React.FC<MetalPriceCardProps> = ({ metalName, metalImage, price, unit }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-none">
      <div className="flex items-center">
        <img src={metalImage} alt={metalName} className="w-10 h-10 mr-3" />
        <div>
          <p className="font-semibold text-gray-700">{metalName}</p>
          <p className="text-sm text-gray-500">{unit}</p>
        </div>
      </div>
      <div>
        <p className="font-bold text-gray-800">
          {price === 0 ? 'रू ०' : `रू ${price.toLocaleString()}`}
        </p>
      </div>
    </div>
  )
}

export default MetalPriceCard
