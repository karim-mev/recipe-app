migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnmyr42u",
    "name": "post_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "30jv8zok899ci8g",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "username"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnmyr42u",
    "name": "post_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "30jv8zok899ci8g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
