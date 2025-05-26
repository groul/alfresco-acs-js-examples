var context = Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var model = Packages.org.alfresco.model.ContentModel;
var policyBehaviourFilter = context.getBean('policyBehaviourFilter', Packages.org.alfresco.repo.policy.BehaviourFilter);
var def = {
    query: "TYPE:'acme:targetType'",
    language: "fts-alfresco"
};

var nodes = search.query(def);

try {

    policyBehaviourFilter.disableAllBehaviours();
    for each(var node in nodes) {
        logger.log("Nuking node :" + node.nodeRef + " ; " + node.webdavUrl);
        node.addAspect("sys:temporary");
        node.save();
        try {
            node.remove();
        } catch (e) {
            logger.log("^^^^^^ ERROR : " + e.message);
        }
    }
} finally {

    policyBehaviourFilter.enableAllBehaviours();
}