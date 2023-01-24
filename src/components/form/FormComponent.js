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
                  <option value="19">
                    &nbsp;&nbsp;&nbsp;&nbsp;Construction materials
                  </option>
                  <option value="18">
                    &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
                  </option>
                  <optgroup
                    value={6}
                    label=" &nbsp;&nbsp;&nbsp;&nbsp; Food and Beverage "
                  >
                    <option value="342">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery
                      &amp; confectionery products
                    </option>
                    <option value="43">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages
                    </option>
                    <option value="42">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp;
                      fish products{" "}
                    </option>
                    <option value="40">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp;
                      meat products
                    </option>
                    <option value="39">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp;
                      dairy products{" "}
                    </option>
                  </optgroup>

                  <option value="437">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
                  </option>
                  <option value="378">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp;
                    snack food
                  </option>
                </optgroup>

                <optgroup value={1} label="Food &amp; Baverage">
                  <option value="389">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp;
                    confectionery products
                  </option>
                  <option value="385">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages
                  </option>
                  <option value="390">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp;
                    fish products{" "}
                  </option>
                  <option value="98">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp;
                    meat products
                  </option>
                  <option value="101">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp;
                    dairy products{" "}
                  </option>
                  <option value="394">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
                  </option>
                  <option value="341">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;weets &amp;
                    snack food
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
                  <option value="94">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
                    components
                  </option>
                  <option value="91">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
                    equipment/tools
                  </option>
                  <option value="224">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture
                    of machinery{" "}
                  </option>
                </optgroup>

                <optgroup value={1} label="Maritime">
                  <option value="271">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium
                    and steel workboats{" "}
                  </option>
                  <option value="269">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht
                    building
                  </option>
                  <option value="230">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship
                    repair and conversion
                  </option>
                  <option value="230">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal
                    Structures
                  </option>
                  <option value="230">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
                  </option>
                  <option value="227">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and
                    maintenance service
                  </option>
                </optgroup>

                <optgroup value={1} label="MetalWorking">
                  <option value="67">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction
                    of metal structures
                  </option>
                  <option value="263">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and
                    buildings
                  </option>
                  <option value="267">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal
                    products
                  </option>
                  <option value="542">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works
                  </option>
                </optgroup>

                <optgroup value={1} label="Metalworks">
                  <option value="75">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining
                  </option>
                  <option value="62">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings,
                    Fasteners{" "}
                  </option>
                  <option value="69">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas,
                    Plasma, Laser cutting
                  </option>
                  <option value="66">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG,
                    TIG, Aluminum welding
                  </option>
                </optgroup>

                <optgroup value={1} label="Plastic &amp; Rubber">
                  <option value="54">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging
                  </option>
                  <option value="556">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic
                    goods
                  </option>
                </optgroup>

                <optgroup value={1} label="Plastic processing technology">
                  <option value="55">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing
                  </option>
                  <option value="57">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding
                  </option>
                  <option value="53">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics
                    welding and processing
                  </option>
                  <option value="560">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic
                    profiles
                  </option>
                </optgroup>

                <optgroup value={1} label="Printing">
                  <option value="148">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising
                  </option>
                  <option value="150">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals
                    printing
                  </option>
                  <option value="145">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling
                    and packaging printing
                  </option>
                </optgroup>

                <optgroup value={1} label="Textile &amp; Clothing">
                  <option value="44">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing
                  </option>
                  <option value="45">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile
                  </option>
                </optgroup>

                <optgroup value={1} label="Wood">
                  <option value="337">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)
                  </option>
                  <option value="51">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden
                    building materials
                  </option>
                  <option value="47">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden
                    houses
                  </option>
                </optgroup>

                <optgroup value={1} label="Other">
                  <option value="37">
                    &nbsp;&nbsp;&nbsp;&nbsp;Creative industries
                  </option>
                  <option value="29">
                    &nbsp;&nbsp;&nbsp;&nbsp;Energy technology
                  </option>
                  <option value="33">
                    &nbsp;&nbsp;&nbsp;&nbsp;Environment
                  </option>
                </optgroup>

                <optgroup value={1} label="Service">
                  <option value="25">
                    &nbsp;&nbsp;&nbsp;&nbsp;Business services
                  </option>
                  <option value="35">
                    &nbsp;&nbsp;&nbsp;&nbsp;Engineering
                  </option>
                </optgroup>

                <optgroup
                  value={1}
                  label="Information Technology and Telecommunications"
                >
                  <option value="581">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data
                    processing, Web portals, E-marketing
                  </option>
                  <option value="576">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming,
                    Consultancy
                  </option>
                  <option value="121">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software,
                    Hardware
                  </option>
                  <option value="122">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications
                  </option>
                </optgroup>

                <option value="22">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>

                <option value="141">
                  &nbsp;&nbsp;&nbsp;&nbsp;Translation services
                </option>

                <optgroup value={1} label="Transport &amp; Logistic">
                  <option value="111">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air
                  </option>
                  <option value="114">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail
                  </option>
                  <option value="112">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road
                  </option>
                  <option value="113">
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
