migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  collection.updateRule = "@request.auth.id != \"\" && (user != @request.auth.id && id != @request.data.id)"

  // remove
  collection.schema.removeField("t28fmah1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "97vdmxmw",
    "name": "user",
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
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  collection.updateRule = null

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

  // remove
  collection.schema.removeField("97vdmxmw")

  return dao.saveCollection(collection)
})
