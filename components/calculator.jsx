/* eslint-disable radix */
import React from 'react'

function webCalculator() {
  let answer
  const firstNum = Number(document.getElementById('firstNum').value)
  const secondNum = Number(document.getElementById('secondNum').value)

  const operator = document.getElementById('operator')
  const operation = operator.options[operator.selectedIndex].value

  switch (operation) {
    case '+':
      answer = parseInt(firstNum) + parseInt(secondNum)
      break

    case '-':
      answer = parseInt(firstNum) - parseInt(secondNum)
      break

    case '/':
      answer = parseInt(firstNum) / parseInt(secondNum)
      break

    case '*':
      answer = parseInt(firstNum) * parseInt(secondNum)
      break

    default:
      answer = alert('Unknown')
  }
  document.getElementById('answer').value = answer
}

export default () => (

  <div className="main-content">
    <div id="title"> React Calculator</div>
    <input id="firstNum" type="text" />
    <select name="operations" id="operator">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input id="secondNum" type="text" />
    <button type="submit" className="calculate-button" onClick={webCalculator}>=</button>
    <input id="answer" type="text" />
  </div>
)
