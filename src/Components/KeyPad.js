import React from "react";
import Button from "@mui/material/Button";
import Results from "./Results";

const KeyPad = () => {
  return (
    <div>
      <h1>Calculate : </h1>
      <div>
        <div>
          <Results></Results>
        </div>
        <Button variant="contained" size="large">
          C
        </Button>
        <Button variant="contained" size="large">
          De
        </Button>
        <Button variant="contained" size="large">
          +
        </Button>
        <br></br>
        <Button variant="contained" size="large">
          -
        </Button>
        <Button variant="contained" size="large">
          x
        </Button>
        <Button variant="contained" size="large">
          /
        </Button>
      </div>
      <div>
        <div>
          <Button variant="contained" size="large">
            7
          </Button>
          <Button variant="contained" size="large">
            8
          </Button>
          <Button variant="contained" size="large">
            9
          </Button>
        </div>
        <div>
          <Button variant="contained" size="large">
            4
          </Button>
          <Button variant="contained" size="large">
            5
          </Button>
          <Button variant="contained" size="large">
            6
          </Button>
        </div>
        <div>
          <Button variant="contained" size="large">
            1
          </Button>
          <Button variant="contained" size="large">
            2
          </Button>
          <Button variant="contained" size="large">
            3
          </Button>
        </div>
        <div>
          <Button variant="contained" size="large">
            0
          </Button>
          <Button variant="contained" size="large">
            .
          </Button>
          <Button variant="contained" size="large">
            =
          </Button>
        </div>
      </div>
      <br></br>
      <div>Results</div>
    </div>
  );
};
export default KeyPad;
