migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  // remove
  collection.schema.removeField("o6ivnhsn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t28fmah1",
    "name": "users",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o6ivnhsn",
    "name": "users",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("t28fmah1")

  return dao.saveCollection(collection)
})
