# Umbrage Admin API

## Database Management

We are using the sequalize-cli tool to generate migrations and manage the database for local development and for our various environments.

> For local development it is assumed you ahve an instance of postgres running on port 5432.
>
> If this is not the case you will likely need to update the `config.js` file in the repo please do not commit these changes if you do.

[Sequalize Migration Docs](https://sequelize.org/master/manual/migrations.html)

### Commands

These are the commands found in the scripts section of the `package.json` you can use to effect the database.

`npm run db:create` - create the database in the Postgres instance.

`npm run db:drop` - drop the database in the Postgres instance:

`npm run db:g:migration {name-of-migration}` - generate a new migration

`npm run db:g:seed` - generate a new seed

`npm run db:migrate` - run the migrations on the created database

`npm run db:reset` - drop, re-create, run migrations and run seeds

`npm run db:setup` - create, run migrations and run seeds
