function sendMail() {
 
    var site = siteService.getSite(document.siteShortName);
    var members = site.listMembers(null, "SiteManager", 0, false);
 
    for (userName in members) {
 
        var person = people.getPerson(userName);
        var email = person.properties["cm:email"];
 
        var mail = actions.create("mail");
        mail.parameters.to = email;
        mail.parameters.subject = "New document available: " + document.name;
        mail.parameters.template =
            companyhome.childByNamePath("Data Dictionary/Email Templates/Notify Email Templates/notify_user_email.html.ftl");
        mail.execute(document);
 
    }
 
}
sendMail();