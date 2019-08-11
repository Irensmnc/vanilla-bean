<template>
  <div>
    <h1>{{ title }} </h1>
    <VenueCard/>

    <router-link :to="{ name: 'venue-show', params: { id: '1' } }">Venue Show</router-link>
    |
  </div>
</template>
<script src="./VenueList.js"></script>