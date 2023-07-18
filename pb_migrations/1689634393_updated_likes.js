migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  collection.createRule = "@request.auth.id != \"\" && (user_id != @request.auth.id && post_id != @request.data.post_id)"
  collection.updateRule = "@request.auth.id != \"\" && liked != true"

  // remove
  collection.schema.removeField("97vdmxmw")

  // remove
  collection.schema.removeField("otpyhzfi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kd9yorl3",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nvps5wr6",
    "name": "liked",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  collection.createRule = null
  collection.updateRule = null

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

  // remove
  collection.schema.removeField("kd9yorl3")

  // remove
  collection.schema.removeField("jnmyr42u")

  // remove
  collection.schema.removeField("nvps5wr6")

  return dao.saveCollection(collection)
})
