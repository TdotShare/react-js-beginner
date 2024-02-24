import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox(props) {

  const [data, setData] = React.useState("")


  const handleChange = (e) => {
     setData(e.target.value)
  }

  const submitSearchData =  () => {
    props.submitChangeInput(data)
  }
 
  return (
    <Paper
      component="form"
      sx={{ marginBottom : 2 , display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Data"
        onChange={handleChange}
      />
      <IconButton onClick={submitSearchData} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon  />
      </IconButton>
    </Paper>
  );
}