'use strict';

const userData = require('../data/users');

const login = async (req, res) => {
    try {
        const userName = req.body.username;
        const passWord = req.body.passWord;
        if (!userName || !passWord) return res.status(400).send({ code: -1, message: "Vui lòng hãy nhập ký tự. Không đươc bỏ trống" });
        const user = await userData.login(userName, passWord);
        if (user[0][0].outputNumber == 0) res.status(200).json(user[3][0]);
        else return res.status(404).json({ code: user[0][0].outputNumber, message: user[0][0].outputResult });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

const getAllEmployees = async (req, res) => {
    try {
        const employees = await userData.getAllEmployees();
        res.status(200).json(employees);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const customers = await userData.getAllCustomers();
        res.status(200).json(customers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

const getAllBrokers = async (req, res) => {
    try {
        const brokers = await userData.getAllBrokers();
        res.status(200).json(brokers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

module.exports = {
    login,
    getAllEmployees,
    getAllCustomers,
    getAllBrokers
};