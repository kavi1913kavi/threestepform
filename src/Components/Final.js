import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";


const Final = ({ values }) => {

  const { firstName, lastName, age, email } = values;

  const handleSubmit=()=>{
      window.location.reload();
  }
  return (
    <>
      <Card style={{ marginTop: 100}}>
      <Card.Header>Step 3</Card.Header>
        <Card.Body style={{textAlign: "left" }}>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
        </Card.Body>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
      </Card>
    </>
  );
};

export default Final;
