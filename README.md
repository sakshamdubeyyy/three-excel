Three-Excel Project
This project allows users to upload an Excel file with specific data (such as member, start node, end node), which is then rendered as a 3D visualization using React Three Fiber. Each data point is represented by a 3D box in the scene.

Live Demo
Check out the live version of the project here.

How to Run Locally

1. Clone the repository:

git clone https://github.com/sakshamdubeyyy/three-excel.git

2. Navigate to the project directory:

cd three-excel

3. Install dependencies:

npm install

4. Start the development server:

npm start

5. Open your browser and go to http://localhost:3000 to view the project.

Features
Upload Excel files (.xlsx, .xls) with member, start node, and end node data.
The data points from the file are rendered as 3D objects in the browser.
Interactive 3D visualization using React Three Fiber.
Orbit controls for easy navigation of the 3D scene.
File Upload
Ensure that your Excel file has the following structure:

Member	Start Node	End Node
1	4	30
2	32	8
...	...	...
Only files with .xlsx or .xls extensions are accepted.

Dependencies
React: Frontend framework for building the UI.
React Three Fiber: For 3D rendering.
Three.js: 3D library used in combination with React Three Fiber.
XLSX: JavaScript library to parse Excel files.