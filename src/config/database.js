module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5430,
  username: 'admin',
  password: 'admin',
  database: 'fastfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
