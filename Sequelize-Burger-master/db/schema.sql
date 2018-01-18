-- Set up locally

CREATE DATABASE burgers_db;

` sequelize db:migrate `
` sequelize db:seed:all `

` sequelize init `

` sequelize model:create --name Burgers --attributes "burger_name:string devoured:boolean" `

` sequelize model:create --name Menus --attributes "item:string entree:boolean" `

` sequelize db:migrate `

` sequelize seed:create --name burgers-seed `
` sequelize seed:create --name menus-seed `

` sequelize db:seed:all `