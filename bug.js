```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.find({ age: { $gt: 25 } }, { name: 1, _id: 0 }).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
});
```