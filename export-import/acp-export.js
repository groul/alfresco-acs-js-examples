// ACP export
function main() {
   var nodeToExport = companyhome.childByNamePath("Sites/swsdp/documentLibrary")  
   var exportAction= actions.create("export");  
   exportAction.parameters['store'] = "workspace://SpacesStore";  
   exportAction.parameters['package-name'] = "ACPexport";  
   exportAction.parameters['destination'] = companyhome;  
   exportAction.parameters['include-children'] = true;  
   exportAction.parameters['include-self'] = false;  
   exportAction.parameters['encoding'] = "UTF-8";  
   exportAction.execute(nodeToExport);  
}

main();