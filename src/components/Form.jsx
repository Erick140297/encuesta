import { useState } from "react";
import styled from "styled-components";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const [input, setInput] = useState({
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

  const onSubmit = (e) => {
    e.preventDefault();
    
    setSelectedOption("");
    setInput({
      ...input,
      description: "",
      name: "",
      lastName1: "",
      lastName2: "",
      client: "",
      number: "",
      email: "",
    });
  };

  console.log(input);

  return (
    <Container>
      <Title>Formulario de quejas anticorrupción</Title>
      <form>
        <Question>{`1. Seleccione la queja asociada al acto de corrupción que se denuncia. (Nota: Debe seccionar una opción para poderle dar seguimiento a su queja.)`}</Question>
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
        <Question>2. Descripción de la queja:</Question>
        <TextArea
          name="description"
          value={input.description}
          onChange={handleChange}
        ></TextArea>
        <Question>3. Nombre del personal implicado.</Question>
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
        <Question>4. Datos del cliente.</Question>
        <SubContainer>
          <Question>Nombre completo:</Question>
          <InputText
            type="text"
            name="client"
            value={input.client}
            onChange={handleChange}
          />
          <Question>Número de telefono o celular:</Question>
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
`;
