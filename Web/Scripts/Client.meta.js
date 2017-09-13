Bridge.assembly("Client", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,Client.Framework,Bridge.jQuery2,System.Collections.Generic,Client,Client.UI,Client.TemplateSystem,Client.DAL,Client.BO];
    $m($n[4].App, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void}]}; });
    $m($n[5].Login, function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].BusManager],"pi":[{"n":"busManager","pt":$n[1].BusManager,"ps":0}],"sn":"ctor"},{"a":1,"n":"CreatePageLayout","t":8,"sn":"CreatePageLayout","rt":$n[0].Void},{"a":1,"n":"busManager","t":4,"rt":$n[1].BusManager,"sn":"busManager"}]}; });
    $m($n[6].TemplateLoader, function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":1,"n":"Fail","is":true,"t":8,"pi":[{"n":"jqxhr","pt":$n[2].jqXHR,"ps":0},{"n":"str1","pt":$n[0].String,"ps":1},{"n":"str2","pt":$n[0].String,"ps":2},{"n":"target","pt":$,"ps":3}],"sn":"Fail","rt":$n[0].Void,"p":[$n[2].jqXHR,$n[0].String,$n[0].String,$]},{"a":2,"n":"Load","is":true,"t":8,"pi":[{"n":"target","pt":$,"ps":0},{"n":"path","pt":$n[0].String,"ps":1}],"sn":"Load","rt":$n[0].Void,"p":[$,$n[0].String]},{"a":1,"n":"Success","is":true,"t":8,"pi":[{"n":"data","pt":$n[0].String,"ps":0},{"n":"str","pt":$n[0].String,"ps":1},{"n":"jqxhr","pt":$n[2].jqXHR,"ps":2},{"n":"target","pt":$,"ps":3}],"sn":"Success","rt":$n[0].Void,"p":[$n[0].String,$n[0].String,$n[2].jqXHR,$]}]}; });
    $m($n[1].BusManager, function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Add","t":8,"pi":[{"n":"o","pt":System.Object,"ps":0}],"tpc":1,"tprm":["T"],"sn":"Add","rt":$n[0].Void,"p":[System.Object]},{"a":2,"n":"Get","t":8,"tpc":1,"tprm":["T"],"sn":"Get","rt":System.Object},{"a":1,"n":"Conteneur","t":4,"rt":$n[3].Dictionary$2(System.String,System.Object),"sn":"Conteneur"}]}; });
    $m($n[7].DataLoader, function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Load","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0}],"tpc":1,"tprm":["T"],"sn":"Load","rt":System.Object,"p":[$n[0].String]}]}; });
    $m($n[7].WebConfigProvider, function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetValue","t":8,"pi":[{"n":"key","pt":$n[0].String,"ps":0}],"sn":"GetValue","rt":$n[0].String,"p":[$n[0].String]}]}; });
    $m($n[8].User, function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].String],"pi":[{"n":"name","pt":$n[0].String,"ps":0}],"sn":"ctor"},{"a":2,"n":"authSimpleToken","t":4,"rt":$n[0].String,"sn":"authSimpleToken"},{"a":2,"n":"name","t":4,"rt":$n[0].String,"sn":"name"}]}; });
});
