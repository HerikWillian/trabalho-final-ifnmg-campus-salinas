# IFNMG Campus Salinas

Site institucional do **Instituto Federal do Norte de Minas Gerais — Campus Salinas**, apresentando a história, os cursos, a estrutura e o acesso ao campus. Desenvolvido como trabalho acadêmico de Front-End.

### 🔗 [**site-ifnmg-salinas**](https://trabalho-final-ifnmg-campus-salinas.vercel.app/)


![status](https://img.shields.io/badge/status-conclu%C3%ADdo-2C4A34) ![tipo](https://img.shields.io/badge/tipo-site%20institucional-B8792E) ![stack](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-8B4226)

---

## Sobre o projeto

O Campus Salinas é uma das unidades de ensino mais antigas do Norte de Minas Gerais, com origem em 1953 como escola agrícola. Este site reúne, em um único lugar, sua trajetória histórica, os cursos técnicos e superiores oferecidos hoje, a estrutura física do campus e as informações de acesso (vestibular).

Todo o conteúdo é baseado em fontes oficiais — nada foi inventado (ver [Fontes](#-fontes)).

## Preview

| Seção | O que mostra |
|---|---|
| **Início** | Apresentação do campus com dados rápidos |
| **Sobre** | Missão institucional e pilares (ensino, pesquisa, extensão, território) |
| **História** | Linha do tempo horizontal e navegável, com 14 marcos de 1953 a 2026 |
| **Cursos** | Abas alternando entre cursos **Técnicos** e **Superiores**, com ano de implantação |
| **Estrutura** | Laboratórios, alojamento, Fazenda Santa Isabel, áreas esportivas |
| **Vestibular** | Vagas e prazos reais do Vestibular Complementar 2026 |
| **Contato** | Endereço, telefone e mapa |

Site inteiramente estático e de conteúdo público — não possui área administrativa.

## Stack

- **HTML5** semântico
- **CSS3** puro — Custom Properties, Grid, Flexbox, media queries, sem frameworks
- **JavaScript** vanilla — sem dependências, sem etapa de build
- Fontes: [Fraunces](https://fonts.google.com/specimen/Fraunces) (títulos), [Public Sans](https://fonts.google.com/specimen/Public+Sans) (texto), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (dados/rótulos), via Google Fonts

## Estrutura do repositório

```
.
├── index.html      # marcação e conteúdo do site
├── styles.css      # estilos (tema, layout, responsividade)
├── script.js       # menu mobile, abas de cursos, revelação ao rolar
└── README.md
```

## Rodando localmente

Não há build nem dependências. Basta abrir o `index.html` no navegador, ou servir a pasta:

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## Deploy

O projeto está hospedado na **Vercel**, sem qualquer configuração de build (site estático puro).

Para publicar sua própria cópia:

1. Suba o repositório para o GitHub:
   ```bash
   git init
   git add .
   git commit -m "Site institucional IFNMG Campus Salinas"
   git branch -M main
   git remote add origin <https://github.com/HerikWillian/trabalho-final-ifnmg-campus-salinas>
   git push -u origin main
   ```
2. Em [vercel.com](https://vercel.com), clique em **Add New → Project** e importe o repositório.
3. Deixe **Framework Preset** como `Other` — nenhum *build command* é necessário.
4. Clique em **Deploy**. A Vercel vai gerar a URL pública automaticamente.
5. Copie o link gerado e atualize-o no topo deste README.

---

## 🧑‍🏫 Documentação da apresentação

### Introdução

**Objetivo.** Desenvolver um site institucional completo para o IFNMG Campus Salinas, apresentando de forma clara e profissional sua história, seus cursos, sua estrutura e as informações de acesso (vestibular).

**Relevância e justificativa.** O Campus Salinas é uma das mais antigas unidades de ensino profissional do Norte de Minas Gerais, com origem em 1953. Apesar disso, sua história e sua oferta de cursos não estão reunidas de forma acessível e visual em um único lugar. Este projeto centraliza essas informações, servindo tanto como material de divulgação institucional quanto como exercício prático de desenvolvimento front-end, aplicando conceitos de design responsivo, acessibilidade, organização de conteúdo e boas práticas de usabilidade.

### Desenvolvimento — Front-End

**Ferramentas, tecnologias e metodologia.** Ver seções [Stack](#stack) e [Estrutura do repositório](#estrutura-do-repositório) acima. O desenvolvimento seguiu quatro etapas: (1) levantamento de dados reais sobre o campus em fontes oficiais; (2) definição da identidade visual — paleta inspirada no território do campus (verde-mata, âmbar/cobre remetendo à cachaça envelhecida em barril, tons de terra) e tipografia combinando um serifado expressivo com uma fonte civil/institucional; (3) estruturação do conteúdo nas sete seções listadas em [Preview](#preview); (4) implementação responsiva, com navegação mobile, abas de cursos e revelação de conteúdo ao rolar a página.

**Estrutura e funcionamento.** Ver tabela em [Preview](#preview).

### Conclusão

**Desafios enfrentados**
- Conciliar fontes oficiais nem sempre consistentes entre si (ex.: diferentes registros sobre o ano de implantação de alguns cursos técnicos), optando sempre pela informação divulgada na página histórica oficial do próprio campus
- Traduzir décadas de história institucional em uma linha do tempo visual, sem sobrecarregar o usuário com texto
- Garantir bom funcionamento em telas pequenas, já que grande parte do público-alvo (candidatos ao vestibular) acessa via celular

**Trabalhos futuros / continuação**
- Integração com o feed de notícias real do portal do IFNMG via scraping ou RSS
- Página dedicada a cada curso, com matriz curricular e corpo docente
- Formulário de contato funcional integrado a um backend
- Versão multilíngue (inglês/espanhol) para intercâmbio acadêmico

---

## 📚 Fontes

Todo o conteúdo histórico e institucional foi extraído das seguintes fontes públicas, sem invenção de dados:

- Portal oficial do IFNMG — [Histórico do Campus Salinas](https://www.ifnmg.edu.br/menu-salinas/historico)
- Portal oficial do IFNMG — [Conheça o IFNMG](https://www.ifnmg.edu.br/ifnmg/conheca)
- Portal oficial do IFNMG — [Vestibular](https://www.ifnmg.edu.br/vestibular)
- Wikipédia — [Instituto Federal do Norte de Minas Gerais](https://pt.wikipedia.org/wiki/Instituto_Federal_do_Norte_de_Minas_Gerais)
- WebTerra (mar/2026) — Notícia sobre o Vestibular Complementar 2026 do Campus Salinas

## Licença

Projeto acadêmico, sem fins comerciais. Não é um canal oficial de comunicação do IFNMG.