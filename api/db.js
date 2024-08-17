const Sequelize = require('sequelize')

const sequelize = new Sequelize('db123', 'adi_node', 'root123', {
    host: 'postgresdb',
    dialect:  'postgres' ,
    logging:false,
    port:5432,
    // idleTimeoutMillis: 0,
    // connectionTimeoutMillis: 0,
  },{
  timestamps: false
});
//
module.exports = sequelize;
