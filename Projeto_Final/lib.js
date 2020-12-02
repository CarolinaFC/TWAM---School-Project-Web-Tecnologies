/*Define texto em localStorage*/
localStorage.setItem('user1','cliente@twam.pt');
localStorage.setItem('pass1','cliente');;
localStorage.setItem('userad','admin@twam.pt');
localStorage.setItem('passad','admin');


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $("#btRev" ).click(function() {
        document.getElementById("btRev").disabled = true;
        document.getElementById("btRet").disabled = false;
    });

    $("#btRet").click(function() {
        document.getElementById("btRet").disabled = true;
        document.getElementById("btRev").disabled = false;
    });

        $( "#btSub" ).click(function() {
            var v5 = $('#btRev').prop('disabled');
            var v6 = $('#btRet').prop('disabled');
            var equip = $("#selectEquipamento option:selected").text();
            var marca = $("#selectMarca option:selected").text();
            var modelo = $("input[id =Modelo]").filter(function () {return !this.value;}).get();
            var so = $("input[id=SO]").filter(function () {return !this.value;}).get();
            /*-------radio-------*/
            var radio_1= $("#r1").prop("checked");
            var radio_2= $("#r2").prop("checked");
            var radio_3= $("#r3").prop("checked");
            /*-------radio1-------*/
            var radio_4= $("#r4").prop("checked");
            var radio_5= $("#r5").prop("checked");
            var radio_6= $("#r6").prop("checked");
            /*-------radio2-------*/
            var radio_7= $("#r7").prop("checked");
            var radio_8= $("#r8").prop("checked");
            var radio_9= $("#r9").prop("checked");
            /*------radio3--------*/
            var radio_10= $("#r10").prop("checked");
            var radio_11= $("#r11").prop("checked");
            var radio_12= $("#r12").prop("checked");

            var quant = $("input[id=Quantia]").filter(function () {return !this.value;}).get();


           if ((modelo.length) || (so.length) || (quant.length) || (equip === "Equipamento") || (marca === "Marca") || ((v5 === false) && (v6 === false)) || ((radio_1 === false) && (radio_2 === false) && (radio_3 === false)) || ((radio_4 === false) && (radio_5 === false) && (radio_6 === false) || ((radio_7 === false) && (radio_8 === false) && (radio_9 === false)) || ((radio_10 === false) && (radio_11 === false) && (radio_12 === false)))) {
                $('#Insuccess').modal('show');
                return false;
            } else {
                $('#Success').modal('show');
            }

        });

        $( "#btValidacao" ).click(function() {
            var username = $("input[id =username]").filter(function () {return !this.value;}).get();
            var quant = $("input[id=quantia]").filter(function () {return !this.value;}).get();

            if ((username.length) || (quant.length)) {
                $('#Insuccess').modal('show');
                return false;
            } else {
                $('#Success').modal('show');
            }

        });
        $( "#btNaoValidacao" ).click(function() {
            var username = $("input[id =username]").filter(function () {return !this.value;}).get();
            var quant = $("input[id=quantia]").filter(function () {return !this.value;}).get();
            var descricao = $("input[id= descRecRevRet]").filter(function () {return !this.value;}).get();

            if ((username.length) || (quant.length) || (descricao.length)) {
                $('#Insuccess').modal('show');
                return false;
            } else {
                $('#Success').modal('show');
            }

        });


});


function loadmenu() {
    document.write("<div class=\"text-center\">\n" +
        "                <nav class=\"navbar navbar-expand-md fixed-top bg-dark navbar-dark\">\n" +
        "                    <a class=\"navbar-brand\" href=\"HomePage.html\">LOGO</a>\n" +
        "                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n" +
        "                        <span class=\"navbar-toggler-icon\"></span>\n" +
        "                    </button>\n" +
        "                    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n" +
        "                        <ul class=\"navbar-nav\">\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a class=\"nav-link\" href=\"#\">Produtos</a>\n" +
        "                            </li>\n" +
        "                            <li class=\\\"nav-item\\\">\n" +
        "                                <a class=\"nav-link\" href=\"#\">Novidades</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a id='PagRevRet' class=\"nav-link\" href=\"RevendaRetoma.html\">Revenda/Retoma</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a class=\"nav-link\" href=\"#\">Lojas</a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                        <ul class=\"navbar-nav ml-auto\">\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a id=\"help\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Se precisar de ajuda ligue para esta linha 800 xxx xxx\"><i class=\"fas fa-question nav-link\"></i></a>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <form class=\"form-inline\">\n" +
        "                                    <input class=\"form-control form-control-sm mr-3 w-75\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n" +
        "                                    <i class=\"fas fa-search nav-link\" aria-hidden=\"true\"></i>\n" +
        "                                </form>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <i class=\"fas fa-shopping-cart nav-link\"></i>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <i class=\"fas fa-globe nav-link\"></i>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <i id='icon' class=\"fas fa-user nav-link\" onClick=\"LoginRegisto()\"><p id='login'> Login / Registo </p> </i>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </div>\n" +
        "                </nav>\n" +
        "            </div>")
}

