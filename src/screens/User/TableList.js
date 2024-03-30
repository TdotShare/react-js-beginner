import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  tableCellClasses,
  TableFooter,
  TablePagination
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: `#FFFFFF`,
  },
  "&.MuiTableCell-root": {
    border: "1px solid rgba(224, 224, 224, 1)",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TableList(props) {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const [cellsList] = useState([
    { name: "Username", size: "150px" },
    { name: "Password", size: "150px" },
    { name: "File", size: "150px" },
  ]);

  useEffect(() => {
    setData(props.data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cellsList.map((el, index) => (
              <StyledTableCell key={index} style={{ color: `#FFFFFF` }}>
                {el.name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(data || [])
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => (
              <TableRow key={item.user_id}>
                <StyledTableCell component="th" scope="row">
                  {item.user_username}
                </StyledTableCell>
                <StyledTableCell>{item.user_password}</StyledTableCell>
                <StyledTableCell>{item.attachFileName}</StyledTableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={15}>
              <TablePagination
                style={{ display: "flex" }}
                rowsPerPageOptions={[5, 10, 25, 50]}
                component="div"
                count={(data || []).length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
