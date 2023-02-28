import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/authContext/authContext";
import "./Login.css";
export const Login = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  // console.log(inputValues)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const formData = {
    email: inputValues.email,
    password: inputValues.password,
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await authContext.signinUser(formData);
  };
  const styleTheme1 = { background: "black", color: "white" };

  return (
    <>
      <div className="login" style={styleTheme1}>
        <div className="container">
          <Grid
            container
            alignItems="center"
            justifyContent="space-around"
            direction="row"
          >
            <Grid item>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
              >
                <Grid item>
                  <img src="logo1.png" alt="logo" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="text-center">
              <Paper elevation={3}>
                <Box py={6} px={3} width="400px">
                  <form onSubmit={handleFormSubmit}>
                    <Grid
                      spacing={1}
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item container>
                        <TextField
                          type="email"
                          name="email"
                          fullWidth
                          value={inputValues.email}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          label="Email"
                        />
                      </Grid>
                      <Grid item container>
                        <TextField
                          fullWidth
                          name="password"
                          value={inputValues.password}
                          onChange={handleChange}
                          type="password"
                          size="small"
                          variant="outlined"
                          label="Password"
                        />
                      </Grid>
                      <Grid item container>
                        <Button
                          color="primary"
                          fullWidth
                          size="large"
                          variant="contained"
                          type="submit"
                        >
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                  <Box my={2}>
                    <Grid
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={1}
                      container
                      direction="row"
                    >
                      <Grid item>
                        <Button
                          variant="text"
                          style={{
                            textTransform: "none",
                          }}
                        >
                          Forgot password
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          onClick={() => {
                            history.push("/signup");
                          }}
                          variant="contained"
                          style={{
                            color: "black",
                            background: "#FFBD59",
                          }}
                        >
                          Create Account
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
