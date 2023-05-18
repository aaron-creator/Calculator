import { Button, Input } from "@mui/material";
import React from "react";
import { ButtonItem } from "./ButtonItem";
import "../styles/button.css"

const ButtonScreen = () => {
  const btns = [0,1,2,3,4,5,6,7,8,9];

  return (
    <div>
      <h1>Menu </h1>
      <br></br>
        <div className = "menu_bar">
          <Input />
          <div>
              <Button >Add</Button>
              <Button>Subtract</Button>
              <Button>Multiply</Button>
              <Button>Divide</Button>
              <Button>Ans</Button>
              <Button>Delete</Button>
              <Button>C</Button>
          </div>
          <div className="button_menu">

            <div className= "button_row">
                <ButtonItem item={btns[0]}/>
                <ButtonItem item={btns[1]}/>
                <ButtonItem item={btns[2]}/>
            </div>
            <div className= "button_row">
                <ButtonItem item={btns[3]}/>
                <ButtonItem item={btns[4]}/>
                <ButtonItem item={btns[5]}/>
            </div>
            <div className= "button_row">
                <ButtonItem item={btns[6]}/>
                <ButtonItem item={btns[7]}/>
                <ButtonItem item={btns[8]}/>
            </div>
          </div>
          

        </div>
        
      
    </div>
  );
};
export default ButtonScreen;
