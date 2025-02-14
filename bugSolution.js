```javascript
// Corrected query to only return the 'name' field
db.users.find({ age: { $gt: 25 } }, { name: 1, _id: 0 }).toArray(function(err, result) {
  if (err) throw err;
  console.log(result); // Now only contains the 'name' field
});
```