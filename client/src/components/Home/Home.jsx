import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Stack } from '@mui/material'
import Topbar from '../Topbar/Topbar'

const Home = () => {
  return (
    <div>
        <Stack direction='row'>
            <Sidebar />
            <Topbar />
        </Stack>
    </div>
  )
}

export default Home