import { useState } from "react"
import { FaTrash } from 'react-icons/fa';


const OneCategory = ({ name, records, deleteCategory, currency, deleteRecord }) => {

  
  const totalAmount = records.reduce((sum, record) => sum + parseInt(record.amount), 0);

  return (
    <div className={'pb-4'}>
      <div className={'flex justify-between items-center'}>
        <h2>{name}</h2>
        <div className={'space-x-2'}>                    
          {name === 'Income' || totalAmount === 0 ?
            <span>Total: {totalAmount} {currency}</span> :
            <span>Total: -{totalAmount} {currency}</span>
          }
          {name != 'Income' &&
            <button
              onClick={() => deleteCategory(name)}
              className={'cursor-pointer'}
              >
                <FaTrash />
            </button>
          }                            
        </div>
      </div>
        
      <ul className={'text-[14px] ml-3 my-3'}>
        {records.length === 0 ? (
          <p>No records in this category</p>                      
        ) : (
          records.map((oneRecord, index) => {
            return (               
              <li key={index} className={'flex justify-between items-center'}>
                <span>{oneRecord.name}</span>
                <div className={'flex items-center space-x-1'}>
                  {oneRecord.category === 'Income' ?             
                  <span>{oneRecord.amount} {currency}</span> :
                  <span>-{oneRecord.amount} {currency}</span>
                  }
                  <button
                    className={'cursor-pointer'}
                    onClick={() => deleteRecord(oneRecord.id, oneRecord.category)}
                  >
                    <FaTrash />
                  </button>
                </div>
                
              </li>
            )                                        
          })
        )}
      </ul>
      <hr />
    </div>
  )
}

export default OneCategory