var XLSX = require("xlsx");

const ConvertToJSON=()=>{
    const excel= XLSX.readFile("C:\\Users\\vatil\\Documents\\Tarea\\Agosto-Dec 2022\\Taller de productividad basada en herramientas Tecnologicas\\datos.xlsx");
    var pageName=excel.SheetNames;
    let data= XLSX.utils.sheet_to_json(excel.Sheets[pageName[0]]);

    const jData=[];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        jData.push({
            ...element,
            date: new Date((element.date - (25567+2)) * 86400 * 1000)
        })
    }
    console.log(jData);
};
ConvertToJSON();