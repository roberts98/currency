import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store';
import { addConversionRate } from '../store/actions/currency';

function Conversion() {
  const dispatch = useDispatch();
  const { conversionRate } = useSelector((state: RootState) => state.currency);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleConversionClick() {
    setIsEditing(true);
  }

  function handleInputBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    dispatch(addConversionRate(Number(value)));
    setIsEditing(false);
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const { value } = e.currentTarget;

      dispatch(addConversionRate(Number(value)));
      setIsEditing(false);
    }
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <div>
      Current conversion is:{' '}
      {!isEditing ? (
        <span onClick={handleConversionClick}>{conversionRate}</span>
      ) : (
        <input
          ref={inputRef}
          onKeyPress={handleKeyPress}
          onBlur={handleInputBlur}
          defaultValue={conversionRate}
          type="number"
        />
      )}
    </div>
  );
}

export default Conversion;
