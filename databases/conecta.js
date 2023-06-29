import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "ultimotrabalho", "root", "teste", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});



//CONECTA.JS PARA TRABALHO PRESENCIAL
// import { Sequelize } from 'sequelize';

// export const sequelize = new Sequelize(
//   "ultimotrabalho2", "root", "senacrs", {
//   dialect: "mysql",
//   host: "localhost",
//   port: 3306
// });
