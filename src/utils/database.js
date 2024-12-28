const fs = require("fs");
const path = require("path");

// Read data from a JSON file
function readData() {
  const jsonFilePath = "data/categories.json";
  const absolutePath = path.resolve(jsonFilePath); // Convert to absolute path

  // Ensure the directory exists
  const dirPath = path.dirname(absolutePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true }); // Create directories if they don't exist
  }

  // Ensure the file exists
  if (!fs.existsSync(absolutePath)) {
    fs.writeFileSync(absolutePath, JSON.stringify([])); // Create an empty array as initial data
  }

  // Read data from the file
  const data = fs.readFileSync(absolutePath, "utf-8");
  return JSON.parse(data);
}

// Write data to a JSON file
function writeData(jsonFilePath, data) {
  const absolutePath = path.resolve(jsonFilePath);
  fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2), "utf-8");
}

// CRUD helpers
const database = {
  create(jsonFilePath, newRecord) {
    const data = readData(jsonFilePath);
    data.push(newRecord);
    writeData(jsonFilePath, data);
    return newRecord;
  },
  readAll(jsonFilePath) {
    return readData(jsonFilePath);
  },
  update(jsonFilePath, id, updatedRecord) {
    const data = readData(jsonFilePath);
    const index = data.findIndex((record) => record.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedRecord };
      writeData(jsonFilePath, data);
      return data[index];
    }
    throw new Error(`Record with ID ${id} not found.`);
  },
  delete(jsonFilePath, id) {
    const data = readData(jsonFilePath);
    const filteredData = data.filter((record) => record.id !== id);
    writeData(jsonFilePath, filteredData);
    return { success: true };
  },
};

module.exports = database;
