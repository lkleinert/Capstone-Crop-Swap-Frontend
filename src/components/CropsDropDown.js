import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";

const CropsDropDown = ({ currentCrops, currentZipcode, findUsers }) => {
  //displayedCrops populates dropdown options
  const displayedCrops = currentCrops;

  //dropdown menu holds state for selectedOptions
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClick = () => {
    console.log(selectedOptions);
    const selectedCropArray = [];
    for (const crop of selectedOptions) {
      selectedCropArray.push(crop.label);
    }
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
