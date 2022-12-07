import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const App = () => {
  const [form] = Form.useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({});


  const [showComponent, setShowComponent] = useState(true);

  const onFinish = (values) => {
    setFormValues(values);
    setFormSubmitted(true);
  };

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
        rules={[{ required: true, message: "Please enter your parking lot number" }]}
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
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
      <p>You entered:</p>
      <p>Licence Plate Number: {formValues.licencePlateNumber}</p>
      <p>Parking Lot Number: {formValues.parkingLotNumber}</p>
      <p>Parking Space Number: {formValues.parkingSpaceNumber}</p>
    </div>
  );
}

export default App;