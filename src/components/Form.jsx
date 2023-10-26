import { useState } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const [input, setInput] = useState({
    station: "",
    description: "",
    name: "",
    lastName1: "",
    lastName2: "",
    client: "",
    number: "",
    email: "",
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const { number, email } = input;

    if (number && !/^\d{10}$/.test(number)) {
      alert(
        'El campo "Número de teléfono" debe contener exactamente 10 dígitos numéricos.'
      );
      return false;
    }

    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      alert("Por favor, ingrese una dirección de correo electrónico válida.");
      return false;
    }

    const generalValidationFields = [
      "station",
      "name",
      "lastName1",
      "lastName2",
      "client",
    ];
    for (const field of generalValidationFields) {
      if (!input[field] || !/^[a-zA-Z\s,.]+$/.test(input[field])) {
        alert(
          `Los campos con nombres o apellidos no deben contener números ni símbolos.`
        );
        return false;
      }
    }

    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      !input.station ||
      !selectedOption ||
      !input.description ||
      !input.name ||
      !input.lastName1 ||
      !input.client
    ) {
      alert("Por favor complete todos los campos obligatorios.");
      return;
    }

    if (!input.number && !input.email) {
      alert(
        "Debe proporcionar al menos un número de teléfono o una dirección de correo electrónico."
      );
      return;
    }

    if (!validateForm()) {
      return;
    }

    const variables = {
      ...input,
      queja: selectedOption,
    };

    emailjs
      .send(
        "service_afq7dll",
        "template_vevuvhe",
        variables,
        "DxTMuo6MhsoqoG14Z"
      )
      .then(alert("Queja enviada exitosamente"));

    setSelectedOption("");
    setInput({
      station: "",
      description: "",
      name: "",
      lastName1: "",
      lastName2: "",
      client: "",
      number: "",
      email: "",
    });
  };

  return (
    <Container>
      <Title>Formulario de quejas anticorrupción</Title>
      <form>
        <Question>1. Nombre de la estación de servicio:</Question>
        <InputText
          type="text"
          name="station"
          value={input.station}
          onChange={handleChange}
        />
        <Question>{`2. Seleccione la queja asociada al acto de corrupción que se denuncia. (Nota: Debe seleccionar una opción para poderle dar seguimiento a su queja.)`}</Question>
        <Options>
          <label>
            <input
              type="radio"
              value="opcion1"
              checked={selectedOption === "opcion1"}
              onChange={handleOptionChange}
            />
            Opción 1
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="opcion2"
              checked={selectedOption === "opcion2"}
              onChange={handleOptionChange}
            />
            Opción 2
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="opcion3"
              checked={selectedOption === "opcion3"}
              onChange={handleOptionChange}
            />
            Opción 3
          </label>
        </Options>
        <Question>3. Descripción de la queja:</Question>
        <TextArea
          name="description"
          value={input.description}
          onChange={handleChange}
        ></TextArea>
        <Question>4. Nombre del personal implicado.</Question>
        <SubContainer>
          <Question>Nombre(s):</Question>
          <InputText
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <Question>Apellido paterno:</Question>
          <InputText
            type="text"
            name="lastName1"
            value={input.lastName1}
            onChange={handleChange}
          />
          <Question>Apellido materno:</Question>
          <InputText
            type="text"
            name="lastName2"
            value={input.lastName2}
            onChange={handleChange}
          />
        </SubContainer>
        <Question>5. Datos del cliente.</Question>
        <SubContainer>
          <Question>Nombre completo:</Question>
          <InputText
            type="text"
            name="client"
            value={input.client}
            onChange={handleChange}
          />
          <Question>Proporcionenos al menos una forma de contactarlo.</Question>
          <SubContainer>
            <Question>Número de teléfono o celular:</Question>
            <InputText
              type="tel"
              name="number"
              value={input.number}
              onChange={handleChange}
            />
            <Question>Correo electrónico:</Question>
            <InputText
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </SubContainer>
        </SubContainer>
        <Center>
          <Button onClick={(e) => onSubmit(e)}>Enviar</Button>
        </Center>
      </form>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  background: rgb(230, 243, 230);
  margin: 10px 30px;
  border-radius: 15px;
  padding: 20px;
`;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Question = styled.h3`
  text-align: justify;
  margin-bottom: 5px;
  font-size: 18px;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin: 10px;
  padding: 5px;
  outline: none;
  border-radius: 5px;
  border: 1px solid green;
`;

const InputText = styled.input`
  width: 50%;
  outline: none;
  margin: 10px;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid green;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const SubContainer = styled.div`
  margin: 10px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  padding: 5px;
  border-radius: 5px;
  background: #46e146;
  border: 1px solid green;
  font-size: 20px;

  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
