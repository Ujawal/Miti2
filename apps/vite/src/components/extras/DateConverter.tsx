import React, { useState } from 'react'

const bsYears = Array.from({ length: 100 }, (_, i) => 1975 + i) // Example range for B.S. years
const months = [
  'बैशाख',
  'जेठ',
  'आषाढ',
  'श्रावण',
  'भदौ',
  'असोज',
  'कार्तिक',
  'मंसिर',
  'पुष',
  'माघ',
  'फाल्गुन',
  'चैत',
]

const DateConverter: React.FC = () => {
  const [year, setYear] = useState<number>(2081)
  const [month, setMonth] = useState<string>('कार्तिक')
  const [day, setDay] = useState<number>(1)

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex-1">
      <h2 className="text-lg font-semibold mb-4">मिति परिवर्तन</h2>

      <div className="justify-between mb-4 flex">
        <div className="p-2 w-full">
          <label className="block mb-2">वि.सं.</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border p-2 rounded w-full"
          >
            {bsYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="p-2 w-full">
          <label className="block mb-2">वि.सं.</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border p-2 rounded w-full"
          >
            {bsYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="justify-between mb-4 flex">
        <div className="p-2 w-full">
          <label className="block mb-2">वि.सं.</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border p-2 rounded w-full"
          >
            {bsYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="p-2 w-full">
          <label className="block mb-2">वि.सं.</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border p-2 rounded w-full"
          >
            {bsYears.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded">परिवर्तन गर्नुहोस्</button>
    </div>
  )
}

export default DateConverter