function LoginRegisto() {
    $('#modallogin').modal('show');
}
function loadAutenticate() {
    document.writeln(" <div class=\"modal fade\" id=\"modallogin\" role=\"dialog\">\n" +
        "                        <div class=\"modal-dialog modal-login modal-lg\">\n" +
        "                            <div class=\"modal-content\">\n" +
        "                                <div class=\"modal-body\">\n" +
        "                                    <div class=\"container login-container\">\n" +
        "                                        <div class=\"row\">\n" +
        "                                            <div class=\"col-md-5 login-form-1\">\n" +
        "                                                <h3>Login</h3>\n" +
        "                                                <a>\n" +
        "                                                    <div class=\"form-group\">\n" +
        "                                                        <input id=\"loginNome\" autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"Endereço de Email *\" value=\"\" />\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"form-group\">\n" +
        "                                                        <input id=\"loginPass\" type=\"password\" class=\"form-control\" placeholder=\"Palavra-passe *\" value=\"\" />\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"form-group\">\n" +
        "                                                        <input type=\"submit\" class=\"btnSubmit\" value=\"Entrar\" onclick=\"validateData()\" />\n" +
        "                                                    </div>\n" +
        "                                                </a>\n" +
        "                                                    <div class=\"form-group\">\n" +
        "                                                        <a href=\"#\" class=\"ForgetPwd\">Esqueceu-se da sua Palavra-passe?</a>\n" +
        "                                                    </div>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"col-md-7 login-form-2\">\n" +
        "                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" style=\"color:white\">×</button>\n" +
        "                                                <h3>Registo</h3>\n" +
        "                                                <form>\n" +
        "                                                    <div class=\"form-group\">\n" +
        "                                                        <input type=\"text\" class=\"form-control\" placeholder=\"Endereço de Email *\" value=\"\" />\n" +
        "                                                        <input type=\"text\" class=\"form-control\" placeholder=\"Username *\" value=\"\" />\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"form-group\">\n" +
        "                                                        <input type=\"date\" class=\"form-control\" placeholder=\"Data de Nascimento *\" value=\"\" size=\"10px\"/>\n" +
        "                                                        <input type=\"text\" class=\"form-control\" placeholder=\"Morada *\" value=\"\" />\n" +
        "                                                        <input type=\"text\" class=\"form-control\" placeholder=\"Código Postal *\" value=\"\" />\n" +
        "                                                        <input type=\"text\" class=\"form-control\" placeholder=\"Telemóvel *\" value=\"\" />\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"form-group\">\n" +
        "                                                        <input type=\"password\" class=\"form-control\" placeholder=\"Nova Palavra-passe *\" value=\"\" />\n" +
        "                                                        <input type=\"password\" class=\"form-control\" placeholder=\"Confirmar a Palavra-passe *\" value=\"\" />\n" +
        "                                                    </div>\n" +
        "                                                    <div class=\"form-group\">\n" +
        "                                                        <input type=\"submit\" class=\"btnSubmit\" value=\"Registar\" />\n" +
        "                                                    </div>\n" +
        "                                                </form>\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                         </div>\n" +
        "                    </div>");

}

function validateData() {
    /*Vai buscar ao localStorage*/
    var user=localStorage.getItem('user1');
    var pass=localStorage.getItem('pass1');

    var userad=localStorage.getItem('userad');
    var passad=localStorage.getItem('passad');

    /*Vai buscar o input do user*/
    var userInput=document.getElementById("loginNome").value;
    var passInput=document.getElementById("loginPass").value;

    /*Compara*/
    if(user===userInput && pass===passInput){
        $("#modallogin").modal('hide');
        $("#PagRevRet").prop("href", "RevendaRetoma.html");
        $("#login").text(' Cliente');
        //alert("Autenticado com sucesso");
    }
    else if(userad===userInput && passad===passInput) {
        $("#modallogin").modal('hide');
        $("#PagRevRet").prop("href", "ValRevRet.html");
        $("#login").text(' Admin');
        //alert("Autenticado com sucesso");
    }
    else{
        alert("Dados nao Reconhecidos!")
    }
}

