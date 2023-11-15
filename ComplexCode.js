/*
Filename: ComplexCode.js
Description: A complex JavaScript program that demonstrates various advanced concepts and functionality.
*/

// Importing required libraries
const axios = require('axios');
const readline = require('readline');
const fs = require('fs');

// Constants
const API_KEY = 'YOUR_API_KEY';
const FILE_NAME = 'data.txt';

// Function to fetch data from an API
async function fetchData() {
  try {
    const response = await axios.get(`https://api.example.com/data?api_key=${API_KEY}`);
    const data = response.data;
    // Process the data further
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
}

// Function to write data to a file
function writeToFile(data) {
  fs.writeFile(FILE_NAME, JSON.stringify(data), (err) => {
    if (err) {
      console.error('Failed to write to file:', err);
    } else {
      console.log('Data written to file successfully.');
    }
  });
}

// Function to read data from a file
function readFromFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(FILE_NAME, 'utf8', (err, data) => {
      if (err) {
        console.error('Failed to read from file:', err);
        reject(err);
      } else {
        const parsedData = JSON.parse(data);
        resolve(parsedData);
      }
    });
  });
}

// Function to perform a complex computation
function performComputation(data) {
  let result = 0;

  for (let i = 0; i < data.length; i++) {
    result += data[i] ** 2;
  }

  return result;
}

// Function to handle user input using readline
function handleUserInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Please enter your name: ', (name) => {
    console.log(`Hello, ${name}! We will now fetch and process some data.`);

    fetchData()
      .then((data) => {
        console.log('Data fetched successfully:', data);

        writeToFile(data);

        return performComputation(data);
      })
      .then((result) => {
        console.log('Complex computation result:', result);

        return readFromFile();
      })
      .then((fileData) => {
        console.log('Data read from file:', fileData);

        rl.close();
      })
      .catch((error) => {
        console.error('An error occurred:', error);

        rl.close();
      });
  });
}

// Entry point of the program
handleUserInput();