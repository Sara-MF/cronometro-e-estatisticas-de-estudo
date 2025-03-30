# Documentação do projeto

## Card do cronômetro

O card do cronômetro é composto por 3 estruturas principais:

* Seletores de escolha de disciplina e tema
* Cronômetro
* Botões de ação do cronômetro

## Seletores

Regras dos seletores:

* O seletor de escolha de tema fica disponível apenas quando a disciplina tiver sido escolhida
* Após o inicio do cronômetro, independente de estar pausado ou não, os seletores ficam desabilitados, para que o usuário não troque de disciplina enquanto o cronômetro estiver ativo. Caso o cronômetro seja reiniciado, os seletores voltam a ficar habilitados

## Cronômetro

* É exibido no formato 00:00 enquanto o tempo cronometrado for menor que 1 hora. Caso seja maior, exibe no formato 00:00:00

## Botões

Têm 3 botões que controlam o cronômetro:

* Iniciar/Pausar: São o mesmo botão que se alternam de acordo com o estado do cronômetro
* Resetar: Reinicia o cronômetro
* Salvar tempo: Abre o modal de confirmação que permite encerrar o cronômetro e armazenar o tempo nas estatísticas

## Estatísticas

Foi inserido um atalho de Estatísticas no canto superior da tela, para que o usuário pudesse visualizar as estatísticas sem ter que esperar concluir algum estudo para conferir

O gráfico em barra mostra o comparativo de tempo de estudo entre as disciplinas. Abaixo vem os gráficos de pizza, em que cada um deles mostra uma disciplina e os tempos de cada tema estudado

As estatísticas podem ser acessadas em qualquer estado do cronômetro

Caso o usuário tente acessar sem ter estudado ainda, aparece uma mensagem o incentivando a estudar

## Outros detalhes do projeto

### Construção de seletores

As disciplinas e temas foram criados aleatoriamente para ilustrar as funcionalidades e estão armazenadas em um objeto

### Mensagens de aviso

Caso o usuário tente realizar a ação de iniciar o cronômetro antes de ter escolhido a disciplina e o tema, é exibida uma mensagem o orientando e o cronômetro não é iniciado

O mesmo ocorre caso tente salvar o tempo de estudo antes do início do cronômetro

### Título da aba do navegador

Enquanto o cronômetro não tiver sido iniciado, o título é exibido como "Meus estudos"

Após o início, é exibido como "Estudando" e mostra ao lado o tempo do cronômetro

Caso seja pausado, é exibido "Em pausa", também com o tempo ao lado

### Ferramentas utilizadas

Para escolha de cores e componentes foi utilizada a biblioteca daisyui

Para exibição das mensagens de erro foi utilizada a biblioteca react-toastify

Para os gráficos foi utilizada a biblioteca Chartjs

O projeto foi criado em Nextjs, na versão mais atualizada

Os commits do projeto foram realizados de forma semântica