function loadmenuCliente() {
    document.write("<div class=\"text-center\">\n" +
        "                <nav class=\"navbar navbar-expand-md fixed-top bg-dark navbar-dark\">\n" +
        "                    <a class=\"navbar-brand\" href=\"HomePage.html\">LOGO</a>\n" +
        "                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n" +
        "                        <span class=\"navbar-toggler-icon\"></span>\n" +
        "                    </button>\n" +
        "                    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n" +
        "                        <ul class=\"navbar-nav\">\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a class=\"nav-link\" href=\"#\">Produtos</a>\n" +
        "                            </li>\n" +
        "                            <li class=\\\"nav-item\\\">\n" +
        "                                <a class=\"nav-link\" href=\"Novidades.html\">Novidades</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a class=\"nav-link\" href=\"RevendaRetoma.html\">Revenda/Retoma</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a class=\"nav-link\" href=\"#\">Lojas</a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                        <ul class=\"navbar-nav ml-auto\">\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a id=\"help\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Se precisar de ajuda ligue para esta linha 800 xxx xxx\"><i class=\"fas fa-question nav-link\"></i></a>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <form class=\"form-inline\">\n" +
        "                                    <input class=\"form-control form-control-sm mr-3 w-75\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n" +
        "                                    <i class=\"fas fa-search nav-link\" aria-hidden=\"true\"></i>\n" +
        "                                </form>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <i class=\"fas fa-shopping-cart nav-link\"></i>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <i class=\"fas fa-globe nav-link\"></i>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <i class=\"fas fa-user nav-link\">  Cliente </i>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </div>\n" +
        "                </nav>\n" +
        "            </div>")
}

function loadmenuAdmin() {
    document.write("<div class=\"text-center\">\n" +
        "                <nav class=\"navbar navbar-expand-md fixed-top bg-dark navbar-dark\">\n" +
        "                    <a class=\"navbar-brand\" href=\"HomePage.html\">LOGO</a>\n" +
        "                    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n" +
        "                        <span class=\"navbar-toggler-icon\"></span>\n" +
        "                    </button>\n" +
        "                    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n" +
        "                        <ul class=\"navbar-nav\">\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a class=\"nav-link\" href=\"#\">Produtos</a>\n" +
        "                            </li>\n" +
        "                            <li class=\\\"nav-item\\\">\n" +
        "                                <a class=\"nav-link\" href=\"Novidades.html\">Novidades</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a class=\"nav-link\" href=\"ValRevRet.html\">Revenda/Retoma</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a class=\"nav-link\" href=\"#\">Lojas</a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                        <ul class=\"navbar-nav ml-auto\">\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a id=\"help\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Se precisar de ajuda ligue para esta linha 800 xxx xxx \"><i class=\"fas fa-question nav-link\"></i></a>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <form class=\"form-inline\">\n" +
        "                                    <input class=\"form-control form-control-sm mr-3 w-75\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n" +
        "                                    <i class=\"fas fa-search nav-link\" aria-hidden=\"true\"></i>\n" +
        "                                </form>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <i class=\"fas fa-shopping-cart nav-link\"></i>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <i class=\"fas fa-globe nav-link\"></i>\n" +
        "                            </li>\n" +
        "                            <li class=\"nav-item\">\n" +
        "                                <a data-toggle=\"popover\" data-placement=\"bottom\" data-content=\"Aqui será o login\" ><i class=\"fas fa-user-tie nav-link\"> Admin </i></a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </div>\n" +
        "                </nav>\n" +
        "            </div>")
}


function loadfooter() {
    document.write("<div class=\"container\">\n" +
        "                        <br>\n" +
        "                        <div class=\"row\">\n" +
        "                            <div class=\"col-sm-2\" align=\"middle\"><h4>Website</h4> <h6>2018-2019</h6></div>\n" +
        "                            <div class=\"col-sm-3\" align=\"middle\"><i class=\"fas fa-user\" style=\"font-size:24px;\"></i> <h6>Junte-se a nós!</h6></div>\n" +
        "                            <div class=\"col-sm-3\" align=\"middle\"><i class=\"fas fa-phone\" style=\"font-size:24px;\"></i> <h6>Contacte-nos</h6></div>\n" +
        "                            <div class=\"col-sm-3\" align=\"middle\"><i class=\"fas fa-globe\" style=\"font-size:24px;\"></i> <h6>Lojas no mundo</h6></div>\n" +
        "                            <div class=\"col-sm-1\" align=\"down\"><i class=\"fas fa-menu-up\" style=\"font-size:24px;\"></i></h6></div>\n" +
        "                        </div>\n" +
        "                    </div>")
}


