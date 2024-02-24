import { BodyContent } from "common/layouts/Full";
import {
  Button,
  Stack,
  Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TableList from "./TableList";
import SearchBox from "./SearchBox";

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
  const [userData, setUserData] = useState([]);

  // const GetUserAll = () => {
  //   return UserService.getUserAll().then((res) => {
  //     console.log(res.data);
  //   });
  // };


  useEffect(() => {


  }, []);

  const btnSearchBox = (data) => {
    console.log(data)
  }

  return (
    <BodyContent>
      <Container>
        <h3>User Page</h3>

        <div style={{ paddingBottom: "1%" }}></div>

        <Stack spacing={2} direction="row">
          <Link to={`/CreateUser`}>
            <Button variant="contained">สร้างข้อมูล</Button>
          </Link>
        </Stack>

        <div style={{ paddingBottom: "1%" }}></div>


        <SearchBox submitChangeInput={btnSearchBox} />

        <TableList data={rows} />
      </Container>
    </BodyContent>
  );
}
