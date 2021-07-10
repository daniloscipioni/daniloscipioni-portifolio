<template>
  <div class="card-expansion">
    <md-card>
      <md-card-header>
        <div class="md-title">Em uma jogada de marketing, Banrisul entra em campo no Grenal</div>
        <div class="md-subhead">10/07/2021 13:01:37</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions>
         <md-card-expand-trigger >
            <md-button class="md-icon-button" >
              <md-icon>more_horiz</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Após lançar o maior Plano Safra da história da instituição, o banco do governo gaúcho vai estampar o slogan da unidade de agronegócios nas camisas de Grêmio e Internacional, em jogo pelo Campeonato Brasileiro de futebol Os bons resultados do setor agropecuário brasileiro vão entrar em campo, literalmente, em uma jogada de marketing do Banrisul. Após lançar o maior Plano Safra da história da instituição esta semana, com volume recorde de R$ 5,2 bilhões para o crédito rural na temporada 2021/22, o banco do governo gaúcho vai estampar o slogan da unidade de agronegócios nas camisas de Grêmio e Internacional, que se enfrentam pelo Campeonato Brasileiro de futebol neste sábado (10). Matéria exclusiva para assinantes. Para ter acesso completo, acesse o link da matéria e faça o seu cadastro.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>
<script>
  export default {
    name: 'CardExpansion'
  }
</script>

<style lang="scss" scoped>
  .card-expansion {
    // height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>