import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;

`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Label = styled.label``;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.usuario.value = onEdit.usuario;
            user.email.value = onEdit.email;
            user.senha.value = onEdit.senha;
            user.usuario_admin.value = onEdit.usuario_admin;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if(
        !user.nome.value ||
        !user.usuario.value ||
        !user.email.value ||
        !user.senha.value ||
        !user.usuario_admin.value
    ) {
        return toast.warn("Preencha todos os campos!");
    }

    if(onEdit) {
        await axios
        .put("http://localhost:8801/users/" + onEdit.id, {
            nome: user.nome.value,
            usuario: user.usuario.value,
            email: user.email.value,
            senha: user.senha.value,
            usuario_admin: user.usuario_admin.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }else{
        await axios
        .post("http://localhost:8801/users/", {
            nome: user.nome.value,
            usuario: user.usuario.value,
            email: user.email.value,
            senha: user.senha.value,
            usuario_admin: user.usuario_admin.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.usuario.value = "";
    user.email.value = "";
    user.senha.value = "";
    user.usuario_admin.value = "";
    
    setOnEdit(null);
    getUsers();
    };

    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>Usuário</Label>
                <Input name="usuario" />
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email" />
            </InputArea>
            <InputArea>
                <Label>Senha</Label>
                <Input name="senha" />
            </InputArea>
            <InputArea>
                <Label>Admin</Label>
                <Input name="usuario_admin" />
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>
    );
};

export default Form;