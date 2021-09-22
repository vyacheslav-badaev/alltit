<template>
  <div class="columns is-mobile footer-columns">
    <div class="column  is-full-tablet is-one-third-desktop">
      <div class="columns is-mobile">
        <div class="column is-full-desktop is-three-quarters-widescren">
          <h2 class="has-text-left is-size-5 has-text-weight-600">
            UPCOMMING EVENTS
          </h2>
          <div class="list list-events mt-1">
            <div v-for="event in events" :key="event.id" class="list-item">
              <div class="columns is-mobile">
                <div
                  class="column is-three-thirds is-three-quarters-dektop is-paddingless"
                >
                  <h4 class="has-text-left" v-text="event.title"></h4>
                  <a class="button btn-tiny is-pulled-left">+ MORE</a>
                </div>
                <div
                  class="column is-one-third is-one-quarter-desktop is-paddingless date"
                >
                  <h5 class="has-text-right day" v-text="event.day"></h5>
                  <h5 class="has-text-right month" v-text="event.month"></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-full-tablet is-two-thirds-desktop posts">
      <div class="columns is-mobile">
        <div
          v-for="post in posts"
          :key="post.id"
          class="column is-one-third-desktop start"
        >
          <Post :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Post from '~/components/Post'
export default {
  name: 'Footer',
  components: { Post },
  data() {
    return {
      events: [
        {
          id: 1,
          title: 'BITCOINT Challenge for 2020 Global Economy Conference',
          day: '23',
          month: 'April'
        },
        {
          id: 2,
          title: 'Annual Climb to the Glacier 3000',
          day: '04',
          month: 'june'
        },
        {
          id: 3,
          title: 'Mongo DB Webinar on Linkedin',
          day: '09',
          month: 'Jully'
        }
      ],
      posts: [
        {
          id: 1,
          title: 'Alltitude is going build the Mobile App for Credit Suisse',
          description:
            'Last Friday in partnership with Google, Alltitude signed a contract to build the Mobile App for Credit Suisee',
          image: '/posts/credit_swisse.jpg'
        },
        {
          id: 2,
          title: 'Annual Alltitude Conference Weekend is Comming Up',
          description:
            'This year Alltitude dedicated an weekend to the Blockchain Technology. Peter Smith CEO from BLOCKCHAIN...',
          image: '/posts/alltitude.jpg'
        },
        {
          id: 3,
          title:
            'Glacier 3000 is going to have ticket system build by Alltitude',
          description:
            'Alltitude is going to developer tue selt-ticket system for the glacier 3000. We hope to start  using it the next season, say...',
          image: '/posts/glacier3000.jpg'
        }
      ]
    }
  }
}
</script>
