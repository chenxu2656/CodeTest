
let authNum1:number[] = [65543,131076,196613,1179652]
let authList:any = {
    roomInfo: "1",
    businessInfo: "2",
    medicalDocumentInfo: "3",
    hrManage: "4",
    customManage: "5",
    otherManage: "12"
}
let returnAuth = (authSubtype:number[],authList:any[])=>{
    let authDoc:any= {}
    authSubtype.forEach((item:number)=>{
        /***
         * convert subtype to Hex , get the authority type ,and the  authority level
         * authority level： '1 1 1' --> 'invite edit review'
         *  */ 
        let authHex:number = parseInt(item.toString(16)) // convert decimal to hexadecimal 
        let authType:number = parseInt((authHex/10000).toString()) // get authority type from High Bit , and authority level low bit
        let authLevel:number = authHex%10
        let authName: string = ""
        // convert authority level to object
        let authBinary = authLevel.toString(2).split('');
        let resArray = authBinary.map((item)=>{
            return (item === '1')?true : false
        })
        Object.keys(authList).forEach((key:any)=>{
            if(authList[key] == authType){
                authName = key
            }
        })
        authDoc[authName]= {
            invite: resArray[0],
            edit: resArray[1],
            review: resArray[2]
        }
    })
    console.dir(authDoc)
    return authDoc
}
returnAuth(authNum1,authList)
