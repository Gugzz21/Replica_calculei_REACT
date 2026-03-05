# Status do Projeto: Calculei (React Clone)

Este documento descreve o que já foi implementado e o que ainda falta para que a interface da aplicação "Calculei" fique idêntica ao modelo de referência (mockup) apresentado.

## ✅ O que já foi feito

*   **Estrutura Inicial do Projeto:** Configuração básica com React e TailwindCSS (via Vite/CRA).vos dos componentes criados i
*   **Componentes Base:** Arquisoladamente (`Header`, `Form`, `Data`, `Juros`, `Calcular`).
*   **Cabeçalho (Header):**
    *   Inclusão da logo do "Calculei".
    *   Link de "Orientações" com o respectivo ícone na direita.
*   **Aviso Superior:** O texto abaixo do cabeçalho já está presente na tela ("Todos os valores estão em Reais (R$)...").
*   **Renderização Principal:** O arquivo `App.tsx` já incorpora e chama os componentes (ainda que dispostos de forma vertical simples).

---

## ❌ O que falta fazer (Para ficar visualmente completo)

Abaixo estão listadas as pendências para que a UI fique como no mockup.

### 1. Layout Base (Grid) e Estilização
*   O layout atual empilha tudo em uma coluna simples (`flex-col`). Ele precisa ser modificado para dividir a tela em duas colunas na parte de cima:
    *   **Esquerda:** Formulário Principal.
    *   **Direita:** Card de Histórico de Cálculos e textos explicativos.
*   Ajustar margens laterais, fontes padrão e cores secundárias para bater com a identidade visual da imagem.

### 2. Formulário Principal
Os inputs e componentes básicos existem, mas estão incorretos e sem estilização. É preciso criar:
*   `Select`: **Tipo de cálculo** (ex: "Créditos / Débitos Entre Particulares").
*   `Select`: **Índice de correção monetária** (ex: "TJ/RJ LEI 6.899/81").
*   `Input`: **Valor** (formatado como moeda, com prefixo `R$`).
*   `Input/Datepicker`: **Data inicial** e **Data do cálculo** alinhadas na mesma linha.
*   `Select`: **Descrição** (ex: "Ressarcimento").

### 3. Coluna da Direita (Contexto Histórico)
*   **Tabela de Histórico de Cálculos:** Precisa ser desenhada uma pequena tabela com as colunas `#`, `Data Inicial`, `Valor principal`, e `Total devido`.
*   **Caixa e Textos:** O card branco ao redor dessa tabela.
*   **Parágrafos Informativos:** Adicionar o texto explicativo sobre Lançamentos de Crédito e o direcionamento para a DIRETRIZ TÉCNICA MPRJ (com estilo de link azul).

### 4. Toggle "Juros"
*   O componente atual `Juros` possui um campo numérico simples. Ele deve ser atualizado para exibir apenas o label **"Juros"** e um **botão Toggle do tipo on/off** (switch arredondado) ativo ou inativo.

### 5. Botões de Ação
*   O componente atual tem apenas um pequeno botão azul.
*   É necessário criar 2 botões grandes ocupando toda a largura do formulário, dispostos lado a lado:
    *   **CALCULAR**: Fundo cinza claro (estilo botão desativado/secundário).
    *   **LIMPAR**: Fundo branco, com borda azul.

### 6. Seção Central - Tabela "Lançamentos"
Totalmente ausente. É necessário criar:
*   Título **"Lançamentos"** com hierarquia visual clara.
*   A tabela de lançamentos com fundo azulado contendo as seguintes colunas de cabeçalho: `#`, `Data Inicial`, `Valor principal`, `Data do cálculo`, `Índice de correção monetária`, `Valor atualizado`, `Dias`, `Juros` e `Total devido`.
*   A linha padrão (default row) da tabela preenchida com zerados (`R$ 0,00`).
*   O texto informativo da tabela com borda inferior: *"Calcule o primeiro lançamento."*

### 7. Rodapé (Footer)
*   Ausente no projeto atual.
*   Incluir logo e título **GATE MPRJ - GRUPO DE APOIO TÉCNICO ESPECIALIZADO**, centralizado no fundo da página.
