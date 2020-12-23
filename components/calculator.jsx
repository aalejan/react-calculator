import React from 'react'

export default () => (
  <div className="main-content">
    <input id="firstNum" type="text" />
    <select name="operators" id="operator">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input id="secondNum" type="text" />
    <button type="submit" className="calculate-button">=</button>
    <input type="text" id="answer" />
  </div>
)
