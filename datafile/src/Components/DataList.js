import React from "react";
import dataFile from "../datafile";
import DataFile from "./DataFile";


function dataList(){

    let arrayData = dataFile.map((info) => <DataFile dataFile={info}/>)
    console.log("arrayData", arrayData);

    return(
        <div className="List">
           {arrayData}
        </div>
    
    )
    
}
export default dataList;