import React from 'react'

function DataFile({dataFile}) {
console.log("dataFile", dataFile);
    return (
        <div>
          <p>{dataFile.year}</p>
          <p>{dataFile.projectName}</p>
          <p>{dataFile.description}</p>
          
            
        </div>
    )
}

export default DataFile