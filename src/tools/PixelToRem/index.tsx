import React, { Fragment, useState } from 'react';

function PixelToRem() {
  const [base, setBase] = useState(16);
  const [pxValue, setPxValue] = useState('');
  const [remValue, setRemValue] = useState('');

  const handlePxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const px = e.target.value;
    setPxValue(px);
    const parsed = parseFloat(px);
    if (!isNaN(parsed)) {
      setRemValue((parsed / base).toFixed(4));
    } else {
      setRemValue('');
    }
  };

  const handleRemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rem = e.target.value;
    setRemValue(rem);
    const parsed = parseFloat(rem);
    if (!isNaN(parsed)) {
      setPxValue((parsed * base).toFixed(2));
    } else {
      setPxValue('');
    }
  };

  const handleBaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBase = parseFloat(e.target.value);
    if (!isNaN(newBase)) {
      setBase(newBase);
      if (pxValue) {
        const px = parseFloat(pxValue);
        setRemValue((px / newBase).toFixed(4));
      } else if (remValue) {
        const rem = parseFloat(remValue);
        setPxValue((rem * newBase).toFixed(2));
      }
    }
  };

  return (
    <Fragment>
     <div>
  <label htmlFor="base-input" className="block text-sm font-medium text-gray-700 mb-1">
    Base (font-size):
  </label>
  <input
    id="base-input"
    type="number"
    value={base}
    onChange={handleBaseChange}
    className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
  />
</div>


<div>
  <label htmlFor="pixels-input" className="block text-sm font-medium text-gray-700 mb-1">
    Pixels (px):
  </label>
  <input
    id="pixels-input"
    type="number"
    value={pxValue}
    onChange={handlePxChange}
    className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
  />
</div>

<div>
  <label htmlFor="rems-input" className="block text-sm font-medium text-gray-700 mb-1">
    Rems (rem):
  </label>
  <input
    id="rems-input"
    type="number"
    value={remValue}
    onChange={handleRemChange}
    className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
  />
</div>
    </Fragment>
  );
}

export default PixelToRem;
