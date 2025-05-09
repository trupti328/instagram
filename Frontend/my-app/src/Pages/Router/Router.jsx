import React from 'react'
import Siderbar from '../../Components/Siderbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'

const Router = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <Siderbar />
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
            </Routes>
        </div>
    )
}

export default Router