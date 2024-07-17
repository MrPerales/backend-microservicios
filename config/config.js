require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  mysqlHost: process.env.DB_HOST,
  mysqlUser: process.env.DB_USER,
  mysqlPassword: process.env.DB_PASSWORD,
  mysqlDatabase: process.env.DB_NAME,
  mysqlPort: process.env.DB_PORT,
  pgAdminMail: process.env.PG_MAIL,
  pgAdminPassword: process.env.PG_PASSWORD,
  pgAdminPort: process.env.PG_PORT,
  pgAdminRefPort: process.env.PG_REFPORT,
  mysqlServicePort: process.env.MYSQL_SERVICE_PORT,
  mysqlServiceHost: process.env.MYSQL_SERVICE_HOST,
  postPort: process.env.POST_PORT,
};

module.exports = { config };
