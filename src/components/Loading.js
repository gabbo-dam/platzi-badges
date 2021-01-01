import React from 'react'
import ReactLoading from 'react-loading'
import './styles/Loading.css'

const Loading = ({ type, color }) => (
  <div className='loader'>
    <ReactLoading type={type} color={color} height={150} width={150} />
  </div>
)

export default Loading
