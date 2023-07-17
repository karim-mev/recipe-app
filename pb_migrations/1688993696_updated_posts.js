migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("30jv8zok899ci8g")

  // remove
  collection.schema.removeField("jkbk1qh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ktyocmz2",
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
    "id": "jkbk1qh5",
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
  collection.schema.removeField("ktyocmz2")

  return dao.saveCollection(collection)
})
