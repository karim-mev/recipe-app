migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("30jv8zok899ci8g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ongdovgr",
    "name": "users",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("30jv8zok899ci8g")

  // remove
  collection.schema.removeField("ongdovgr")

  return dao.saveCollection(collection)
})
