const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../db/dashen-tour.db");

// Test
db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT,name TEXT)");

  const stmt = db.prepare("INSERT INTO lorem VALUES (?,?)");
  for (let i = 0; i < 10; i++) {
    stmt.run("Ipsum " + i, "Dagim");
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
    console.log(row.id + ": " + row.info + " " + row.name);
  });
});

db.close();
