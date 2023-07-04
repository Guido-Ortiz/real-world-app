import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Box, Paper, Stack, TextField, Typography, Button } from '@mui/material'
import Topbar from '../Topbar/Topbar'

// const Home = () => {
//   return (
//     <div>
//       <Stack direction='row'>
//         <Sidebar />

//         <Stack direction='column' sx={{ border: '1px solid red', width: '100%' }}>
//           <Topbar />

//             <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '0 auto' }}>
//               <Typography variant='h5'>User Settings</Typography>
//               <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                 <TextField />
//                 <TextField />
//                 <TextField />
//                 <TextField />
//                 <Button>Save</Button>
//               </Box>
//             </Box>


//         </Stack>
//       </Stack>


//     </div>
//   )
// }

// export default Home





const Home = () => {
  return (
      <Box sx={{ border: '1px solid red', width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '0 auto', marginTop: '20px' }}>
        <Typography variant='h5'>User Settings</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
          <TextField />
          <TextField />
          <TextField />
          <TextField />
          <Button variant='contained'>Save</Button>
        </Box>
      </Box> 
  )
}

export default Home