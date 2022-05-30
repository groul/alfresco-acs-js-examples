// ACP Import

function main() {
   var targetNodeForImport = companyhome.childByNamePath("Sites/swsdp2/documentLibrary");  
   var ACPFile = companyhome.childByNamePath("ACPexport.acp");  
   var importAction = actions.create("import");  
   importAction.parameters.encoding = "UTF-8";  
   importAction.parameters.destination = targetNodeForImport;  
   importAction.execute(ACPFile);  
   
}

main();