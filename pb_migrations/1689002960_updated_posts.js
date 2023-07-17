migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("30jv8zok899ci8g")

  // remove
  collection.schema.removeField("o7m6yr3h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1m3yjegm",
    "name": "likes",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "s0pd5wrdr3j3ynz",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("1m3yjegm")

  return dao.saveCollection(collection)
})
