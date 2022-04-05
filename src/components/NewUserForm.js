import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const NewUserForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      firstName,
      lastName,
    });

    setFirstName("");
    setLastName("");
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First name</Label>
        <Input
          required
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last name</Label>
        <Input
          required
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewUserForm;
