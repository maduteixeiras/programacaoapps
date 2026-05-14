const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 1. CONFIGURANDO CONEXÃO COM O BANCO DE DADOS
const sequelize = new Sequelize('db_api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// 2. DEFININDO O MODELO
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
        type: DataTypes.STRING,
        allowNull: false
    }
});

// 4. ROTAS

// GET - LISTAR CLIENTES
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

// POST - CRIAR CLIENTE
app.post('/clientes', async (req, res) => {
    const { nome, email, telefone } = req.body;

    try {
        const novoCliente = await Cliente.create({
            nome,
            email,
            telefone
        });

        res.status(201).json(novoCliente);

    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente' });
    }
});

// 5. INICIANDO O SERVIDOR
sequelize.sync()
.then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
        console.log('Banco de dados sincronizado com sucesso!');
    });
})
.catch(error => {
    console.error('Erro ao conectar com o banco de dados:', error);
});