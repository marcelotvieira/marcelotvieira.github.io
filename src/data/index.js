const skills = [
    {
        name: 'NodeJS',
        image: require('../images/nodejs.png'),
        subTitles: [
            'Rest APIs',
            'Express JS',
            'Sequelize JS',
            'POO',
            'Tests (Jest, Chai, Mocha, Sinon)',
        ]
    },
    {
        name: 'JavaScript',
        image: require('../images/javascript.png'),
        subTitles: [
            'EcmaScript 6',
            'Tests (Jest)',
            'Redux'
        ]
    },
    {
        name: 'TypeScript',
        image: require('../images/typescript.png'),
        subTitles: [
            'Tipagem',
            'Typescript + React',
            'Typescript + NodeJS',
            'POO',
        ]
    },
    {
        name: 'C#',
        image: require('../images/csharp.png'),
        subTitles: [
            'Rest APIs',
            'ASP.NET ^6 ',
            'MVC',
            'Entity FrameworkCore',
            'POO',
        ]
    },
    {
        name: 'Next JS',
        image: require('../images/next.png'),
        subTitles: [
            'SSR',
            'SSG',
        ]
    },
    {
        name: 'React JS',
        image: require('../images/react.png'),
        subTitles: [
            'Class Components',
            'Functional Components',
            'Context & Hooks',
            'AntDesign',
        ]
    },
    {
        name: 'Arquiteturas',
        image: require('../images/software-architecture.png'),
        subTitles: [
            'MSC',
            'MVC',
        ]
    },
    {
        name: 'Docker',
        image: require('../images/docker.png'),
        subTitles: [
            'Docker Cli',
            'Compose',
        ]
    },
    {
        name: 'Database',
        image: require('../images/database.png'),
        subTitles: [
            'MySQL',
            'Sql Server',
            'MongoDB (Mongoose)',
        ]
    },
    {
        name: 'CSS',
        image: require('../images/css.png'),
        subTitles: [
            'SASS',
            'Styled-components',
        ]
    },
    {
        name: 'Other Skills',
        image: require('../images/side.png'),
        subTitles: [
            'SOLID',
            'Github',
            'Bash',
            'Kanban'
        ]
    }
]

