migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("30jv8zok899ci8g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o7m6yr3h",
    "name": "likes",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hhiv5a2w",
    "name": "comments",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("30jv8zok899ci8g")

  // remove
  collection.schema.removeField("o7m6yr3h")

  // remove
  collection.schema.removeField("hhiv5a2w")

  return dao.saveCollection(collection)
})
