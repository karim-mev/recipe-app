migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  // remove
  collection.schema.removeField("bawgydrs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "otpyhzfi",
    "name": "nb_likes",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bawgydrs",
    "name": "nb_likes",
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
  collection.schema.removeField("otpyhzfi")

  return dao.saveCollection(collection)
})
