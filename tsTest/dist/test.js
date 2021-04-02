"use strict";
var authNum1 = [65543, 131076, 196613, 1179652];
var authList = {
    roomInfo: "1",
    businessInfo: "2",
    medicalDocumentInfo: "3",
    hrManage: "4",
    customManage: "5",
    otherManage: "12"
};
var returnAuth = function (authSubtype, authList) {
    var authDoc = {};
    authSubtype.forEach(function (item) {
        /***
         * convert subtype to Hex , get the authority type ,and the  authority level
         * authority level： '1 1 1' --> 'invite edit review'
         *  */
        var authHex = parseInt(item.toString(16)); // convert decimal to hexadecimal 
        var authType = parseInt((authHex / 10000).toString()); // get authority type from High Bit , and authority level low bit
        var authLevel = authHex % 10;
        var authName = "";
        // convert authority level to object
        var authBinary = authLevel.toString(2).split('');
        var resArray = authBinary.map(function (item) {
            return (item === '1') ? true : false;
        });
        Object.keys(authList).forEach(function (key) {
            if (authList[key] == authType) {
                authName = key;
            }
        });
        authDoc[authName] = {
            invite: resArray[0],
            edit: resArray[1],
            review: resArray[2]
        };
    });
    console.dir(authDoc);
    return authDoc;
};
returnAuth(authNum1, authList);
