<template>
  <div>
    <div class="posts" v-if="posts.length">
      <div uk-filter="target: .cardsGrid">
        <div
          class="uk-background-cover uk-background-blend-screen uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle"
          style="background-image: url(/img/headers/technology.png);"
        >
          <div
            class="bg-text uk-section uk-section-muted uk-section-xsmall uk-padding-small uk-text-center"
          >
            <h1>Stories from the makers of SalesTim.</h1>
            <div class="uk-flex uk-flex-center">
              <span uk-filter-control>
                <a href="#">All</a>
              </span>&nbsp;|&nbsp;
              <span uk-filter-control=".tag-teams">
                <a href="#">Teams</a>
              </span>&nbsp;|&nbsp;
              <span uk-filter-control=".tag-intercom">
                <a href="#">Intercom</a>
              </span>&nbsp;|&nbsp;
              <span uk-filter-control=".tag-github">
                <a href="#">GitHub</a>
              </span>&nbsp;|&nbsp;
              <span uk-filter-control=".tag-wordpress">
                <a href="#">WordPress</a>
              </span>&nbsp;|&nbsp;
              <span uk-filter-control=".tag-devops">
                <a href="#">DevOps</a>
              </span>
            </div>
          </div>
        </div>

        <!-- <nav class="uk-navbar-container" uk-navbar>
          <div class="uk-navbar-left">
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
              <li uk-filter-control><a href="#">All</a></li>
              <li uk-filter-control=".tag-intercom"><a href="#">Intercom</a></li>
              <li uk-filter-control=".tag-github"><a href="#">GitHub</a></li>
              <li uk-filter-control=".tag-wordpress"><a href="#">WordPress</a></li>
              <li uk-filter-control=".tag-devops"><a href="#">DevOps</a></li>
            </ul>
          </div>
        </nav>-->

        <div
          class="cardsGrid uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l uk-grid uk-grid-small uk-height-match"
          uk-grid
          uk-height-match="target: > div > .uk-card"
        >
          <div v-for="post in posts" :class="post.tagClass">
            <div class="uk-card uk-card-hover uk-card-default uk-padding-small">
              <div class="uk-card-media-top">
                <router-link :to="post.frontmatter.permalink">
                  <img :src="post.frontmatter.image" alt />
                </router-link>
              </div>

              <div class="uk-card-body uk-padding-small">
                <div class="uk-card-badge uk-label" :uk-filter-control="post.tagClassSelector">
                  <a href="#">{{ post.frontmatter.tags[0] }}</a>
                </div>
                <router-link :to="post.frontmatter.permalink">
                  <h3 class="uk-card-title">{{ post.frontmatter.title }}</h3>
                  <p>{{ post.frontmatter.description }}</p>
                </router-link>
              </div>

              <div class="uk-card-footer uk-padding-small">
                <p class="uk-text-small">
                  <i>
                    Published by
                    <a
                      class="author-link"
                      :href="post.frontmatter.author.profile"
                      target="_blank"
                    >{{ post.frontmatter.author.name }}</a>
                  </i>
                  &nbsp;{{ post.dateFromNow }}, tagged as&nbsp;
                  <span
                    v-for="tag in post.frontmatter.tags"
                    style="margin-right: 5px;"
                  >
                    <span uk-icon="icon: tag"></span>
                    {{ tag }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["folder", "tag"],
  computed: {
    posts() {
      console.log(`Current page: ${this.$page.path}`);
      let currentPagePath = this.$page.path;
      console.log(`Site pages: ${this.$site.pages.length}`);
      let sitePages = this.$site.pages;

      console.log(`Requested folder: ${this.folder}`);
      let targetFolder = this.folder;
      console.log(`Requested tag: ${this.tag}`);
      let targetTag = this.tag;

      let posts = this.$site.pages.filter(x => {
        if (
          x.path.indexOf(targetFolder, 0) !== -1 && // The page in in the post folder
          x.path !== currentPagePath // The page is not the current page
        ) {
          if (targetTag === "") {
            return true;
          } else {
            if (x.frontmatter.tags.indexOf(targetTag) > -1) {
              return true;
            }
          }
        }
      });
      const moment = require("moment");
      posts.forEach((post, i) => {
        posts[i].dateFromNow = moment(
          post.frontmatter.date,
          "YYYYMMDD"
        ).fromNow();
        posts[i].tagClass = "tag-" + post.frontmatter.tags[0];
        posts[i].tagClassSelector = ".tag-" + post.frontmatter.tags[0];
      });

      var sortedPosts = posts.sort((a, b) => {
        return (
          Number(moment(b.frontmatter.date).format("YYYYMMDD")) -
          Number(moment(a.frontmatter.date).format("YYYYMMDD"))
        );
      });
      // Object.keys(posts)
      //   .sort((a, b) => {
      //     Number(moment(posts[a].frontmatter.date).format("YYYYMMDD")) -
      //       Number(moment(posts[b].frontmatter.date).format("YYYYMMDD"));
      //     // posts[a].frontmatter.date - posts[b].frontmatter.date;
      //   })
      //   .forEach(key => {
      //     sortedPosts[key] = posts[key];
      //   });

      return sortedPosts;
    }
  }
};
</script>

<style>
a {
  text-decoration: none !important;
}
.uk-card-body a {
  color: black;
}
.uk-card-badge {
  background-color: #51459c;
}
.uk-card-badge a {
  color: white;
}
.author-link {
  color: #51459c !important;
}
.bg-text {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
}
</style>