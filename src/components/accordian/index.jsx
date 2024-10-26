/* eslint-disable no-unused-expressions */
import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enablemultiselection, setEnablemultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log("Single selection clicked. Current ID:", getCurrentId);
    const newSelected = getCurrentId === selected ? null : getCurrentId;
    setSelected(newSelected);
    console.log("Updated selected:", newSelected);
  }

  function handleMultiSelection(getCurrentId) {
    console.log("Multi-selection clicked. Current ID:", getCurrentId);
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
      console.log("Added ID to multiple:", copyMultiple);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
      console.log("Removed ID from multiple:", copyMultiple);
    }

    setMultiple(copyMultiple);
  }

  console.log("Selected ID:", selected);
  console.log("Multiple selected IDs:", multiple);
  console.log("Is multi-selection enabled?", enablemultiselection);

  return (
    <div className="wrapper">
      <button
        className="btn"
        onClick={() => {
          const newEnableMultiSelection = !enablemultiselection;
          setEnablemultiselection(newEnableMultiSelection);
          console.log(
            "Toggled multi-selection. Now enabled:",
            newEnableMultiSelection
          );
        }}
      >
        {enablemultiselection ? "Disable" : "Enable"} multi-selection
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                className="title"
                onClick={() =>
                  enablemultiselection
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {(enablemultiselection
                ? multiple.includes(dataItem.id)
                : selected === dataItem.id) && (
                <div className="content">
                  {dataItem.answer}
                  {console.log("Displaying content for ID:", dataItem.id)}
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
