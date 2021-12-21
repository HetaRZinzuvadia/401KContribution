import React from 'react';
import './TabularList.css';

const TabularList = ({ list }) =>  {
  return (
    <div className='tc pt2 pb5'>
      <table className='tc w-auto list db-ns'>
          <tbody>
            <tr>
              {renderTableHeader(list)}
            </tr>
            {renderTableDataList(list)}
          </tbody>
      </table>
    </div>
  )
}

const renderTableDataList = (list) => {
  return list.map((user, idx) => {
    let { age, contribution, companyContribution, interest, value401K } = user;

    return (
      <tr key={idx}>
        <td>{age}</td>
        <td>{contribution}</td>
        <td>{companyContribution}</td>
        <td>{Number.parseFloat(interest).toFixed(2)}</td>
        <td>{Number.parseFloat(value401K).toFixed(2)}</td>
      </tr>
    )
  });
}

const renderTableHeader = (list) => {
  const header = list.length && Object.keys(list[0]);

  if (header) {
    return header.map((key, index) => {
      return <th key={index} className='pa3 white'>{key.toUpperCase()}</th>
    })
  }
  return ''
}

export default TabularList