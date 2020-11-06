# [![Upptime](https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/logo.svg)](https://upptime.js.org)

<!--start: description--->

Upptime (https://upptime.js.org) é o monitor de uptime de código aberto e a página de status, totalmente baseado em GitHub Actions and Issues.

<!--end: description--->

<!--start: docs--->

*This README is also available in [🇬🇧 English](./README.md)*

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

[![Captura de tela do site de status](https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-status.png)](https://upptime.js.org)

## 👩‍💻 [Documentação](https://upptime.js.org)

1. [Como funciona](https://upptime.js.org/docs)
1. [Introdução](https://upptime.js.org/docs/get-started)
1. [Configuração](https://upptime.js.org/docs/configuration)
1. [Triggers](https://upptime.js.org/docs/triggers)
1. [Notificações](https://upptime.js.org/docs/notifications)
1. [Selos](https://upptime.js.org/docs/badges)
1. [Pacotes](https://upptime.js.org/docs/packages)
1. [Contribuindo](https://upptime.js.org/docs/contributing)

### Conceitos

#### Problemas como incidentes

Quando o fluxo de trabalho do GitHub Actions detecta que um de seus URLs está inativo, ele abre automaticamente um problema do GitHub ([exemplo de problema no. 15](https://github.com/koj-co/upptime/issues/15)). Você pode adicionar relatórios de incidentes a este problema adicionando comentários. Quando o seu site voltar a funcionar, o problema também será encerrado automaticamente.

<table>
  <tr>
    <td>
      <img alt="Captura de tela do problema do GitHub" src="https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-issue.png">
    </td>
    <td>
      <img alt="Captura de tela da página do incidente" src="https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-incident.png">
    </td>
  </tr>
</table>

#### Compromissos para tempo de resposta

Quatro vezes por dia, outro fluxo de trabalho é executado e registra o tempo de resposta de seus sites. Esses dados são confirmados no GitHub, portanto, estão disponíveis no histórico de commit de cada arquivo ([exemplo de histórico de commit](https://github.com/koj-co/upptime/commits/master/history/wikipedia.yml)). Em seguida, a API do GitHub é usada para representar graficamente o histórico do tempo de resposta de cada endpoint e rastrear quando um site caiu.

<table>
  <tr>
    <td>
      <img alt="Captura de tela de commits do GitHub" src="https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-history.png">
    </td>
    <td>
      <img alt="Captura de tela do status ao vivo" src="https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/screenshot-live-status.png">
    </td>
  </tr>
</table>
<!--end: docs--->

## 📄 Licença

- Código: [MIT](./ LICENSE) © [Koj](https://koj.co)
- Dados no diretório `. / History`: [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/)

<!-- start: logo -->

<p align="center">
  <a href="https://koj.co">
    <img width="44" alt="Koj" src="https://kojcdn.com/v1598284251/website-v2/koj-github-footer_m089ze.svg">
  </a>
</p>
<p align="center">
  <sub> Um projeto de código aberto de <a href="https://koj.co"> Koj </a>. <br> <a href="https://koj.co"> Mobília sua casa com estilo, por apenas CHF175 / mês → </a> </sub>
</p>
<!-- end: logo -->
