//all the path given relatively to mrmlToJson.js script
module.exports = {
    mrmlFileLocation : "../../AbdominalAtlas-2015Sept-Slicer4-4Version.mrml",
    colorTableFileLocation : "../../Data/AbdominalAtlasColors.ctbl",
    vtkFilesDirectory : "../../Data/",
    jsonResultFileName : "../atlasStructure.json",
    header : {
        "@type": "header",
        "species": "human",
        "organ": "Abdominal",
        "name" : "The SPL/NAC Abdominal Atlas",
        "license" : "?",
        "citation" : "?",
        "version" : "1",
        "contact" : "https://github.com/stity/spl-abdominal-atlas",
        "comment" : "",
        "coordinate_system" : "self defined"
    }
}