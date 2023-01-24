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
              inputProps={{ maxLength: 20 }}
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
                <optgroup value={1} label="Manufacturing">
                  <option value="Construction materials">
                    &nbsp;&nbsp;&nbsp;&nbsp;Construction materials
                  </option>
                  <option value="Electronics and Optics">
                    &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
                  </option>
                  <optgroup
                    value={6}
                    label=" &nbsp;&nbsp;&nbsp;&nbsp; Food and Beverage "
                  >
                    <option value="Baker&amp; confectionery products">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Baker&amp;
                      confectionery products
                    </option>
                    <option value="Beverages">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages
                    </option>
                    <option value=" Fish &amp;fish products">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fish
                      &amp; fish products{" "}
                    </option>
                    <option value="Meat &amp; meat products">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp;
                      meat products
                    </option>
                    <option value="Milk &amp; dairy products">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp;
                      dairy products{" "}
                    </option>
                  </optgroup>

                  <option value="Other">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
                  </option>
                  <option value="Sweets &amp;snack food">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets
                    &amp;snack food
                  </option>
                </optgroup>

                <optgroup value={1} label="Food &amp; Baverage">
                  <option value="Bakery &amp;confectionery products">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery
                    &amp;confectionery products
                  </option>
                  <option value="Beverages">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages
                  </option>
                  <option value="Fish &amp;fish products">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish
                    &amp;fish products{" "}
                  </option>
                  <option value="Meat &amp;meat products">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat
                    &amp;meat products
                  </option>
                  <option value="Milk &amp;dairy products">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk
                    &amp;dairy products{" "}
                  </option>
                  <option value="Other">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
                  </option>
                  <option value="weets &amp;snack food">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;weets
                    &amp;snack food
                  </option>
                </optgroup>

                <optgroup value={1} label="Furniture">
                  <option value="Bathroom/sauna">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna{" "}
                  </option>
                  <option value="Bedroom">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom
                  </option>
                  <option
                    value="Children's
                    room"
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children's
                    room{" "}
                  </option>
                  <option value="Kitchen">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen{" "}
                  </option>
                  <option value="Living room">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room{" "}
                  </option>
                  <option value="Office">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office
                  </option>
                  <option value="Other">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
                    (Furniture)
                  </option>
                  <option value="Outdoor">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor{" "}
                  </option>
                  <option
                    value="Project
                    furniture"
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project
                    furniture
                  </option>
                </optgroup>

                <optgroup value={1} label="Machinery">
                  <option value="Machinerycomponents">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinerycomponents
                  </option>
                  <option value="Machineryequipment/tools">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machineryequipment/tools
                  </option>
                  <option value="Manufactureof machinery">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufactureof
                    machinery{" "}
                  </option>
                </optgroup>

                <optgroup value={1} label="Maritime">
                  <option value="Aluminiumand steel workboats">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminiumand
                    steel workboats{" "}
                  </option>
                  <option value="Boat/Yachtbuilding">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yachtbuilding
                  </option>
                  <option value="Shiprepair and conversion">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shiprepair
                    and conversion
                  </option>
                  <option value="MetalStructures">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MetalStructures
                  </option>
                  <option value="Other">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
                  </option>
                  <option value="Repair and maintenance service ">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and
                    maintenance service
                  </option>
                </optgroup>

                <optgroup value={1} label="MetalWorking">
                  <option value="Constructionof metal structures">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Constructionof
                    metal structures
                  </option>
                  <option value="Houses and buildings">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and
                    buildings
                  </option>
                  <option value="Metal products">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal
                    products
                  </option>
                  <option value="Metal works">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works
                  </option>
                </optgroup>

                <optgroup value={1} label="Metalworks">
                  <option value="CNC-machining">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining
                  </option>
                  <option value="Forgings,Fasteners">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings,Fasteners{" "}
                  </option>
                  <option value="Gas,Plasma, Laser cutting">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas,Plasma,
                    Laser cutting
                  </option>
                  <option value="MIG,TIG, Aluminum welding">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG,TIG,
                    Aluminum welding
                  </option>
                </optgroup>

                <optgroup value={1} label="Plastic &amp; Rubber">
                  <option value="Packaging">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging
                  </option>
                  <option value="Plasticgoods">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plasticgoods
                  </option>
                </optgroup>

                <optgroup value={1} label="Plastic processing technology">
                  <option value="Blowing">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing
                  </option>
                  <option value="Moulding">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding
                  </option>
                  <option value="Plastics welding and processing">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics
                    welding and processing
                  </option>
                  <option value="Plastic profiles">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic
                    profiles
                  </option>
                </optgroup>

                <optgroup value={1} label="Printing">
                  <option value="Advertising">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising
                  </option>
                  <option value="Book/Periodical sprinting">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodical
                    sprinting
                  </option>
                  <option value="Labelling and packaging printing">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling
                    and packaging printing
                  </option>
                </optgroup>

                <optgroup value={1} label="Textile &amp; Clothing">
                  <option value="Clothing">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing
                  </option>
                  <option value="Textile">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile
                  </option>
                </optgroup>

                <optgroup value={1} label="Wood">
                  <option value="Other (Wood)">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)
                  </option>
                  <option value="Wooden building materials">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden
                    building materials
                  </option>
                  <option value="Wooden houses">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden
                    houses
                  </option>
                </optgroup>

                <optgroup value={1} label="Other">
                  <option value="Creative industries">
                    &nbsp;&nbsp;&nbsp;&nbsp;Creative industries
                  </option>
                  <option value="Energy technology">
                    &nbsp;&nbsp;&nbsp;&nbsp;Energy technology
                  </option>
                  <option value="Environment">
                    &nbsp;&nbsp;&nbsp;&nbsp;Environment
                  </option>
                </optgroup>

                <optgroup value={1} label="Service">
                  <option value="Business services">
                    &nbsp;&nbsp;&nbsp;&nbsp;Business services
                  </option>
                  <option value="Engineering">
                    &nbsp;&nbsp;&nbsp;&nbsp;Engineering
                  </option>
                </optgroup>

                <optgroup
                  value={1}
                  label="Information Technology and Telecommunications"
                >
                  <option value="Data processing, Web portals, E-marketing">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data
                    processing, Web portals, E-marketing
                  </option>
                  <option value="Programming,Consultancy">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming,Consultancy
                  </option>
                  <option value="Software,Hardware">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software,Hardware
                  </option>
                  <option value="Telecommunications">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications
                  </option>
                </optgroup>

                <option value="Tourism">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>

                <option value="Translation services">
                  &nbsp;&nbsp;&nbsp;&nbsp;Translation services
                </option>

                <optgroup value={1} label="Transport &amp; Logistic">
                  <option value="Air">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air
                  </option>
                  <option value="Rail">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail
                  </option>
                  <option value="Road">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road
                  </option>
                  <option value="Water">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water
                  </option>
                </optgroup>
              </Select>
            </FormControl>
            <div className="d-flex">
              <Checkbox required />
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
