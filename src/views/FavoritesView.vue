<template lang="pug">
div.favorites.section
  div.section-div
    div.section-title
      v-row
        h2 Mocha's Favorites
        p Spanning from activities to friends and snacks, this is a list of some of my favorite things.

      v-row
        v-col
          FaveList(title="Friends", :items="friends")
        v-col
          FaveList(title="Snacks", :items="snacks")
      v-row
        v-col
          FaveList(title="Activities", :items="activities")
</template>

<script>
import FaveList from '@/components/FaveList.vue';

export default {
  name: 'FavoritesView',
  components: {
	  FaveList,
  },
  data () {
    return {
      friends: [
        {
          subtitle: "Mom",
          definition: "My mother and primary giver of scritches."
        },
        {
          subtitle: "Mom's Mom and Sister",
          definition: "Give me love and attention while mom is away."
        },
        {
          subtitle: "Penny",
          definition: "Was one of the first dog friends I ever had! May she rest in peace."
        },
        {
          subtitle: "Si",
          definition: "The grumpy old cat I live with who is finally starting to tolerate me."
        }
      ],
      activities: [
        {
          subtitle: "Car Rides",
          definition: "Only if they are short! And to friend's houses!"
        },
        {
          subtitle: "Excitement Zoomies",
          definition: "Results from many events including but not limited to: mom coming home, anyone getting slightly excited, post bath time, being outside."
        },
        {
          subtitle: "Doing Tricks for Treats",
          definition: "I make mom so proud!"
        },
      ],
      snacks: [
        {
          subtitle: "Peanut Butter",
          definition: "Obviously, who doesn't love Jif?"
        },
        {
          subtitle: "My Chicken and Grain Free Food",
          definition: "But only after one of the other animals in the house acts like they are going to eat it."
        },
        {
          subtitle: "Friskies Canned Cat Food",
          definition: "I show those cats who is boss by eating the food they don't finish - mom does not approve."
        },
      ]
    } 
  }
};
</script>