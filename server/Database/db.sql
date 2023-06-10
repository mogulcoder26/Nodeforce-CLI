 mysql = require('mysql');//PLEASE RUN NPM I mysql IN BASH !

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

// Execute a query
pool.query('SELECT * FROM your_table', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }

  // Process the results
  console.log('Query results:', results);
});

// Insert a new record
const newRecord = { name: 'John', age: 30 };
pool.query('INSERT INTO your_table SET ?', newRecord, (error, results, fields) => {
  if (error) {
    console.error('Error inserting record:', error);
    return;
  }

  console.log('Record inserted successfully');
});

// Update an existing record
const recordId = 1;
const updatedRecord = { name: 'Jane', age: 35 };
pool.query('UPDATE your_table SET ? WHERE id = ?', [updatedRecord, recordId], (error, results, fields) => {
  if (error) {
    console.error('Error updating record:', error);
    return;
  }

  console.log('Record updated successfully');
});

// Delete a record
const recordIdToDelete = 2;
pool.query('DELETE FROM your_table WHERE id = ?', recordIdToDelete, (error, results, fields) => {
  if (error) {
    console.error('Error deleting record:', error);
    return;
  }

  console.log('Record deleted successfully');
});

// Close the connection pool when done
pool.end();

