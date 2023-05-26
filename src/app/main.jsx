import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Toolbar,
  ToolbarItem,
  Button,
  ButtonGroup
} from "@progress/kendo-react-buttons";
import { DropDownList } from "@progress/kendo-react-dropdowns";
const App = () => {
  const sizes = ["small", "medium", "large", "null"];
  const [size, setSize] = React.useState("medium");
  return (
    <React.Fragment>
      <div className="example-config row">
        <div className="col-md-6 row">
          <label
            style={{
              //marginRight: '15px',
              // verticalAlign:'middle',
              margin: 0,
              padding: "0.25rem .5rem",
              fontSize: "1rem",
              // whiteSpace: 'nowrap',
              color: "#a1a1a1"
            }}
          >
            Fund
          </label>
          <DropDownList
            style={{
              width: "200px"
            }}
            data={sizes}
            defaultValue="medium"
            onChange={(e) => setSize(e.value)}
          />
        </div>
      </div>
      <Toolbar size={size}>
        <ToolbarItem>
          <ButtonGroup>
            <Button icon="bold" title="Bold" togglable={true} />
            <Button icon="italic" title="Italic" togglable={true} />
            <Button icon="underline" title="Underline" togglable={true} />
          </ButtonGroup>
        </ToolbarItem>
      </Toolbar>
    </React.Fragment>
  );
};
ReactDOM.render(<App />, document.querySelector("my-app"));
