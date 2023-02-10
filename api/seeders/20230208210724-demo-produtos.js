'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Produtos', [{
    nome: 'cimento',
    marca: 'Liz',
    valor: '35',
    createdAt: new Date(),
    updatedAt: new Date()
   },
    {
    nome: 'argamassa ac1',
    marca: 'Fixar',
    valor: '12',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
   nome: 'rejunte',
   marca: 'Fixar',
   valor: '5',
   createdAt: new Date(),
   updatedAt: new Date()
  },
  {
   nome: 'pu 40',
   marca: 'Tec',
   valor: '22',
   createdAt: new Date(),
   updatedAt: new Date()
  },
  {
    nome: 'massa plastica',
    marca: 'Gol',
    valor: '15',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'sika 1',
    marca: 'Sikadu',
    valor: '18',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'graxa pote',
    marca: 'Gr',
    valor: '10',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    nome: 'aguarraz',
    marca: 'Prime',
    valor: '20',
    createdAt: new Date(),
    updatedAt: new Date()
   },])
  },
 

 async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Produtos',null,{})
  }
};
