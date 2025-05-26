var ctxt = Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
var properties =  ctxt.getBean('global-properties', java.util.Properties);

logger.log(properties[db.user]);