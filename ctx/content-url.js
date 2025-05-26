var ctxt = Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var nodeService =  ctxt.getBean('NodeService', org.alfresco.service.cmr.repository.NodeService);
var QName = Packages.org.alfresco.service.namespace.QName;

var contentProp = QName.createQName("{http://www.alfresco.org/model/content/1.0}content");

logger.log(nodeService.getProperty(document.nodeRef, contentProp).contentUrl);