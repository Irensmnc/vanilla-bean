<template>
  <router-link :to="{name:'venue-show', params:{ id: '1' } }">
    <div>
      <span class="eyebrow">@{{ venue.time }} on {{ venue.date }}</span>
      <h4 class="title"> {{ venue.title }}</h4>
      <span>{{ venue.events.length }} events </span>
    </div>
  </router-link>
</template>

<script src="./VenueCard.js"></script>