Bridge.assembly("Client", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = [System,Bridge.jQuery2,Client,Client.TemplateSystem];
    $m($n[2].App, function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void}]}; });
    $m($n[3].TemplateLoader, function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":1,"n":"Fail","is":true,"t":8,"pi":[{"n":"jqxhr","pt":$n[1].jqXHR,"ps":0},{"n":"str1","pt":$n[0].String,"ps":1},{"n":"str2","pt":$n[0].String,"ps":2},{"n":"target","pt":$,"ps":3}],"sn":"Fail","rt":$n[0].Void,"p":[$n[1].jqXHR,$n[0].String,$n[0].String,$]},{"a":2,"n":"Load","is":true,"t":8,"pi":[{"n":"target","pt":$,"ps":0},{"n":"path","pt":$n[0].String,"ps":1}],"sn":"Load","rt":$n[0].Void,"p":[$,$n[0].String]},{"a":1,"n":"Success","is":true,"t":8,"pi":[{"n":"data","pt":$n[0].String,"ps":0},{"n":"str","pt":$n[0].String,"ps":1},{"n":"jqxhr","pt":$n[1].jqXHR,"ps":2},{"n":"target","pt":$,"ps":3}],"sn":"Success","rt":$n[0].Void,"p":[$n[0].String,$n[0].String,$n[1].jqXHR,$]}]}; });
});
