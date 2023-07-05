import React, { useState } from 'react'
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

  const [input, setInput] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: ''
  })

  return (
    <Paper sx={{ 
      // border: '1px solid red', 
      width: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '0 auto', marginTop: '20px', padding: '20px' }}>
      <Typography variant='h5' sx={{ marginRight: '30px', color: '#1976d2'}}>User Settings</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
        <TextField id="outlined-basic" label="Name" variant="outlined" name='name' value={input.name} onChange={e => handleChange(e)} />
        <TextField id="outlined-basic" label="Lastname" variant="outlined" name='lastname' value={input.lastname} onChange={e => handleChange(e)} sx={{ margin: '10px 0'}} />
        <TextField id="outlined-basic" label="Email" variant="outlined" name='email' value={input.email} onChange={e => handleChange(e)} sx={{ margin: '10px 0'}} />
        <TextField id="outlined-basic" label="Phone" variant="outlined" name='phone' value={input.phone} onChange={e => handleChange(e)} sx={{ margin: '20px 0'}} />

        <Button variant='contained'>Save</Button>
      </Box>
    </Paper>
  )
}

export default Home