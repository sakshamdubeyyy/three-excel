import React from 'react';
import * as XLSX from 'xlsx';

const ExcelReader = ({ setData }) => {
    const handleFileUpload = (e) => {
        const file = e.target.files ? e.target.files[0] : null;
        
        if (!file) {
            console.error('No file selected or incorrect file input.');
            return;
        }

        const reader = new FileReader();
        
        reader.onload = (event) => {
          const data = new Uint8Array(event.target.result);
          
          if (!data) {
              console.error('Error reading file, no data.');
              return;
          }

          try {
              const workbook = XLSX.read(data, { type: 'array' });
              const worksheet = workbook.Sheets[workbook.SheetNames[0]];

              // Read Excel data
              const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
              console.log('Raw Excel Data:', jsonData);

              // Process rows and map columns to x, y coordinates (without z)
              const structuredData = jsonData.slice(1).map(row => ({
                number: row[0],  // Member column
                x: row[1],       // Start Node column
                y: row[2],       // End Node column
                z: 0,            // Default z-coordinate (since it's missing in the file)
              })).filter(row => row.x !== undefined && row.y !== undefined);  // Filter out invalid rows

              console.log('Structured data:', structuredData);

              // Pass the structured data for rendering
              setData(structuredData);
          } catch (error) {
              console.error('Error processing Excel file:', error);
          }
        };

        reader.readAsArrayBuffer(file);
    };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
    </div>
  );
};

export default ExcelReader;
