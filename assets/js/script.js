$(document).ready(function(){
    $("#cadastroForm").submit(function(event){
        event.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        if(username.trim() === "" || password.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
        var usuarioExistente = usuariosCadastrados.find(function(usuario) {
            return usuario.username === username;
        });

        if(usuarioExistente) {
            alert("Usuário já cadastrado. Por favor, escolha outro nome de usuário.");
            
            window.location.href = "home.html";
        } else { 

        var novoUsuario = { username: username, password: password };
        usuariosCadastrados.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

        $("#username").val("");
        $("#password").val("");

        alert("Cadastro realizado com sucesso!");

        window.location.href = "login.html";
        }
    });
});




$(document).ready(function(){
    $("#loginForm").submit(function(event){
        event.preventDefault(); 

        var username = $("#username").val();
        var password = $("#password").val();

        if(username.trim() === "" || password.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
        var usuarioCadastrado = usuariosCadastrados.find(function(usuario) {
            return usuario.username === username && usuario.password === password;
        });

        if(usuarioCadastrado) {
            alert("Login realizado com sucesso!");

            window.location.href = "home.html";
        } else {
            alert("Usuário ou senha incorretos. Por favor, tente novamente.");
        }
    });
});

$(document).ready(function() {
    const receitas = [
        {
            'nome': 'Pão de Queijo',
            'ingredientes': '500g de polvilho azedo; 250ml de leite; 100ml de óleo; 2 ovos; 200g de queijo meia cura ralado; Sal a gosto',
            'passoAPasso': '1. Pré-aqueça o forno a 180°C.\n2. Em uma panela, ferva o leite com o óleo e o sal.\n3. Em uma tigela, despeje o polvilho e, aos poucos, adicione a mistura fervente, mexendo bem.\n4. Acrescente os ovos um a um, misturando bem após cada adição.\n5. Adicione o queijo ralado e misture até obter uma massa homogênea.\n6. Modele bolinhas com a massa e coloque em uma assadeira untada.\n7. Asse por aproximadamente 20 minutos, ou até que os pães de queijo estejam dourados e firmes.\n8. Sirva quente.'
        },
        {
            'nome': 'Strogonoff de Carne',
            'ingredientes': '500g de carne (coxão mole, alcatra, filé mignon); 1 cebola grande picada; 2 dentes de alho picados; 1 lata de creme de leite; 1 lata de molho de tomate; 1 colher de sopa de mostarda; 1 colher de sopa de ketchup; Sal e pimenta a gosto; Óleo para refogar',
            'passoAPasso': '1. Corte a carne em tiras finas.\n2. Em uma panela, aqueça um pouco de óleo e doure a cebola e o alho.\n3. Adicione a carne e refogue até que esteja bem dourada.\n4. Tempere com sal e pimenta a gosto.\n5. Acrescente o molho de tomate, a mostarda e o ketchup.\n6. Deixe cozinhar por alguns minutos em fogo baixo.\n7. Por último, adicione o creme de leite e misture bem até que esteja incorporado ao molho.\n8. Sirva quente acompanhado de arroz branco e batata palha.'
        },
        {
            'nome': 'Salada de Quinoa',
            'ingredientes': '1 xícara de quinoa; 2 xícaras de água; 1 pepino; 1 pimentão vermelho; 1 cebola roxa; Suco de 1 limão; Azeite de oliva; Sal e pimenta a gosto; Folhas de hortelã (opcional)',
            'passoAPasso': '1. Lave bem a quinoa em água corrente.\n2. Em uma panela, coloque a quinoa e a água e leve ao fogo médio.\n3. Deixe ferver, reduza o fogo, tampe e cozinhe por cerca de 15 minutos, ou até que a quinoa esteja macia e a água tenha sido absorvida.\n4. Enquanto isso, corte o pepino, o pimentão e a cebola em cubos pequenos.\n5. Em uma tigela grande, misture a quinoa cozida com os legumes picados.\n6. Tempere com o suco de limão, azeite de oliva, sal e pimenta a gosto.\n7. Se desejar, adicione folhas de hortelã picadas.\n8. Sirva fria.'
        },
        {
            'nome': 'Sopa de Legumes',
            'ingredientes': '2 cenouras; 2 batatas; 1 abobrinha; 1 cebola; 2 dentes de alho; 1 litro de caldo de legumes; Sal e pimenta a gosto; Azeite de oliva',
            'passoAPasso': '1. Descasque e corte os legumes em cubos pequenos.\n2. Em uma panela grande, aqueça um pouco de azeite e refogue a cebola e o alho até ficarem dourados.\n3. Adicione os legumes cortados e refogue por mais alguns minutos.\n4. Acrescente o caldo de legumes e deixe cozinhar em fogo médio até que os legumes estejam macios.\n5. Tempere com sal e pimenta a gosto.\n6. Se desejar, bata a sopa no liquidificador para obter uma consistência mais cremosa.\n7. Sirva quente acompanhada de pão fresco.'
        },
        {
            'nome': 'Macarrão à Carbonara',
            'ingredientes': 'Espaguete; Bacon; Ovos; Parmesão ralado; Pimenta preta; Sal; Azeite de oliva',
            'passoAPasso': '1. Cozinhe o espaguete em água fervente com sal de acordo com as instruções da embalagem.\n2. Enquanto isso, frite o bacon em uma frigideira até ficar crocante. Retire o excesso de gordura.\n3. Em uma tigela, misture os ovos, o parmesão ralado e a pimenta preta moída.\n4. Quando o macarrão estiver cozido, escorra, reservando um pouco da água do cozimento.\n5. Transfira o macarrão para a frigideira com o bacon, misture bem e retire do fogo.\n6. Adicione a mistura de ovos e queijo, mexendo rapidamente para que os ovos cozinhem no calor do macarrão, adicionando um pouco da água do cozimento se necessário.\n7. Sirva imediatamente, polvilhado com mais parmesão ralado.'
        },
        {
            'nome': 'Guacamole',
            'ingredientes': ['2 abacates maduros', '1 tomate picado', '1/2 cebola picada', 'Suco de 1 limão', 'Coentro picado a gosto', 'Sal e pimenta a gosto'],
            'passoAPasso': '1. Corte os abacates ao meio, retire o caroço e retire a polpa com uma colher para uma tigela.\n2. Amasse os abacates com um garfo até obter uma consistência cremosa.\n3. Adicione o tomate, a cebola, o suco de limão e o coentro picado à tigela.\n4. Tempere com sal e pimenta a gosto.\n5. Misture bem todos os ingredientes até que estejam bem incorporados.\n6. Sirva imediatamente com nachos, tacos ou como acompanhamento.'
        },
        {
            'nome': 'Risoto de Funghi',
            'ingredientes': ['200g de arroz arbóreo', '50g de funghi secchi', '1 cebola picada', '2 dentes de alho picados', '1/2 xícara de vinho branco seco', '1 litro de caldo de legumes', '2 colheres de sopa de manteiga', '1/2 xícara de queijo parmesão ralado', 'Sal e pimenta a gosto', 'Azeite de oliva'],
            'passoAPasso': '1. Hidrate o funghi em água morna por cerca de 20 minutos. Escorra e reserve a água.\n2. Em uma panela, aqueça um pouco de azeite e refogue a cebola e o alho até ficarem dourados.\n3. Adicione o arroz arbóreo e refogue por alguns minutos, até ficar levemente transparente.\n4. Acrescente o vinho branco e mexa até que o líquido evapore.\n5. Adicione o funghi hidratado e uma concha do caldo de legumes. Mexa constantemente.\n6. Continue adicionando o caldo de legumes aos poucos, mexendo sempre, até que o arroz esteja cozido e cremoso.\n7. Quando o risoto estiver quase pronto, adicione a manteiga e o queijo parmesão ralado. Misture bem.\n8. Tempere com sal e pimenta a gosto.\n9. Sirva imediatamente, polvilhado com mais queijo parmesão ralado.'
        },
        {
            'nome': 'Mousse de Chocolate',
            'ingredientes': ['200g de chocolate meio amargo', '1 lata de creme de leite', '3 claras de ovo', '3 colheres de sopa de açúcar', 'Raspas de chocolate para decorar (opcional)'],
            'passoAPasso': '1. Derreta o chocolate em banho-maria ou no micro-ondas, mexendo sempre até ficar completamente derretido.\n2. Retire o chocolate do fogo e acrescente o creme de leite, misturando bem até obter uma mistura homogênea.\n3. Bata as claras em neve, adicionando o açúcar aos poucos, até obter picos firmes.\n4. Incorpore delicadamente as claras em neve à mistura de chocolate, fazendo movimentos suaves de baixo para cima.\n5. Divida a mousse em taças individuais e leve à geladeira por pelo menos 4 horas, ou até firmar.\n6. Decore com raspas de chocolate antes de servir, se desejar.'
        },
        {
            'nome': 'Salmão Grelhado com Molho de Maracujá',
            'ingredientes': ['4 filés de salmão', 'Suco de 2 maracujás', '2 colheres de sopa de mel', '2 colheres de sopa de mostarda', 'Sal e pimenta a gosto', 'Azeite de oliva'],
            'passoAPasso': '1. Tempere os filés de salmão com sal, pimenta e um fio de azeite de oliva.\n2. Em uma tigela pequena, misture o suco de maracujá, o mel e a mostarda até ficar homogêneo.\n3. Aqueça uma grelha ou frigideira antiaderente e grelhe os filés de salmão por cerca de 3-4 minutos de cada lado, ou até que estejam cozidos ao seu gosto.\n4. Retire o salmão da grelha e sirva regado com o molho de maracujá.\n5. Sirva acompanhado de arroz branco e legumes cozidos, se desejar.'
        },
        {
            'nome': 'Lasanha de Berinjela',
            'ingredientes': ['2 berinjelas grandes', '500g de carne moída', '1 cebola picada', '2 dentes de alho picados', '1 lata de molho de tomate', '200g de queijo muçarela ralado', '100g de queijo parmesão ralado', 'Azeite de oliva', 'Sal e pimenta a gosto'],
            'passoAPasso': '1. Corte as berinjelas em fatias finas e tempere com sal. Deixe descansar por cerca de 15 minutos para eliminar o amargor.\n2. Enquanto isso, aqueça um pouco de azeite em uma frigideira e refogue a cebola e o alho até ficarem dourados.\n3. Adicione a carne moída e cozinhe até dourar.\n4. Acrescente o molho de tomate, tempere com sal e pimenta a gosto, e deixe cozinhar por alguns minutos.\n5. Em uma assadeira, monte camadas alternadas de berinjela, carne moída e queijo muçarela ralado, finalizando com uma camada de queijo parmesão ralado por cima.\n6. Leve ao forno preaquecido a 180°C por cerca de 30 minutos, ou até que o queijo esteja derretido e dourado.\n7. Retire do forno e deixe descansar por alguns minutos antes de servir.'
        },
        {
            'nome': 'Tiramisu',
            'ingredientes': '250g de queijo mascarpone; 3 ovos; 100g de açúcar; 200g de biscoitos tipo ladyfinger (savoiardi); 1 xícara de café forte; 50ml de licor de café; Cacau em pó para polvilhar',
            'passoAPasso': '1. Separe as gemas das claras dos ovos.\n2. Em uma tigela grande, bata as gemas com metade do açúcar até obter uma mistura clara e fofa.\n3. Adicione o queijo mascarpone à mistura de gemas e açúcar, e misture até ficar homogêneo.\n4. Em outra tigela, bata as claras em neve com o açúcar restante até formar picos firmes.\n5. Incorpore delicadamente as claras em neve à mistura de queijo mascarpone, fazendo movimentos suaves de baixo para cima.\n6. Em uma tigela pequena, misture o café forte com o licor de café.\n7. Molhe rapidamente os biscoitos na mistura de café e disponha uma camada no fundo de um refratário.\n8. Cubra os biscoitos com metade do creme de mascarpone.\n9. Repita o processo, alternando camadas de biscoitos e creme.\n10. Cubra o refratário com filme plástico e leve à geladeira por pelo menos 4 horas, ou até que o tiramisu esteja firme.\n11. Antes de servir, polvilhe cacau em pó por cima.'
        },
        {
            'nome': 'Torta de Limão',
            'ingredientes': 'Massa:\n200g de biscoito maisena; 100g de manteiga derretida;\nRecheio:\n1 lata de leite condensado; 1/2 xícara de suco de limão; Raspas de limão para decorar; Chantilly para decorar (opcional)',
            'passoAPasso': '1. Triture os biscoitos maisena até obter uma farofa fina.\n2. Misture a farofa de biscoito com a manteiga derretida até formar uma massa homogênea.\n3. Forre o fundo de uma forma de fundo removível com a massa de biscoito, pressionando bem.\n4. Leve ao forno preaquecido a 180°C por 10 minutos. Retire do forno e reserve.\n5. Em uma tigela, misture o leite condensado com o suco de limão até obter um creme homogêneo.\n6. Despeje o creme de limão sobre a massa de biscoito assada e leve à geladeira por pelo menos 2 horas, ou até que o recheio esteja firme.\n7. Antes de servir, decore com raspas de limão e chantilly, se desejar.'
        },
        {
            'nome': 'Ratatouille',
            'ingredientes': '1 berinjela; 1 abobrinha; 1 pimentão vermelho; 1 pimentão amarelo; 2 tomates; 2 dentes de alho; Azeite de oliva; Sal e pimenta a gosto; Ervas frescas (manjericão, tomilho, alecrim) para decorar',
            'passoAPasso': '1. Lave e corte todos os legumes em rodelas finas.\n2. Em uma assadeira, disponha as rodelas de legumes em camadas, intercalando os diferentes tipos de legumes.\n3. Regue os legumes com um fio de azeite de oliva e tempere com sal, pimenta e alho picado.\n4. Cubra a assadeira com papel alumínio e leve ao forno preaquecido a 180°C por cerca de 30-40 minutos, ou até que os legumes estejam macios.\n5. Retire o papel alumínio e deixe assar por mais 10 minutos, ou até que os legumes estejam levemente dourados.\n6. Retire do forno e decore com ervas frescas antes de servir.'
        },
        {
            'nome': 'Pudim de Leite Condensado',
            'ingredientes': '1 lata de leite condensado; A mesma medida de leite integral; 3 ovos; 1 xícara de açúcar',
            'passoAPasso': '1. Preaqueça o forno a 180°C.\n2. Em uma panela, derreta o açúcar em fogo médio até obter um caramelo dourado.\n3. Despeje o caramelo em uma forma para pudim e espalhe bem pelo fundo e pelas laterais da forma. Reserve.\n4. No liquidificador, bata o leite condensado, o leite integral e os ovos até obter uma mistura homogênea.\n5. Despeje a mistura na forma caramelizada.\n6. Cubra a forma com papel alumínio e leve ao forno em banho-maria por aproximadamente 1 hora, ou até que o pudim esteja firme.\n7. Retire o papel alumínio e deixe esfriar completamente.\n8. Leve à geladeira por pelo menos 4 horas antes de desenformar e servir.'
        },
        {
            'nome': 'Lasanha de Frango',
            'ingredientes': 'Massa:\n400g de massa para lasanha pré-cozida;\nRecheio:\n500g de peito de frango cozido e desfiado; 1 cebola picada; 2 dentes de alho picados; 1 lata de molho de tomate; 200g de queijo muçarela ralado; 100g de queijo parmesão ralado; Azeite de oliva; Sal e pimenta a gosto',
            'passoAPasso': '1. Em uma panela, aqueça um pouco de azeite e refogue a cebola e o alho até ficarem dourados.\n2. Adicione o frango desfiado e refogue por alguns minutos.\n3. Acrescente o molho de tomate e deixe cozinhar por mais alguns minutos. Tempere com sal e pimenta a gosto.\n4. Em uma forma, monte camadas alternadas de massa para lasanha e o recheio de frango, finalizando com uma camada de molho de tomate. Repita o processo até acabarem os ingredientes, terminando com uma camada de molho de tomate.\n5. Polvilhe o queijo muçarela e o queijo parmesão ralados por cima.\n6. Leve ao forno preaquecido a 180°C por cerca de 30 minutos, ou até gratinar.\n7. Sirva quente.'
        },
        {
            'nome': 'Torta de Frutas',
            'ingredientes': 'Massa:\n200g de farinha de trigo; 100g de manteiga gelada; 1 ovo; 2 colheres de sopa de açúcar; Recheio:\nFrutas de sua preferência (morango, kiwi, manga, uvas, etc.); 1/2 xícara de geléia de frutas (do sabor das frutas escolhidas); Suco de 1 limão; 2 colheres de sopa de açúcar; 2 colheres de sopa de amido de milho',
            'passoAPasso': '1. Em uma tigela, misture a farinha de trigo, o açúcar e a manteiga gelada cortada em cubos.\n2. Amasse com as mãos até obter uma farofa grossa.\n3. Adicione o ovo e misture até formar uma massa homogênea.\n4. Enrole a massa em filme plástico e leve à geladeira por 30 minutos.\n5. Enquanto isso, prepare o recheio: corte as frutas em fatias finas e coloque-as em uma tigela.\n6. Em uma panela, misture a geléia de frutas, o suco de limão, o açúcar e o amido de milho.\n7. Leve ao fogo médio, mexendo sempre, até engrossar.\n8. Retire do fogo e deixe esfriar.\n9. Pré-aqueça o forno a 180°C.\n10. Abra a massa com um rolo em uma superfície enfarinhada e forre o fundo e as laterais de uma forma de fundo removível.\n11. Espalhe o recheio de frutas sobre a massa.\n12. Leve ao forno por aproximadamente 30 minutos, ou até que a massa esteja dourada.\n13. Deixe esfriar antes de desenformar.'
        },
        {
            'nome': 'Escondidinho de Carne Seca',
            'ingredientes': '500g de carne seca dessalgada e desfiada; 500g de mandioca cozida e amassada; 1 cebola picada; 2 dentes de alho picados; 1 tomate picado; 1/2 xícara de cheiro-verde picado; 200g de queijo muçarela ralado; 50g de queijo parmesão ralado; Azeite de oliva; Sal e pimenta a gosto',
            'passoAPasso': '1. Em uma panela, aqueça um pouco de azeite e refogue a cebola e o alho até ficarem dourados.\n2. Adicione o tomate picado e refogue por mais alguns minutos.\n3. Acrescente a carne seca desfiada e refogue até ficar bem aquecida.\n4. Tempere com sal e pimenta a gosto e adicione o cheiro-verde picado. Reserve.\n5. Em um refratário untado, faça uma camada com metade da mandioca amassada.\n6. Espalhe a carne seca refogada sobre a mandioca.\n7. Cubra com o restante da mandioca e alise a superfície.\n8. Polvilhe o queijo muçarela e o queijo parmesão ralados por cima.\n9. Leve ao forno preaquecido a 180°C por cerca de 30 minutos, ou até gratinar.\n10. Sirva quente.'
        },
        {
            'nome': 'Sopa de Tomate',
            'ingredientes': '1kg de tomates maduros; 1 cebola picada; 2 dentes de alho picados; 1 cenoura picada; 1 talo de salsão picado; 1 litro de caldo de legumes; Azeite de oliva; Sal e pimenta a gosto; Folhas de manjericão fresco para decorar',
            'passoAPasso': '1. Faça um corte em cruz na base de cada tomate e mergulhe-os em água fervente por alguns segundos. Retire e transfira para uma tigela com água gelada. Isso facilitará a remoção da pele dos tomates.\n2. Retire a pele dos tomates, corte-os ao meio e retire as sementes.\n3. Em uma panela grande, aqueça um pouco de azeite e refogue a cebola, o alho, a cenoura e o salsão até ficarem dourados.\n4. Adicione os tomates sem pele e sem sementes picados à panela.\n5. Refogue por alguns minutos e adicione o caldo de legumes.\n6. Deixe cozinhar em fogo médio por cerca de 20 minutos, ou até que os legumes estejam macios.\n7. Retire do fogo e espere esfriar um pouco.\n8. Utilize um mixer de mão ou liquidificador para triturar a sopa até obter uma consistência homogênea.\n9. Tempere com sal e pimenta a gosto.\n10. Sirva quente, decorada com folhas de manjericão fresco.'
        },
        {
            'nome': 'Frango Xadrez',
            'ingredientes': '500g de peito de frango cortado em cubos; 1 pimentão verde cortado em cubos; 1 pimentão vermelho cortado em cubos; 1 cebola cortada em cubos; 1 cenoura cortada em cubos; 1/2 xícara de molho de soja (shoyu); 1 colher de sopa de amido de milho; 1/2 xícara de água; 2 colheres de sopa de óleo de gergelim; 2 dentes de alho picados; Sal e pimenta a gosto',
            'passoAPasso': '1. Em uma tigela, misture o molho de soja com o amido de milho e a água até dissolver completamente.\n2. Tempere os cubos de frango com sal e pimenta a gosto.\n3. Em uma frigideira grande ou wok, aqueça o óleo de gergelim em fogo médio-alto.\n4. Adicione o frango à frigideira e cozinhe até dourar.'
        }
    ];

    const container = $('.conteiner');

    receitas.forEach(function(receita) {
        const receitaHTML = `
            <div class="receita">
                <h3>${receita.nome}</h3>
                <h5>Ingredientes:</h5>
                <p>${receita.ingredientes}</p>
                <h5>Passo a Passo:</h5>
                <p>${receita.passoAPasso}</p>
            </div>
        `;
        container.append(receitaHTML);
    });
});


$(document).ready(function(){
    $("#formReceita").submit(function(event){
        event.preventDefault(); 

        var nome = $("#nome").val();
        var ingredientes = $("#ingredientes").val();
        var passoAPasso = $("#passoAPasso").val();

        var novaReceita = {
            'nome': nome,
            'ingredientes': ingredientes,
            'passoAPasso': passoAPasso
        };

        adicionarReceita(novaReceita);

        $("#nome").val("");
        $("#ingredientes").val("");
        $("#passoAPasso").val("");
    });

    function adicionarReceita(receita){
        var listaReceitas = $("#listaReceitas");
        var novaReceitaItem = $("<h3>" + receita.nome + "</h3><br><strong>Ingredientes:</strong><br>" + receita.ingredientes + "<br><strong>Passo a Passo:</strong><br>" + receita.passoAPasso + "<br>");
        listaReceitas.append(novaReceitaItem);
    }
});

