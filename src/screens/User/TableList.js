import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  tableCellClasses
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: `#FFFFFF`,
  },
  "&.MuiTableCell-root": {
      border: "1px solid rgba(224, 224, 224, 1)"
  },
  [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
  },
}));

export default function TableList(props) {
  const [data, setData] = useState([]);

  const [cellsList] = useState([
    { name: "Username", size: "150px" },
    { name: "Password", size: "150px" },
  ]);

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            {cellsList.map((el, index) => (
              <StyledTableCell key={index} style={{ color: `#FFFFFF` }}>
                {el.name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}
            >
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
