const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = requize('sequelize');

// 1. CONFIGURANDO CONEXÂO COM O BANCO DE DADOS
const sequelize = new Sequelize('db_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// 2. DEFININDO O MODELO DE DADOS COMO DEVE SER A TABELA NO BANCO DE DADOS
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypess.STRING,
        allowNull: false
    }
});