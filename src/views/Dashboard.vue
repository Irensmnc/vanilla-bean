<template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
      <VenueCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>
      Loading events
    </p>
  </div>
</template>

<script src="./Dashboard.js"></script>