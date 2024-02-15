import { BodyContent } from "common/layouts/Full";
import * as React from "react";
import {IconButton ,  Button , Stack , Paper , TableRow , TableHead , TableContainer , TableCell , TableBody , Table , Container} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function UserScreen() {
  return (
    <BodyContent>
      <Container>

        <h3>User Page</h3>

        <div style={{paddingBottom : '1%'}} ></div>

        <Stack spacing={2} direction="row">
          <Link to={`/CreateUser`}><Button variant="contained">สร้างข้อมูล</Button></Link>
        </Stack>

        <div style={{paddingBottom : '1%'}} ></div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Password</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {" "}
                    {row.name}{" "}
                  </TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell> <IconButton onClick={() => { }} > <DeleteIcon /> </IconButton> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </BodyContent>
  );
}
