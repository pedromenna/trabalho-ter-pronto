import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Produtora } from './Produtora.js';

export const Festas = sequelize.define('festas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  artista: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
}, {
  tableName: "festas"
});

Festas.belongsTo(Produtora, {
  foreignKey: {
    name: 'produtora_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Produtora.hasMany(Festas, {
  foreignKey: 'produtora_id'
})
