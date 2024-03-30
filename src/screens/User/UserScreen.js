import { BodyContent } from "common/layouts/Full";
import { Button, Stack, Container, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TableList from "./TableList";
import SearchBox from "./SearchBox";
import { UserService } from "services";
import { PageLoading } from "components";

export default function UserScreen() {
  const [userData, setUserData] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const GetUserAll = () => {
    return UserService.getUserAll().then((res) => {
      if (res) {
        setUserData(res);
      }
    });
  };

  const offPageLoading = () => {
    setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setIsPageLoading(true);

    Promise.all([GetUserAll()])
      .then(() => {
        offPageLoading();
      })
      .catch(() => offPageLoading());
  }, []);

  const btnSearchBox = (data) => {
    setIsPageLoading(true);

    if (data !== "") {
      let requestData = {
        searchUser: data,
      };

      UserService.getSearchUser(requestData)
        .then((res) => {
          if (res) {
            setUserData(res);
          }
          offPageLoading();
        })
        .catch((e) => offPageLoading());
    } else {
      Promise.all([GetUserAll()])
        .then(() => {
          offPageLoading();
        })
        .catch(() => offPageLoading());
    }
  };

  return (
    <BodyContent>
      <PageLoading open={isPageLoading} />
      <Container>
        <h3>User Page</h3>

        <div style={{ paddingBottom: "1%" }}></div>

        <Stack spacing={2} direction="row">
          <Link to={`/CreateUser`}>
            <Button variant="contained">สร้างข้อมูล</Button>
          </Link>
        </Stack>

        <div style={{ paddingBottom: "1%" }}></div>

        <Grid container>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <SearchBox submitChangeInput={btnSearchBox} />
          </Grid>
        </Grid>

        {!isPageLoading && <TableList data={userData} />}
      </Container>
    </BodyContent>
  );
}
