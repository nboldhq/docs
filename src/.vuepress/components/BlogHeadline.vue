<template>
  <div>

    <br /><br />
    
    <div class="uk-background-cover uk-background-blend-screen uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle" :style="pic">
        <div class="bg-text uk-section uk-section-muted uk-section-xsmall uk-padding-small uk-text-center">
        <h1>{{ $page.frontmatter.title }}</h1>
        <div class="uk-flex uk-flex-center">
        <a href="#" class="" uk-toggle="target: #share-offcanvas-flip"
        uk-tooltip="Share this article">
          <span uk-icon="icon: social"></span>
          <span class="">&nbsp;&nbsp;Share It!</span>
        </a>
        </div>
        </div>
    </div>

    <div class="uk-section uk-section-small uk-section-muted uk-padding-small">
      <p class="uk-text-small uk-align-right">
        <i>Published by <a class="author-link" :href="$page.frontmatter.author.profile" target="_blank">{{ $page.frontmatter.author.name }}</a></i>
        &nbsp;{{ date }}, tagged as&nbsp;<span v-for="tag in $page.frontmatter.tags" style="margin-right: 5px;">
        <span uk-icon="icon: tag;"></span>{{ tag }}
        </span>
      </p>
    </div>

    <div id="share-offcanvas-flip" uk-offcanvas="mode: slide; flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <h3>Share This Post</h3>
        <p>Please select how you want to share this post:</p>
        <a :href="teamsSharingLink"
          target="_blank">
          <button class="uk-button uk-button-danger uk-width-1-1" uk-tooltip="Share to Microsoft Teams">
            <i class="fas fa-users"></i>
            <span class="">&nbsp;&nbsp;Microsoft Teams</span>
          </button>
        </a>
        <hr />
        <a :href="linkedinSharingLink"
          target="_blank">
          <button class="uk-button uk-button-default uk-width-1-1" uk-tooltip="Share to LinkedIn">
            <i class="fab fa-linkedin"></i>
            <span class="">&nbsp;&nbsp;LinkedIn</span>
          </button>
        </a>
        <hr />
        <a :href="twitterSharingLink"
          target="_blank">
          <button class="uk-button uk-button-default uk-width-1-1" uk-tooltip="Share to Twitter">
            <i class="fab fa-twitter"></i>
            <span class="">&nbsp;&nbsp;Twitter</span>
          </button>
        </a>
        <hr />
        <a :href="whatsappSharingLink"
          target="_blank">
          <button class="uk-button uk-button-default uk-width-1-1" uk-tooltip="Share to WhatsApp">
            <i class="fab fa-whatsapp"></i>
            <span class="">&nbsp;&nbsp;WhatsApp</span>
          </button>
        </a>
        <hr />
        <a :href="mailSharingLink"
          target="_blank">
          <button class="uk-button uk-button-default uk-width-1-1" uk-tooltip="Share by Email">
            <i class="far fa-envelope"></i>
            <span class="">&nbsp;&nbsp;Email</span>
          </button>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  mounted () {
    document.getElementsByTagName('h1')[0].style.display='none'
  },
  computed: {
    date () {
      const moment = require('moment')
      return moment(this.$page.frontmatter.date, "YYYYMMDD").fromNow()
    },
    pic () {
      return 'background-image: url(' + this.$page.frontmatter.image + ');'
    },
    teamsSharingLink () {
      return 'https://teams.microsoft.com/share?href=https%3A%2F%2Fdevelopers.salestim.com' + this.$page.frontmatter.permalink + '&amp;msgText=' + this.$page.frontmatter.title + '&amp;referrer=developers.salestim.com'
    },
    linkedinSharingLink () {
      return 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdevelopers.salestim.com' + this.$page.frontmatter.permalink + '&title=' + this.$page.frontmatter.title + '&summary=' + this.$page.frontmatter.description + '&source=SalesTim%2CTech%2CHub'
    },
    twitterSharingLink () {
      return 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fdevelopers.salestim.com' + this.$page.frontmatter.permalink + '&text=' + this.$page.frontmatter.title + '&hashtags=SalesTim, MicrosoftTeams'
    },
    whatsappSharingLink () {
      return 'https://api.whatsapp.com/send?text=' + this.$page.frontmatter.title + '%20https%3A%2F%2Fdevelopers.salestim.com' + this.$page.frontmatter.permalink
    },
    mailSharingLink () {
      return 'mailto:?subject=' + this.$page.frontmatter.title + '&body=' + this.$page.frontmatter.title + '%0D%0Ahttps%3A%2F%2Fdevelopers.salestim.com' + this.$page.frontmatter.permalink + '%0D%0A%0D%0A'
    }
  }
}
</script>

<style>
  .bg-text {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.5);  
  }
  .author-link {
    color: #51459c !important;
  }
</style>