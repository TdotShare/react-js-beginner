import { BodyContent } from "common/layouts/Full";
import { useState } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";

export default function CreateUserScreen() {
 
  
  const [dataUser , setDataUser ] = useState({})
  
  const createUser = () => {
    console.log(JSON.stringify(dataUser))
  };

  const handleTextChange = (key ,  value ) => {
    const newData = {
        ...dataUser,
        [key]: value
    }
    setDataUser(newData)
}

  return (
    <BodyContent>
      <Container>
        <h3>CreateUser Page</h3>

        <Grid container spacing={2} sx={{ width: "95%" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Username
            <TextField
              fullWidth
              name="Username"
              autoComplete={`off`}
              onChange={(e) => handleTextChange("Username" , e.target.value)}
              size="small"
              placeholder={`Username`}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Password
            <TextField
              fullWidth
              name="Password"
              autoComplete={`off`}
              onChange={(e) => handleTextChange("Password" , e.target.value)}
              size="small"
              placeholder={`Password`}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button variant="contained" onClick={() => createUser()}>
              สร้างข้อมูล
            </Button>
          </Grid>
        </Grid>
      </Container>
    </BodyContent>
  );
}
