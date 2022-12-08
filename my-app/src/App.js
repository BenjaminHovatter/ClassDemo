import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import openSpotsForPermit from './openSpotsForPermit.png' // relative path to image 
import yourSpot from './yourSpot.png' // relative path to image 

const App = () => {
  const [form] = Form.useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [formValues, setFormValues] = useState({});


  const [showComponent, setShowComponent] = useState(true);

  const onFinish = (values) => {
    setFormValues(values);
    setFormSubmitted(true);
  };

  const onShowSpots = () => {
    setShowPass(true);
  };

  const handlePermitClick = event => {
    // 👇️ toggle shown state
    setShowPass(current => !current);
  }
  const onClearButtonClick = () => {
    setFormSubmitted(false);
    setShowComponent(false);
  };

  if (formSubmitted) {
    return (
      <div>
        <RetrieveComponent {...formValues}></RetrieveComponent>
      </div>
    );
  }


  return (
    <div>
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        label="Licence Plate Number"
        name="licencePlateNumber"
        rules={[{ required: true, message: "Please enter your licence plate number" }]}
      >
        <Input placeholder="Licence Plate Number" />
      </Form.Item>
      <Form.Item
        label="Parking Lot Number"
        name="parkingLotNumber"
        rules={[{ required: true, message: "Please enter your parking lot number/letter" }]}
      >
        <Input placeholder="Parking Lot Number" />
      </Form.Item>
      <Form.Item
        label="Parking Space Number"
        name="parkingSpaceNumber"
        rules={[{ required: true, message: "Please enter your parking space number" }]}
      >
        <Input placeholder="Parking Space Number" />
      </Form.Item>
      <Form.Item
        label="Paring Permit Level"
        name="permitLevel"
        rules={[{ required: true, message: "Please enter your parking permit level" }]}
      >
        <Input placeholder="Parking Space Number" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    <button onClick={handlePermitClick}>Show Availible Spots for Permit</button>
    {showPass && (
        <div>
         <img src={openSpotsForPermit} width="400" alt="open spots for gold pass" />
        </div>
      )}
    </div>
    
  );
};

function RetrieveComponent(formValues) {
  const [showComponent, setShowComponent] = useState(true);

  const onButtonClick = () => {
    setShowComponent(true);
  };

  return (
    <div>
      {showComponent && <UserDataComponent {...formValues}></UserDataComponent>}
    </div>
  );
}

function UserDataComponent(formValues){
  console.log(formValues);
  return (
    <div>
      <p>Your info:</p>
      <p>Licence Plate Number: {formValues.licencePlateNumber}</p>
      <p>Parking Lot Number: {formValues.parkingLotNumber}</p>
      <p>Parking Space Number: {formValues.parkingSpaceNumber}</p>
      <p>Parking Permit Level: {formValues.permitLevel}</p>

      <img src={yourSpot} width="400" alt="location where you parked" />

    </div>
  );
}

export default App;