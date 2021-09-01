<template>
  <div id="app" class="wrapper">
    <div class="card">
      <div class="card__info">
        <ul class="contacts">
          <li>
            <button v-clipboard="'+7-911-656-22-05'">
              <font-awesome-icon icon="phone" class="icon" /></button
            >+7-911-656-22-05
          </li>
          <li>
            <button v-clipboard="'a.alex.nekrasov@gmail.com'">
              <font-awesome-icon icon="envelope" class="icon" /></button
            >a.alex.nekrasov@gmail.com
          </li>
          <li v-clipboard="'+7-911-656-22-05'">
            <button class="whatsapp">
              <font-awesome-icon
                :icon="['fab', 'whatsapp']"
                class="icon"
              /></button
            >+7-911-656-22-05
          </li>
          <li>
            <a href="https://t.me/TheRealNekrasov" target="_blank">
              <font-awesome-icon :icon="['fab', 'telegram']" class="icon"/></a
            >@TheRealNekrasov
          </li>
        </ul>
      </div>
      <div class="card__image"></div>
    </div>
    <Test />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
export default {
  name: "App",
  components: { Test },
};
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap')


$mobile: 425px

*
  font-family: 'Montserrat'
  padding: 0
  margin: 0
  box-sizing: border-box
  cursor: default
.wrapper
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  background: hsl(150,2%,13%)
  .card
    display: grid
    grid-template: 1fr / 1fr 1fr
    width: 80%
    @media screen and (max-width: $mobile)
      grid-template: 1fr / 1fr
      width: 90%
    .card__info
      display: flex
      flex-direction: column
      .contacts
        list-style: none
        > li
          color: hsl(206,11%,26%)
          display: flex
          align-items: center
          margin-bottom: 5px
          user-select: contain
          cursor: url('./assets/clipboard-cursor.svg'), pointer
          background-image: linear-gradient(to bottom right, transparent 50%, rgba(0,0,0,.1) 60%)
          border-radius: 8px
          &:nth-child(3)
            .whatsapp
              background: hsl(129,63%,50%)
              cursor: url('./assets/clipboard-cursor.svg'), pointer
              > .icon
                color: #fff
            &:hover
              .whatsapp
                border-color: hsl(129,63%,50%)
                background-color: transparent
                > .icon
                  color: hsl(129,63%,50%)
              > .icon
                color: #fff
          &:last-child
            margin-bottom: 0
          > a
            text-decoration: none
            color: hsl(206,11%,26%)
            &:active, &:hover
              text-decoration: none
              color: hsl(206,11%,26%)
          > button
            position: relative
            padding: 6px
            background: none
            border: 1px solid transparent
            margin-right: 10px
            border-radius: 50%
            transition: all .3s
            &:active, &:focus
              outline: none
            &:active
              transform: scale(0.96)
            &::before
              content: ''
              position: absolute
              top: 0
              bottom: 0
              left: 0
              right: 0
              background: transparent
            > .icon
              width: 20px
              height: 20px




    .card__image
      > img
        width: 100%
        height: 100%
</style>
