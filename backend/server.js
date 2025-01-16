const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())
const projects = [
    {
        id: 1,
        Title: "Igniter Timer",
        Descriptions: "A simple timer app built with React and TypeScript.",
        BannerImage: "https://res-console.cloudinary.com/ddrbxo7pj/media_explorer_thumbnails/74d8b334faf82012f5a516c6226d31d9/detailed",
        Techs: ["React", "TypeScript", "Styled Components"],
        MoreDetails: [
            {
                Title: "Home",
                Descriptions: "Uma aplicação simples e intuitiva de timer que permite aos usuários configurar e gerenciar contagens regressivas ou cronômetros com facilidade. Ideal para manter o foco em atividades como estudos, exercícios, cozinha, ou qualquer tarefa que exija controle do tempo. <br/>  <br/>  <br/>  Com uma interface moderna e funcional, a aplicação oferece funcionalidades como personalização de tempo, notificações sonoras ao término e histórico de uso. Perfeita para quem busca produtividade e organização no dia a dia!",
                Image: "https://res-console.cloudinary.com/ddrbxo7pj/media_explorer_thumbnails/74d8b334faf82012f5a516c6226d31d9/detailed",
                
            },
            {
                Title: "Timer Page",
                Descriptions: "A página Timer oferece uma visão detalhada do histórico de temporizadores configurados pelo usuário. Nela, é possível acompanhar o status de cada timer, indicando se foi concluído, interrompido ou ainda está em execução. Cada registro é exibido com a data e hora de criação, permitindo uma análise organizada e precisa do uso do tempo. <br/>  <br/>Com uma interface clara, a página facilita a consulta e gestão dos temporizadores, ajudando o usuário a monitorar sua produtividade e identificar padrões de execução. Ideal para quem busca controle e eficiência em suas atividades diárias.",
                Image: "https://res-console.cloudinary.com/ddrbxo7pj/media_explorer_thumbnails/bf9c5bd16d5dd97da0698af4760fd21b/detailed"
            }
        ]
    }
];

// Definindo a rota para retornar os projetos
app.get('/projects', (req, res) => {
    res.json(projects);
});

// Definindo a porta
const PORT = process.env.PORT || 3000;

// Iniciando o servidor
app.listen(PORT, '0.0.0.0' ,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
