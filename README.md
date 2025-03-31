# 📝 Documentação do Projeto  

Este projeto é um **cronômetro de estudos** com estatísticas detalhadas, permitindo que o usuário registre e visualize seu tempo de estudo por disciplina e tema.  

🔗 **Acesse a aplicação**: [Link do Deploy](https://cronometro-e-estatisticas-de-estudo.vercel.app/)  

---

## 🏗 Estrutura do Cronômetro  

O cronômetro é composto por três componentes principais:  

1️⃣ **Seletores de Disciplina e Tema**  
2️⃣ **Cronômetro**  
3️⃣ **Botões de Controle**  

---

## 🎛️ Seletores de Disciplina e Tema  

📌 **Regras de funcionamento**:  

✔ O seletor de **tema** só fica disponível após a escolha da disciplina.  
✔ Após o início do cronômetro, os seletores são **desabilitados** para evitar trocas durante a contagem.  
✔ Ao resetar o cronômetro, os seletores são reativados.  

---

## ⏱️ Funcionamento do Cronômetro  

📌 **Formato de exibição**:  

- **00:00** → Para tempos menores que 1 hora.  
- **00:00:00** → Para tempos maiores que 1 hora.  

---

## 🎮 Botões de Controle  

🔘 **Iniciar/Pausar** → Alterna entre iniciar e pausar o cronômetro.  
🔘 **Resetar** → Reinicia a contagem para 00:00.  
🔘 **Salvar Tempo** → Abre um modal de confirmação e armazena o tempo estudado nas estatísticas.  

---

## 📊 Estatísticas de Estudo  

📌 **Acesso rápido**: Menu de estatísticas no canto superior da tela.  

📌 **Gráficos disponíveis**:  

**📊 Gráfico de Barras** → Comparação entre as disciplinas estudadas.  
**🥧 Gráfico de Pizza** → Representação do tempo estudado por tema dentro de uma disciplina.  

📌 **Experiência do usuário**:  

✔ Estatísticas acessíveis em qualquer momento, independente do estado do cronômetro.  
✔ Caso o usuário ainda não tenha estudado, uma mensagem motivacional é exibida.  

---

## ⚙️ Escolhas Técnicas  

### 📌 Estrutura do Projeto  

- O projeto foi desenvolvido em **Next.js (versão mais atual)**.  
- A estrutura do código segue **padrões modulares**, contendo componentes e funções reutilizáveis.  
- As disciplinas e temas são **dados mockados** apenas para visualização da aplicação.  

### 🖌 Estilização  

- **[DaisyUI](https://daisyui.com/)** → Biblioteca de componentes para estilização.  

### 🚀 Notificações  

- **[React-Toastify](https://fkhadra.github.io/react-toastify/)** → Exibição de alertas e mensagens.  

### 📈 Gráficos  

- **[Chart.js](https://www.chartjs.org/)** → Utilizado para gerar gráficos de estatísticas.  

---

## 🔔 Mensagens de Aviso  

📌 Para garantir uma boa experiência do usuário, mensagens são exibidas nos seguintes casos:  

✔ Se tentar iniciar o cronômetro sem escolher **disciplina e tema** → Alerta informativo.  
✔ Se tentar **salvar o tempo** sem iniciar o cronômetro → O usuário é impedido de salvar.  

---

## 🏷️ Personalização do Título do Navegador  

O título da aba muda conforme o estado do cronômetro:  

- **"Meus estudos"** → Quando o cronômetro está parado.  
- **"Estudando [tempo]"** → Durante a contagem.  
- **"Em pausa [tempo]"** → Se o cronômetro estiver pausado.  

---

## ✅ Commits e Versionamento  

- Todos os commits seguem um **padrão semântico**, garantindo histórico limpo e organizado.