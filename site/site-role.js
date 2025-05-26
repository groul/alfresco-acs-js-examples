var s = siteService.getSites("", "", 0);
s.forEach(function(entry) {
    var members = entry.listMembers(null, "", 0, false);
    for (userName in members) {
       logger.log(entry.shortName+ " :: "+ userName +" :: "+entry.getMembersRole(userName));
    }
});