import React from "react";

import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  Button,
  Stack,
  Select,
  Box,
  Checkbox,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const FormComponent = ({ info, setInfo, handleSubmit, isAdd }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    console.log(info);
  };
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ width: "300" }}
    >
      <p className="contact-header">
        <div>
          <a
            href="https://github.com/ozkan4186"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{"<MadeBy_Ozkan/> "}</code>
          </a>
        </div>
        <span className="design header">design</span>
      </p>
      <h2 className="contact-header">Add Contact</h2>

      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              value={info.username}
              onChange={handleChange}
              required
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="value">Sectors</InputLabel>
              <Select
                native
                defaultValue=""
                // id="value"
                label="Sectors"
                name="sectors"
                value={info.sectors}
                onChange={handleChange}
              >
                <option aria-label="None" value="" />
                <optgroup label="Category 1">
                  <option value={"Option 1"}>Option 1</option>
                  <option value={2}>Option 2</option>
                </optgroup>
                <optgroup label="Category 2">
                  <option value={3}>Option 3</option>
                  <option value={4}>Option 4</option>
                </optgroup>
              </Select>
            </FormControl>
            <div className="d-flex">
              <Checkbox   required />
              <span>Agree to terms</span>
            </div>

            <Button variant="contained" type="submit" value="Submit">
              {isAdd}
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  ); 
};

export default FormComponent;
