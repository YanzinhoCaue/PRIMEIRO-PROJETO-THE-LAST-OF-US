# 🍄 Landing Page - The Last of Us

Este projeto é uma landing page temática e imersiva para a série "The Last of Us" da HBO. A aplicação foi desenvolvida inteiramente com **HTML5, CSS3 e JavaScript puro (vanilla)**, com o objetivo de criar uma experiência visualmente impactante e demonstrar a construção de componentes interativos do zero.

---

### **🎬 Demonstração**

![image](https://github.com/YanzinhoCaue/PRIMEIRO-PROJETO-THE-LAST-OF-US/assets/127339610/1cee7041-7a59-4aec-8366-dbe3f5361885)

---

### **✨ Features e Destaques Técnicos**

* **Carrossel de Imagens Criado do Zero com JavaScript**:
    * O principal destaque técnico do projeto é o **carrossel de imagens, construído inteiramente com JavaScript puro**, sem o uso de bibliotecas ou plugins externos como Slick ou Swiper.
    * A lógica manipula o DOM para controlar qual imagem e qual botão de navegação estão ativos, trocando as classes CSS (`.ativa`, `.selecionado`) com base na interação do usuário.

* **Layout Imersivo em Tela Cheia**:
    * O carrossel funciona como um background de tela cheia (`position: fixed`), criando uma atmosfera imersiva.
    * Um **overlay com gradiente** foi aplicado sobre as imagens usando um pseudo-elemento (`::after`) no CSS, garantindo que o conteúdo de texto no primeiro plano tenha boa legibilidade.

* **Animações Sutis com CSS**:
    * As imagens do carrossel possuem uma transição suave de fade-in ao serem trocadas, criada com `@keyframes` no CSS, o que torna a experiência mais polida.

* **Design Totalmente Responsivo**:
    * A página foi construída para ser totalmente responsiva. Utilizando **Media Queries**, elementos como o menu lateral e a disposição do conteúdo são reajustados para garantir uma ótima visualização em desktops, tablets e celulares.

---

### **🛠️ Tecnologias Utilizadas**

Este projeto foi construído inteiramente com as tecnologias base do front-end:

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style-for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style-for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style-for-the-badge&logo=javascript&logoColor=black)

---

### **▶️ Como Executar o Projeto**

Este é um projeto puramente estático. Não há necessidade de instalar dependências ou configurar um servidor.

**Simplesmente clone o repositório e abra o arquivo `index.html` em qualquer navegador web.**

```bash
git clone [https://github.com/YanzinhoCaue/projeto-the-last-of-us.git](https://github.com/YanzinhoCaue/projeto-the-last-of-us.git)
cd projeto-the-last-of-us
# Abra o arquivo index.html

🧠 Principais Aprendizados
 * Construção de Componentes Interativos: Como criar um carrossel de imagens funcional do zero, controlando estados e eventos com JavaScript.
 * Manipulação Avançada do DOM: Seleção de múltiplos elementos, adição de event listeners em loops e alteração de classes para controlar a visibilidade e o estilo.
 * Técnicas de CSS para Layouts Imersivos: Uso de posicionamento fixed, z-index e pseudo-elementos para criar um design em camadas.
 * Estruturação de um projeto responsivo com arquivos de CSS dedicados.
💬 Contato
Yan Cauê
LinkedIn: linkedin.com/in/yancaue
GitHub: github.com/YanzinhoCaue

