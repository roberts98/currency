import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../store';
import { addConversionRate } from '../store/actions/currency';
import { Input, Heading } from './styled';
import { Colors } from '../styles/colors';
import { round2Decimals } from '../utils/numbers';

function Conversion() {
  const dispatch = useDispatch();
  const { conversionRate } = useSelector((state: RootState) => state.currency);
  const [newConversion, setNewConversion] = useState(conversionRate.toString());
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleConversionClick() {
    setIsEditing(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setNewConversion(value);
    }
  }

  function handleInputBlur(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      dispatch(addConversionRate(Number(value)));
      setIsEditing(false);
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const { value } = e.currentTarget;

      if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
        dispatch(addConversionRate(Number(value)));
        setIsEditing(false);
      }
    }
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <Wrapper>
      <Heading>Conversion rate</Heading>
      1€ is{' '}
      {!isEditing ? (
        <StyledSpan onClick={handleConversionClick}>{round2Decimals(conversionRate)} PLN</StyledSpan>
      ) : (
        <Input
          ref={inputRef}
          onKeyPress={handleKeyPress}
          onBlur={handleInputBlur}
          onChange={handleChange}
          value={newConversion}
          type="text"
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 60px 200px;
  background-color: ${Colors.light};
`;

const StyledSpan = styled.span`
  cursor: pointer;
  font-weight: 500;
  font-size: 32px;
`;

export default Conversion;
