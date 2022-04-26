1. restore shema

```sh
pg_restore -v --host=127.0.0.1 --port=5432 --dbname=yudbname --user=yuuser --schema=public --no-owner --no-privileges schema_godb.dump
```

2. restore data

```sh
pg_restore --host=127.0.0.1 --port=5432 --dbname=yudbname --user=yuuser --schema=public -v -a -Fc data_godb.dump
```
