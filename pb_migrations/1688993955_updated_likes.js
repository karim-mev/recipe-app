migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  // remove
  collection.schema.removeField("ia0noe4l")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ia0noe4l",
    "name": "liked_post",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
