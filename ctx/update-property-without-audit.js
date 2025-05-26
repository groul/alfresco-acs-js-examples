var context = Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var model = Packages.org.alfresco.model.ContentModel;
var policyBehaviourFilter = context.getBean('policyBehaviourFilter', Packages.org.alfresco.repo.policy.BehaviourFilter); 

setProperty();

function setProperty() {

	var referenceType = node; 
  var reference = [workspace, SpacesStore, a8abc98e-bf2d-48ec-b3d8-002fa0cc7b97];
  var node = search.findNode(referenceType, reference);
  logger.log(node.name);
	try {
		logger.log(Modifiying node  + node.name +   + node.nodeRef);
		policyBehaviourFilter.disableBehaviour(node.nodeRef, model.ASPECT_AUDITABLE);

		node.properties['cmtitle'] = 'Modified just now';
		node.save();
	} catch (e) {
		logger.log(e.message);     
	} finally {
		policyBehaviourFilter.enableBehaviour(node.nodeRef, model.ASPECT_AUDITABLE);

		Log modifier and modified date
		logger.log(Modifier  + node.properties['cmmodifier'] +  Modified  + node.properties['cmmodified']);
	}

}