import { useState } from "react";
import { Button, Col } from "react-bootstrap";
// import Multiselect from "react-bootstrap-multiselect";
// import * as mdb from "mdb-ui-kit";
// import { Multiselect } from "multiselect-react-dropdown";
import { MultiSelect } from "react-multi-select-component";
// import "./CropsDropDown.css";

const CropsDropDown = ({ currentCrops, currentZipcode, findUsers }) => {
  //want to make it so we can search multiple crops
  const displayedCrops = currentCrops;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClick = () => {
    console.log(selectedOptions);
    const selectedCropArray = [];
    for (const crop of selectedOptions) {
      selectedCropArray.push(crop.label);
    }
    // console.log(selectedCropArray);
    findUsers(currentZipcode, selectedCropArray);
  };
  return (
    <div style={{ width: "40%", justifyContent: "center", display: "flex" }}>
      <Col xs={10}>
        <MultiSelect
          onChange={setSelectedOptions}
          options={displayedCrops}
          value={selectedOptions}
          labelledBy="Crops"
        >
          Filter by Crops
        </MultiSelect>
      </Col>
      <Col xs={{ offset: 3, span: 8 }}>
        <Button onClick={handleOnClick}>Search Crops</Button>
      </Col>
    </div>
  );
};

export default CropsDropDown;
