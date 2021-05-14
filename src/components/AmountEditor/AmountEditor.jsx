import React, { useState } from 'react';
import NumberFormat from 'react-number-format'
import { Slider, withStyles } from '@material-ui/core'
import './AmountEditor.scss';

const CustomSlider = withStyles({
  root: {
    color: '#0258ff',
    height: 16,
    padding: '8px 0',
  },
  thumb: {
    height: 32,
    width: 32,
    marginTop: -8,
    marginLeft: -16,
    backgroundColor: '#fff',
    border: '2px solid #0258ff',
    '&:focus, &$active': {
      boxShadow: 'none',
    },
    '&:hover': {
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.24)',
    }
  },
  active: {},
  track: {
    height: 16,
    borderRadius: 0,
    background: '#0258ff',
  },
  rail: {
    height: 16,
    borderRadius: 0,
    background: '#0258ff',
    opacity: 0.12
  },
  mark: {
    width: 4,
    height: 4,
    borderRadius: 4,
    opacity: 0.24,
    top: 14,
  },
  markActive: {
    opacity: 0.32,
  }
})(Slider);

const AmountEditor = ({ min = 10000, max = 30000, step = 2000, marks }) => {
  const [value, setValue] = useState(10000)
  const [inputValue, setInputValue] = useState(0)
  const [editing, setEditing] = useState(false)
  const [err, setErr] = useState('')

  const handleChangeValue = (value) => {
    if (value >= min && value <= max) {
      setErr('')
      setValue(value)
    } else {
      setErr(`Please enter an amount between $${Intl.NumberFormat().format(min)} and $${Intl.NumberFormat().format(max)}`)
    }
    setInputValue(value)
  }
  

  return (
    <div className="amount-editor">
      {!editing && (
        <div
          className="amount-static"
          onClick={() => {
            setEditing(true)
            setInputValue(value)
          }}
        >
          {`$${Intl.NumberFormat().format(value)}`}
        </div>)
      }
      {editing && (
        <div className="amount-input">
          <NumberFormat
            value={inputValue}
            onValueChange={(values) => handleChangeValue(values.value)}
            thousandSeparator
            isNumericString
            prefix="$"
            onBlur={(_) => {
              setEditing(false)
              setErr('')
            }}
          />
        </div>
      )}
      {err && <div className="amount-error">{err}</div>}
      <div className="amount-slider">
        <div />
        <div />
        <CustomSlider
          marks={marks}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
        />
      </div>
    </div>
  )
};

export default AmountEditor;