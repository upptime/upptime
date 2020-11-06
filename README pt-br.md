# [! [Upptime] (https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/logo.svg)] (https://upptime.js.org)

<! - início: descrição ->

Upptime (https://upptime.js.org) é o monitor de uptime de código aberto e a página de status, totalmente baseado em GitHub Actions and Issues.

<! - fim: descrição ->

[! [Uptime CI] (https://github.com/koj-co/upptime/workflows/Uptime%20CI/badge.svg)] (https://github.com/koj-co/upptime/actions?query = fluxo de trabalho% 3A% 22 Tempo de funcionamento + CI% 22)
[! [Tempo de resposta CI] (https://github.com/koj-co/upptime/workflows/Response%20Time%20CI/badge.svg)] (https://github.com/koj-co/upptime/ ações? consulta = fluxo de trabalho% 3A% 22Response + Tempo + CI% 22)
[! [Gráficos CI] (https://github.com/koj-co/upptime/workflows/Graphs%20CI/badge.svg)] (https://github.com/koj-co/upptime/actions?query = fluxo de trabalho% 3A% 22 Gráficos + CI% 22)
[! [IC de site estático] (https://github.com/koj-co/upptime/workflows/Static%20Site%20CI/badge.svg)] (https://github.com/koj-co/upptime/ ações? consulta = fluxo de trabalho% 3A% 22Static + Site + CI% 22)
[! [CI de resumo] (https://github.com/koj-co/upptime/workflows/Summary%20CI/badge.svg)] (https://github.com/koj-co/upptime/actions?query = fluxo de trabalho% 3A% 22 Resumo + CI% 22)

## [📈 Live Status] (https://demo.upptime.js.org): <! - live status -> ** 🟨 Interrupção parcial **

<! - início: páginas de status ->
<! - Este resumo é gerado pelo Upptime (https://github.com/upptime/upptime) ->
<! - Não edite isso manualmente, suas alterações serão substituídas ->

| URL | Status | História | Tempo de resposta | Uptime |
| ----------------------------------------------- | ------- | -------------------------------------------------- -------------------------------------------------- - | -------------------------------------------------- ----------------------------------- | -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------ |
| [Google] (https://www.google.com) | 🟩 Up | [google.yml] (https://github.com/upptime/upptime/commits/master/history/google.yml) | <img alt = "Gráfico de tempo de resposta" src = "./ graphs / google.png" height = "20"> 87ms | [! [Uptime 100.00%] (https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fupptime%2Fupptime%2Fmaster%2Fapi%2Fgoogle%2Fuptime.json)] ( https://demo.upptime.js.org/history/google) |
| [Wikipedia] (https://en.wikipedia.org) | 🟩 Up | [wikipedia.yml] (https://github.com/upptime/upptime/commits/master/history/wikipedia.yml) | <img alt = "Gráfico de tempo de resposta" src = "./ graphs / wikipedia.png" height = "20"> 157ms | [! [Uptime 100,00%] (https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fupptime%2Fupptime%2Fmaster%2Fapi%2Fwikipedia%2Fuptime.json)] ( https://demo.upptime.js.org/history/wikipedia) |
| [Arquivo da Internet] (https://archive.org) | 🟩 Up | [internet-archive.yml] (https://github.com/upptime/upptime/commits/master/history/internet-archive.yml) | <img alt = "Gráfico de tempo de resposta" src = "./ graphs / internet-archive.png" height = "20"> 543ms | [! [Uptime 100,00%] (https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fupptime%2Fupptime%2Fmaster%2Fapi%2Finternet-archive%2Fuptime.json) ] (https://demo.upptime.js.org/history/internet-archive) |
| [Hacker News] (https://news.ycombinator.com) | 🟩 Up | [hacker-news.yml] (https://github.com/upptime/upptime/commits/master/history/hacker-news.yml) | <img alt = "Gráfico de tempo de resposta" src = "./ graphs / hacker-news.png" height = "20"> 319ms | [! [Uptime 100,00%] (https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fupptime%2Fupptime%2Fmaster%2Fapi%2Fhacker-news%2Fuptime.json) ] (https://demo.upptime.js.org/history/hacker-news) |
| [Site quebrado] (https://thissitedoesnotexist.com) | 🟥 Down | [broken-site.yml] (https://github.com/upptime/upptime/commits/master/history/broken-site.yml) | <img alt = "Gráfico de tempo de resposta" src = "./ graphs / broken-site.png" height = "20"> 0ms | [! [Uptime 0.00%] (https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fupptime%2Fupptime%2Fmaster%2Fapi%2Fbroken-site%2Fuptime.json) ] (https://demo.upptime.js.org/history/broken-site) |
| Site secreto | 🟩 Up | [secret-site.yml] (https://github.com/upptime/upptime/commits/master/history/secret-site.yml) | <img alt = "Gráfico de tempo de resposta" src = "./ graphs / secret-site.png" height = "20"> 51ms

<! - fim: páginas de status ->

<! - início: documentos ->

## ⭐ Como funciona

- Ações GitHub são usadas como um monitor de tempo de atividade
  - A cada 5 minutos, um fluxo de trabalho visita seu site para verificar se ele está funcionando
  - O tempo de resposta é registrado a cada 6 horas e comprometido com o git
  - Gráficos de tempo de resposta são gerados todos os dias
- Problemas do GitHub são usados ​​para relatórios de incidentes
  - Um problema é aberto se um endpoint estiver inativo
  - Pessoas de sua equipe são designadas para o problema
  - Relatórios de incidentes são postados como comentários de problemas
  - Os problemas estão bloqueados para que não membros não possam comentar sobre eles
  - Os problemas são fechados automaticamente quando seu site volta a funcionar
  - Notificações do Slack são enviadas sobre atualizações
- As páginas do GitHub são usadas para o site de status
  - Um PWA simples, bonito e acessível é gerado
  - Construído com Svelte e Sapper
  - Busca dados deste repositório usando a API GitHub

[! [Captura de tela do site de status] (https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-status.png)] (https://upptime.js.org )

## 💝 Quem está usando o Upptime

<! - start: readme-repos-list ->
<! - Esta lista é gerada automaticamente usando koj-co / readme-repos-list ->
<! - Não edite esta lista manualmente, suas alterações serão substituídas ->
[! [upptime / .github] (https://images.weserv.nl/?url=avatars0.githubusercontent.com%2Fu%2F72692977%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https: //upptime.js.org)
[! [koj-co / status] (https://images.weserv.nl/?url=avatars3.githubusercontent.com%2Fu%2F65495851%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https : //status.koj.co)
[! [baealex / upptime] (https://images.weserv.nl/?url=avatars1.githubusercontent.com%2Fu%2F35596687%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https: / /status.blex.me)
[! [Melangebox / status] (https://images.weserv.nl/?url=avatars2.githubusercontent.com%2Fu%2F74049849%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https: / /status.melangebox.com)
[! [OswaldLabsOpenSource / status] (https://images.weserv.nl/?url=avatars3.githubusercontent.com%2Fu%2F21421587%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https: / /status.oswaldlabs.com)
[! [Cleverclip / status] (https://images.weserv.nl/?url=avatars1.githubusercontent.com%2Fu%2F60980904%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https: / /cleverclip.github.io/status/)
[! [bagiduid / uptime] (https://images.weserv.nl/?url=avatars2.githubusercontent.com%2Fu%2F72654797%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https: / /status.bagidu.id)
[! [chowdhary-org / status] (https://images.weserv.nl/?url=avatars0.githubusercontent.com%2Fu%2F68894094%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https : //chowdhary-org.github.io/status/)
[! [AnandChowdhary / status] (https://images.weserv.nl/?url=avatars3.githubusercontent.com%2Fu%2F2841780%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https: / /anandchowdhary.github.io/status/)
[! [stethoscope-js / status] (https://images.weserv.nl/?url=avatars3.githubusercontent.com%2Fu%2F71249357%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https : //stethoscope-js.github.io/status/)
[! [eartharoid / upptime] (https://images.weserv.nl/?url=avatars1.githubusercontent.com%2Fu%2F20905071%3Fv%3D4&h=50&w=50&fit=cover&mask=circle&maxage=7d)] (https: / /status.eartharoid.me)
<! - final: readme-repos-lista ->

## 👩‍💻 [Documentação] (https://upptime.js.org)

1. [Como funciona] (https://upptime.js.org/docs)
1. [Introdução] (https://upptime.js.org/docs/get-started)
1. [Configuração] (https://upptime.js.org/docs/configuration)
1. [Triggers] (https://upptime.js.org/docs/triggers)
1. [Notificações] (https://upptime.js.org/docs/notifications)
1. [Selos] (https://upptime.js.org/docs/badges)
1. [Pacotes] (https://upptime.js.org/docs/packages)
1. [Contribuindo] (https://upptime.js.org/docs/contributing)

### Conceitos

#### Problemas como incidentes

Quando o fluxo de trabalho do GitHub Actions detecta que um de seus URLs está inativo, ele abre automaticamente um problema do GitHub ([exemplo de problema no. 15] (https://github.com/koj-co/upptime/issues/15)). Você pode adicionar relatórios de incidentes a este problema adicionando comentários. Quando o seu site voltar a funcionar, o problema também será encerrado automaticamente.

<table>
  <tr>
    <td>
      <img alt = "Captura de tela do problema do GitHub" src = "https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-issue.png">
    </td>
    <td>
      <img alt = "Captura de tela da página do incidente" src = "https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-incident.png">
    </td>
  </tr>
</table>

#### Compromissos para tempo de resposta

Quatro vezes por dia, outro fluxo de trabalho é executado e registra o tempo de resposta de seus sites. Esses dados são confirmados no GitHub, portanto, estão disponíveis no histórico de commit de cada arquivo ([exemplo de histórico de commit] (https://github.com/koj-co/upptime/commits/master/history/wikipedia.yml)). Em seguida, a API do GitHub é usada para representar graficamente o histórico do tempo de resposta de cada endpoint e rastrear quando um site caiu.

<table>
  <tr>
    <td>
      <img alt = "Captura de tela de commits do GitHub" src = "https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-history.png">
    </td>
    <td>
      <img alt = "Captura de tela do status ao vivo" src = "https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-live-status.png">
    </td>
  </tr>
</table>
<! - fim: documentos ->

## 📄 Licença

- Código: [MIT] (./ LICENSE) © [Koj] (https://koj.co)
- Dados no diretório `. / History`: [Open Database License] (https://opendatacommons.org/licenses/odbl/1-0/)

<! - início: logotipo ->
<p align = "center">
  <a href="https://koj.co">
    <img width = "44" alt = "Koj" src = "https://kojcdn.com/v1598284251/website-v2/koj-github-footer_m089ze.svg">
  </a>
</p>
<p align = "center">
  <sub> Um projeto de código aberto de <a href="https://koj.co"> Koj </a>. <br> <a href="https://koj.co"> Mobília sua casa com estilo, por apenas CHF175 / mês → </a> </sub>
</p>
<! - fim: logotipo ->
