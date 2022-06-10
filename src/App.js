import React, { useState } from 'react'
import './App.css'
import { BsFlag } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { GiCancel } from 'react-icons/gi'

function App() {
   const [color, setColor] = useState('red')
   const [status, setStatus] = useState('')
   return (
      <div className="container">
         <div className="card">
            <div className="card-header">
               <div className="flag-container">
                  <h6 style={{ color: '#4cdbdb' }}>Likelihood</h6>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                     }}
                  >
                     <BsFlag className="flag" style={{ color: `${color}` }} />
                     <span className="status">{status}</span>
                     <InputGroup className="mb-3">
                        <DropdownButton
                           className="status"
                           title="medium"
                           id="input-group-dropdown-1"
                        >
                           <Dropdown.Item
                              href="#"
                              onClick={() => {
                                 setColor('gray')
                                 setStatus('Low')
                              }}
                           >
                              <div>
                                 <div
                                    className="color"
                                    style={{ backgroundColor: 'gray' }}
                                 ></div>{' '}
                                 Low
                              </div>
                           </Dropdown.Item>
                           <Dropdown.Item
                              href="#"
                              onClick={() => {
                                 setColor('blue')
                                 setStatus('Medium')
                              }}
                           >
                              <div>
                                 <div
                                    className="color"
                                    style={{ backgroundColor: 'blue' }}
                                 ></div>{' '}
                                 Medium
                              </div>
                           </Dropdown.Item>
                           <Dropdown.Item
                              href="#"
                              onClick={() => {
                                 setColor('violet')
                                 setStatus('High')
                              }}
                           >
                              <div>
                                 <div
                                    className="color"
                                    style={{ backgroundColor: 'violet' }}
                                 ></div>{' '}
                                 High
                              </div>
                           </Dropdown.Item>
                           <Dropdown.Item
                              href="#"
                              onClick={() => {
                                 setColor('red')
                                 setStatus('Critical')
                              }}
                           >
                              <div>
                                 <div
                                    className="color"
                                    style={{ backgroundColor: 'red' }}
                                 ></div>{' '}
                                 Critical
                              </div>
                           </Dropdown.Item>
                           <Dropdown.Item
                              onClick={() => {
                                 setColor('gray')
                                 setStatus('')
                              }}
                              id="clear"
                              href="#"
                           >
                              <div>
                                 <GiCancel style={{ fontSize: '13px' }} />
                                 Clear
                              </div>
                           </Dropdown.Item>
                        </DropdownButton>
                     </InputGroup>
                  </div>
               </div>
            </div>
            <div className="card-body"></div>
         </div>
      </div>
   )
}

export default App
