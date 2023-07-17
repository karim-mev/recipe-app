migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  collection.updateRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