//------------------------------HomePage-----------
/*HomePage*/
if(window.XMLHttpRequest) dataP = new XMLHttpRequest();

function loadProdutos(){
    dataP.open("GET", "homepage.json", false);
    dataP.onreadystatechange = function () {
        if(dataP.readyState ===4 && dataP.status===200){
            var items = JSON.parse(dataP.responseText);

            var equipamentoHome="";
            var precoHome="";
            var imagemHome="";


            for(i = 0; i<items.length;i++){
                equipamentoHome=items[i].Equipamento;
                precoHome=items[i].Preco;
                imagemHome=items[i].img1;
                if(i===0){
                    document.getElementById("detalhes1").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";
                    document.getElementById("prodVisi1").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";

                }
                if(i===1){
                    document.getElementById("detalhes2").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";
                    document.getElementById("prodVisi2").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";

                }
                if(i===2){
                    document.getElementById("detalhes3").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";
                    document.getElementById("prodVisi3").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";

                }
                if(i===3){
                    document.getElementById("detalhes4").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";
                    document.getElementById("prodVisi4").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";

                }
                if(i===4){
                    document.getElementById("detalhes5").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";
                    document.getElementById("prodVisi5").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";

                }
                if(i===5){
                    document.getElementById("detalhes6").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";
                    document.getElementById("prodVisi6").innerHTML="<img src=\""+imagemHome+"\" style=\"width:100%;\"><h6  align=\"middle\"></h6>"+ equipamentoHome +" <h6  align=\"middle\">"+ precoHome +"</h6></a>";
                }

            }
        }


    };
    dataP.send();
}

//------------------------------Revenda e retoma-----------

/*Equipamentos DropDown*/
if(window.XMLHttpRequest) dataEpDD = new XMLHttpRequest();

function loadEquip(){
    dataEpDD.open("GET", "EquipaDropDown.json", false);
    dataEpDD.onreadystatechange = function () {
        if(dataEpDD.readyState ===4 && dataEpDD.status===200){
            var items = JSON.parse(dataEpDD.responseText);

            var equipa='';

            for(i = 0; i<items.length;i++){
                equipa+="<option value=" + items[i].Eq + ">" + items[i].Eq;
            }
        }
        document.getElementById("selectEquipamento").innerHTML=equipa;

    };
    dataEpDD.send();
}

/*Marcas DropDown*/
if(window.XMLHttpRequest) dataMarca = new XMLHttpRequest();

function loadMarca(){
    dataMarca.open("GET", "MarcaDropDown.json", false);
    dataMarca.onreadystatechange = function () {
        if(dataMarca.readyState ===4 && dataMarca.status===200){
            var items = JSON.parse(dataMarca.responseText);

            var marca='';

            for(i = 0; i<items.length;i++){
                marca+="<option value=" + items[i].Mar + ">" + items[i].Mar;
            }
        }
        document.getElementById("selectMarca").innerHTML=marca;

    };
    dataMarca.send();
}

/*Informação de Rev Ret*/
if(window.XMLHttpRequest) dataInfo = new XMLHttpRequest();

function loadInfo(){
    dataInfo.open("GET", "inforRevRet.json", false);
    dataInfo.onreadystatechange = function () {
        if(dataInfo.readyState ===4 && dataInfo.status===200){
            var items = JSON.parse(dataInfo.responseText);

            var nome='';
            var marca='';
            var modelo='';
            var sistOp='';


            for(i = 0; i<items.length;i++){
                nome=items[i].Nome;
                marca=items[i].Mar;
                modelo=items[i].Mod;
                sistOp=items[i].SistOp;
            }
        }
        document.getElementById("loadinfo").innerHTML="<b>"+nome+"</b><br><br>"+marca+"<br><br>"+modelo+"<br><br>"+sistOp+"";
        document.getElementById("loadinfo_mobile").innerHTML="<b>"+nome+"</b><br><br>"+marca+"<br><br>"+modelo+"<br><br>"+sistOp+"";

    };
    dataInfo.send();
}

/*Informação de Rev Ret*/
if(window.XMLHttpRequest) dataInfo2 = new XMLHttpRequest();

