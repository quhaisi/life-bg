const Sequelize = require('sequelize')

const config = {
  database: 'life',
  username: 'root',
  password: '229326',
  host: '127.0.0.1',
  port: 3306
}
const life = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  define: {
    timestamps: false
  }
})

const modelDefiners = [
	require('./models/user.model'),
	require('./models/album.model'),
	// require('./models/instrument.model'),
	// require('./models/orchestra.model'),
	// Add more models here...
	// require('./models/item'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(life, Sequelize.DataTypes);
}

module.exports = life