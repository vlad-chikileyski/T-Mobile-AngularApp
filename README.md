Changed css @font-face (*.eot and *.ttf) in stylescombined2.css :
For example:
previous version => @font-face {
    font-family: "Tele-GroteskFet";
    src: url(/resources/TMobile/T_SML/fonts/t036016t_v21-2.ttf)
}
updated version => @font-face {
    font-family: "Tele-GroteskFet";
    src: url(http://cdn.abee.cloud/resources/TMobile/T_SML/fonts/t036016t_v21-2.ttf)
}

This version not include code optimisation and refactoring (<script src="//s.t-mobile.pl/binaries/9049/js/plugins ....)
Why all switchers in <div id="plans-list"> not working ? 
Maybe we could check ajax requests and some parameters (session?)