function loadInfo2(){
    dataInfo2.open("GET", "info2RevRet.json", false);
    dataInfo2.onreadystatechange = function () {
        if(dataInfo2.readyState ===4 && dataInfo2.status===200){
            var items = JSON.parse(dataInfo2.responseText);

            var nome='';
            var condicao='';
            var a='';
            var b='';
            var c='';
            var d='';

            for(i = 0; i<items.length;i++){
                nome=items[i].Nome;
                condicao=items[i].condicao;
                a=items[i].linha_a;
                b=items[i].linha_b;
                c=items[i].linha_c;
                d=items[i].linha_d;

            }
        }
        document.getElementById("loadInfo2").innerHTML="<b>"+nome+"</b> "+condicao+"<br><br>"+a+"<br><br>"+b+"<br><br>"+c+"<br><br>"+d+"";
        document.getElementById("loadInfo2_mobile").innerHTML="<b>"+nome+"</b> "+condicao+"<br><br>"+a+"<br><br>"+b+"<br><br>"+c+"<br><br>"+d+"";

    };
    dataInfo2.send();
}


/*Informação de Rev Ret*/
if(window.XMLHttpRequest) dataInfo3 = new XMLHttpRequest();

function loadInfo3(){
    dataInfo3.open("GET", "info3RevRet.json", false);
    dataInfo3.onreadystatechange = function () {
        if(dataInfo3.readyState ===4 && dataInfo3.status===200){
            var items = JSON.parse(dataInfo3.responseText);

            var nome='';
            var text1='';
            var text2='';
            var text3='';

            for(i = 0; i<items.length;i++){
                nome=items[i].Nome;
                text1=items[i].text1;
                text2=items[i].text2;
                text3=items[i].text3;
            }
        }
        document.getElementById("loadInfo3").innerHTML="<b>"+nome+"</b><br><br>"+text1+"<br><br>"+text2+"<br><br>"+text3+"";
        document.getElementById("loadInfo3_mobile").innerHTML="<b>"+nome+"</b><br><br>"+text1+"<br><br>"+text2+"<br><br>"+text3+"";

    };
    dataInfo3.send();
}


function guardaFormRevRet() {
    var v1 = $("#selectEquipamento option:selected").text();
    localStorage.setItem('equip', v1);

    var v2 = $("#selectMarca option:selected").text();
    localStorage.setItem('marc', v2);

    var v3 = $("#Modelo").val();
    localStorage.setItem('mod', v3);

    var v4 = $("#SO").val();
    localStorage.setItem('sistOp', v4);

    var v7 = $("input[type='radio'][name='optradio1']:checked").val();
    localStorage.setItem('radio1', v7);
    var v8 = $("input[type='radio'][name='optradio2']:checked").val();
    localStorage.setItem('radio2', v8);
    var v9 = $("input[type='radio'][name='optradio3']:checked").val();
    localStorage.setItem('radio3', v9);
    var v10 = $("input[type='radio'][name='optradio4']:checked").val();
    localStorage.setItem('radio4', v10);

    var v11 = $("#Quantia").val();
    localStorage.setItem('Quant', v11);

    var btRev = $("#btRev").prop('disabled');

    if(btRev === true) {
        var botaoRev = $("#btRev").val();
        localStorage.setItem('botaoRet', botaoRev);
    } else if(btRev === false) {
        var botaoRet = $("#btRet").val();
        localStorage.setItem('botaoRet', botaoRet);
    }
}

//------------------------------Validação Revenda e retoma-----------

function ValFormRevRet() {
    var equipamento = localStorage.getItem('equip');
    document.getElementById("selectEquipamento1").innerHTML="<a>" + equipamento +"</a>";

    var marca = localStorage.getItem('marc');
    document.getElementById("selectMarca1").innerHTML="<a>" + marca +"</a>";

    var modelo = localStorage.getItem('mod');
    document.getElementById("Modelo1").innerHTML="<a>" + modelo +"</a>";

    var sistOp = localStorage.getItem('sistOp');
    document.getElementById("SO1").innerHTML="<a>" + sistOp+"</a>";

    var radio = localStorage.getItem('radio1');
    document.getElementById("radio4").innerHTML="<a>" + radio +"</a>";
    var radio1= localStorage.getItem('radio2');
    document.getElementById("radio5").innerHTML="<a>" + radio1 +"</a>";
    var radio2 = localStorage.getItem('radio3');
    document.getElementById("radio6").innerHTML="<a>" + radio2 +"</a>";
    var radio3 = localStorage.getItem('radio4');
    document.getElementById("radio7").innerHTML="<a>" + radio3 +"</a>";

    var Quan = localStorage.getItem('Quant');
    document.getElementById("quantia1").innerHTML="<a>" + Quan+"</a>";

    var BtRet = localStorage.getItem('botaoRet');
    document.getElementById("RevRet1").innerHTML="<a>" + BtRet+"</a>";

}


