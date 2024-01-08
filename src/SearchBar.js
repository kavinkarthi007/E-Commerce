import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
function SearchBar() {
    const handleSearch = (event) => {
      // Handle search logic here
      console.log('Search query:', event.target.value);
    };
  
    return (
    <div id='bar'>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search Here..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={handleSearch}
      />
      </div>
    );
  }
  export default SearchBar;