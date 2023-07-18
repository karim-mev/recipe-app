migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  collection.indexes = [
    "CREATE INDEX `idx_OTq7Q1O` ON `likes` (\n  `user_id`,\n  `post_id`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s0pd5wrdr3j3ynz")

  collection.indexes = []

  return dao.saveCollection(collection)
})