const content = [
    {
        id :1,
        name: 'Trivia',
        image: require('../images/trivia.png'),
        description: 'Projeto desenvolvido em equipe, para reaplicar demais conteúdos, e principalmente trabalhar a colaboração, junto de ferramentas para versionamento, backlog, etc...',source: 'https://trivia-group7-marcelotvieira.vercel.app/',
        usedStacks: [
            {
                name: 'React',
                usedTo: 'Utilizado na construção das páginas e componentes.',
            },
            {
                name: 'Redux',
                usedTo: 'Utilizado no gerencimando de estados globais para a aplicação.',
            },
            {
                name: 'SASS (CSS)',
                usedTo: 'Motor utilizado para estilos da aplicação.',
            },
        ],
        repository: 'https://github.com/marcelotvieira/triviaGroup7',
        tags: [
            'estudo',
            'react',
            'teste',
            'css',
            'context',
        ]
    },
    {
        id: 2,
        name: 'Store Manager API',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente para aplicar estudos em REST APIs e NodeJs. Se trata de uma api simples para gerencimaneto de uma loja, possuindo entidades como usuário, produtos e vendas.',source: 'https://github.com/marcelotvieira/store-manager-api',
        usedStacks: [
            {
                name: 'Express',
                usedTo: 'A api utiliza um servidor Express',
            },
            {
                name: 'Mysql',
                usedTo: 'A aplicação realiza um CRUD em um banco de dados relacional, utilizando Mysql.',
            },
            {
                name: 'Docker',
                usedTo: 'Tanto o servidor backend, quanto o banco de dados rodam sobre contêineres docker',
            },
        ],
        repository: 'https://github.com/marcelotvieira/store-manager-api',
        tags: [
            'estudo',
            'database',
            'docker',
            'node',
        ]
    },
    {
        id: 3,
        name: 'Barber App',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente. Se trata de uma aplicação full stack, construída para fins de estudos. Contempla 1 aplicação backend que realiza um CRUD em um banco de dados NoSql (MongoDB), provendo dados para uma aplicação frontend construída em React',source: 'https://github.com/marcelotvieira/BarberApp',
        usedStacks: [
            {
                name: 'Express',
                usedTo: 'A api utiliza um servidor Express',
            },
            {
                name: 'MongoDB',
                usedTo: 'A aplicação realiza um CRUD em um banco de dados não relacional, utilizando Mongoose',
            },
            {
                name: 'Docker',
                usedTo: 'Tanto a aplicação frontend, quanto a aplicação backend rodam sobre contêineres Docker',
            },
            {
                name: 'React',
                usedTo: 'Utilizado na construção de páginas e componentes.'
            },
            {
                name: 'SASS (MongoDB)',
                usedTo: 'Motor utilizado para estilos da aplicação.'
            }
        ],
        repository: 'https://github.com/marcelotvieira/BarberApp',
        tags: [
            'estudo',
            'docker',
            'react',
            'css',
            'node',
            'mongo',
        ]
    },
    {
        id: 4,
        name: 'Talker Manager API',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente. Trata-se de uma simples api para gerencimanto de pessoas palestrantes.',source: 'https://github.com/marcelotvieira/talker-manager-api',
        usedStacks: [
            {
                name: 'Express',
                usedTo: 'A api utiliza um servidor Express',
            },
            {
                name: 'Docker',
                usedTo: 'Tanto o servidor backend, quanto o banco de dados rodam sobre contêineres docker',
            },
        ],
        repository: 'https://github.com/marcelotvieira/talker-manager-api',
        tags: [
            'estudo',
            'docker',
            'node',
        ]
    },
    {
        id: 5,
        name: 'Tic Tac Toe',
        image: require('../images/tic-tac-toe.png'),
        description: 'Projeto desenvolvido individualmente. Este desafio está disponível em frontendmentor.io. Trata-se de um tradicional jogo da velha desenvolvido utilizando Javascript Vanilla',source: 'https://tic-tac-toe-marcelotvieira.vercel.app/',
        usedStacks: [
            {
                name: 'Javascript',
                usedTo: 'A aplicação foi inteiramente construída utilizando Vanilla JS',
            },
            {
                name: 'CSS',
                usedTo: 'Utilizado para estilos da aplicação',
            },
        ],
        repository: 'https://github.com/marcelotvieira/tic-tac-toe',
        tags: [
            'estudo',
            'javascript',
            'css',
        ]
    },
    {
        id: 6,
        name: 'Country API Practice',
        image: require('../images/country-api.png'),
        description: 'Projeto desenvolvido individualmente. Este desafio está disponível em frontendmentor.io. Trata-se de uma aplicação para prover informações sobre países, informações estas, consumidas através de uma API de terceiros.',source: 'https://rest-api-practice-marcelotvieira.vercel.app/',
        usedStacks: [
            {
                name: 'React',
                usedTo: 'Utilizado na construção de páginas e componentes.',
            },
            {
                name: 'API',
                usedTo: 'A aplicação consome informações de uma API de terceiros.',
            },
            {
                name: 'CSS',
                usedTo: 'Utilizado para estilos da aplicação.'
            }
        ],
        repository: 'https://github.com/marcelotvieira/rest-api-practice',
        tags: [
            'estudo',
            'react',
            'api',
            'spa',
            'css',
        ]
    },
    {
        id: 7,
        name: 'TrybeWallet',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente. Trata-se de uma carteira eletrônica, capaz de gerir gastos, e calcular conversões de moedas com base em informações de uma API de terceiros.',source: 'https://trybewallet-marcelotvieira.vercel.app/',
        usedStacks: [
            {
                name: 'React',
                usedTo: 'Utilizado na construção de páginas e componentes.',
            },
            {
                name: 'API',
                usedTo: 'Consumida API de terceiros para realizar a conversão de valores.',
            },
        ],
        repository: 'https://github.com/marcelotvieira/trybewallet',
        tags: [
            'estudo',
            'react',
            'spa',
            'api'
        ]
    },
    {
        id: 8,
        name: 'Trybetunes',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente. Trata-se de uma aplicação para consumir informações da API do Itunes, possibilitar ouvir prévias de músicas, setar e remover favoritas.',source: 'https://trybetunes-marcelotvieira.vercel.app/',
        usedStacks: [
            {
                name: 'React',
                usedTo: 'Utilizado na construção de páginas e componentes.',
            },
            {
                name: 'SASS (CSS)',
                usedTo: 'Motor utilizado para estilos da aplicação.',
            },
            {
                name: 'API',
                usedTo: 'Consumida API para trazer ficheiros responsáveis pela reprodução de música.',
            },
        ],
        repository: 'https://github.com/marcelotvieira/trybetunes',
        tags: [
            'estudo',
            'react',
            'teste',
            'api',
            'spa',
        ]
    },
    {
        id: 9,
        name: 'Calculator',
        image: require('../images/calculator.png'),
        description: 'Este projeto foi desenvolvido individualmente. A clássica e simples calculadora construída em Javascript Vanilla',
        source: 'https://calculator-app-marcelotvieira.vercel.app/',
        usedStacks: [
            {
                name: 'Javascript',
                usedTo: 'A aplicação foi inteiramente construída utilizando Vanilla JS',
            },
            {
                name: 'CSS',
                usedTo: 'Utilizado para estilos da aplicação',
            },
        ],
        repository: 'https://github.com/marcelotvieira/calculator-app',
        tags: [
            'estudo',
            'javascript',
            'css',
        ]
    },
    {
        id :10,
        name: 'Simple Typescript API',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente. Este projeto contempla uma simples api construída em typescript. Realizado a fim de aplicar recentes estudos em Typescript',
        source: 'https://github.com/marcelotvieira/simple-typescript-api',
        usedStacks: [
            {
                name: 'Typescript',
                usedTo: 'Utilizado na construção da aplicação',
            },
            {
                name: 'Express',
                usedTo: 'A aplicação utiliza um servidor Express',
            },
            {
                name: 'Docker',
                usedTo: 'Tanto o servidor backend, quanto o banco de dados rodam sobre contêineres docker',
            },
        ],
        repository: 'https://github.com/marcelotvieira/simple-typescript-api',
        tags: [
            'estudo',
            'typescript',
            'docker',
            'teste',
        ]
    },
    {
        id :11,
        name: 'Blogs Api',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente. Trata-se de uma simples API para gestão de um blog, possuindo entidades como usuários, categorias e posts. Realizado um CRUD em banco de dados relacional',
        source: 'https://github.com/marcelotvieira/blogs-api',
        usedStacks: [
            {
                name: 'Express',
                usedTo: 'A api utiliza um servidor Express',
            },
            {
                name: 'Mysql',
                usedTo: 'A aplicação realiza um CRUD em um banco de dados relacional, utilizando Mysql.',
            },
            {
                name: 'Docker',
                usedTo: 'Tanto o servidor backend, quanto o banco de dados rodam sobre contêineres docker',
            },
        ],
        repository: 'https://github.com/marcelotvieira/blogs-api',
        tags: [
            'estudo',
            'teste',
            'node',
            'database',
        ]
    },
    {
        id :12,
        name: 'Engineering Project Manager',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente. Trata-se de uma simples API para gestão de projetos de um projetista estrutural. Realizado um CRUD em banco de dados relacional',
        source: 'git@github.com:marcelotvieira/management-dashboard.git',
        usedStacks: [
            {
                name: 'Express',
                usedTo: 'A api utiliza um servidor Express',
            },
            {
                name: 'MongoDB',
                usedTo: 'A aplicação realiza um CRUD em um banco de dados não relacional MongoDB.',
            },
            {
                name: 'Docker',
                usedTo: 'Tanto o servidor backend, quanto o banco de dados rodam sobre contêineres docker',
            },
            {
                name: 'Prisma',
                usedTo: 'O prisma é utilizado como ORM, na criação de modelos e tipos.'
            }
        ],
        repository: 'git@github.com:marcelotvieira/management-dashboard.git',
        tags: [
            'estudo',
            'mongo',
            'node',
            'prisma',
            'typescript'
        ]
    },
    {
        id :13,
        name: 'Engineering Projects Manager WebApp',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente. Trata-se de uma simples aplicação frontend construída em React, que interage com uma api realizado um CRUD em banco de dados MongoDB',
        source: 'https://github.com/marcelotvieira/management-dashboard-ReactApp',
        usedStacks: [
            {
                name: 'React',
                usedTo: 'Utilizado na construção de páginas e componentes',
            },
            {
                name: 'API',
                usedTo: 'A aplicação consome de uma API presente no meu portfólio.',
            },
            {
                name: 'SASS',
                usedTo: 'O estilo da aplicação foi construído utilizando o Motor CSS SASS',
            },
            {
                name: 'AntDesign',
                usedTo: 'A aplicação faz uso de alguns componentes do UI Kit AntDesign'
            },
        ],
        repository: 'https://github.com/marcelotvieira/management-dashboard-ReactApp',
        tags: [
            'estudo',
            'react',
            'css',
            'sass',
            'typescript'
        ]
    },
    {
        id :14,
        name: 'BIManager Web App',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente. Tem a finalidade de consultar e extrair dados a partir de uma base de dados cadastrada.',
        source: 'https://github.com/marcelotvieira/bimanager_webapp',
        usedStacks: [
            {
                name: 'React',
                usedTo: 'Utilizado na construção de páginas e componentes',
            },
            {
                name: 'API',
                usedTo: 'A aplicação consome de uma API presente no meu portfólio.',
            },
            {
                name: 'SASS',
                usedTo: 'O estilo da aplicação foi construído utilizando o Motor CSS SASS',
            },
            {
                name: 'AntDesign',
                usedTo: 'A aplicação faz uso de alguns componentes do UI Kit AntDesign'
            },
        ],
        repository: 'https://github.com/marcelotvieira/bimanager_webapp',
        tags: [
            'estudo',
            'react',
            'css',
            'sass',
            'typescript'
        ]
    },
     {
        id :15,
        name: 'Trybank - C#',
        image: require('../images/logo.png'),
        description: 'Projeto com fim reprobatório desenvolvido individualmente. Se trata de uma aplicação orientada a objeto para simular eventos bancários.',
        source: 'https://github.com/marcelotvieira/trybank',
        usedStacks: [
            {
                name: '.NET 6',
                usedTo: 'Utilizado majoritariamente C# no ambiente .NET',
            },
        ],
        repository: 'https://github.com/marcelotvieira/trybank',
        tags: [
            'estudo',
            'dotnet',
        ]
    },
    {
        id :16,
        name: 'BIManager API - .NET',
        image: require('../images/logo.png'),
        description: 'Projeto desenvolvido individualmente. Api desenvolvida com .NET 6, utilizando EntityFrameworkCore 7 e ASP.NET Core 6',
        source: 'https://github.com/marcelotvieira/BIManager-dotnet',
        usedStacks: [
            {
                name: '.NET 6',
                usedTo: 'Utilizado majoritariamente C# no ambiente .NET',
            },
            {
                name: 'Entity Frameork Corre',
                usedTo: 'Utilizado como Object Relational Mapping para definir entidades, foi utilizado mapeamento com Data Annotations',
            },
            {
                name: 'ASP.NET Core',
                usedTo: 'A API é construída com asp.net e possui rotas http para realizar CRUD em banco de dados.',
            },
        ],
        repository: 'https://github.com/marcelotvieira/BIManager-dotnet',
        tags: [
            'estudo',
            'server',
            'database',
            'dotnet',
        ]
    },
    {
        id :17,
        name: 'Megaminas Distribuidora',
        image: require('../images/megaminas.png'),
        description: 'Projeto executado para uma distribuidora atuante na região de Belo Horizonte.',
        source: 'https://megaminasdistribuidora.com.br',
        usedStacks: [
            {
                name: 'React',
                usedTo: 'Utilizado na construção de páginas e componentes',
            },
            {
                name: 'Email-Js',
                usedTo: 'A aplicação consome de uma API para utilização de um servidor de email.',
            },
            {
                name: 'SASS',
                usedTo: 'O estilo da aplicação foi construído utilizando o Motor CSS SASS',
            },
            {
                name: 'AntDesign',
                usedTo: 'A aplicação faz uso de alguns componentes do UI Kit AntDesign'
            },
        ],
        repository: 'https://github.com/marcelotvieira',
        tags: [
            'react',
            'css',
            'sass',
            'typescript'
        ]
    },
    {
        id :18,
        name: 'Cardápio do bebê',
        image: require('../images/cardapiodobebe.png'),
        description: 'Projeto executado para promover a venda de uma apostila sobre cuidados alimentares com bebês.',
        source: 'https://produtodigitalseguro.com.br',
        usedStacks: [
            {
                name: 'React',
                usedTo: 'Utilizado na construção de páginas e componentes',
            },
            {
                name: 'SASS',
                usedTo: 'O estilo da aplicação foi construído utilizando o Motor CSS SASS',
            },
            {
                name: 'AntDesign',
                usedTo: 'A aplicação faz uso de alguns componentes do UI Kit AntDesign'
            },
        ],
        repository: 'https://github.com/marcelotvieira/cardapiodobebe',
        tags: [
            'react',
            'css',
            'sass',
            'typescript'
        ]
    },
    {
        id :19,
        name: 'Nery Barber',
        image: require('../images/nery.png'),
        description: 'Projeto executado para uma barbearia, com intuito institucional e informativo.',
        source: 'https://nerybarber.net.br',
        usedStacks: [
            {
                name: 'React',
                usedTo: 'Utilizado na construção de páginas e componentes',
            },
            {
                name: 'SASS',
                usedTo: 'O estilo da aplicação foi construído utilizando o Motor CSS SASS',
            },
            {
                name: 'AntDesign',
                usedTo: 'A aplicação faz uso de alguns componentes do UI Kit AntDesign'
            },
        ],
        repository: 'https://github.com/marcelotvieira/nerybarber',
        tags: [
            'react',
            'css',
            'sass',
            'typescript'
        ]
    }
]

const contacts = [
    {
        name: 'Whatsapp',
        source: 'https://wa.me/5531999393313',
        icon: (<i style={{color: '#8dcc7f'}} className="fa-brands fa-whatsapp fa-lg" />),
    },
    {
        name: 'Linkedin',
        source: 'https://www.linkedin.com/in/marcelovieir4/',
        icon: (<i style={{color: '#5476f1'}} className="fa-brands fa-linkedin-in fa-lg" />)
    },
    {
        name: 'Github',
        source: 'https://github.com/marcelotvieira',
        icon: (<i style={{color: '#222222'}} className="fa-brands fa-github fa-lg" />)
    }
]

export { 
    skills,
    content,
    contacts,
}
