/*
 * coding-project, a program to rickroll people
 * Copyright © 2021 Kindling4204 
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or 
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
// Requires
const express = require('express');
const http = require('http');

// Set up server
const app = express();
var httpServer = http.createServer(app);

// Get / handler
app.get('/', (req, res) => {
    res.sendFile('/home/runner/coding-project/rickroll.mp4'); // send the rickroll file
});

httpServer.listen(8080); // Listen on port 8080