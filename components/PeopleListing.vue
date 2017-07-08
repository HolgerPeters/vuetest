  <template>
    <ul>
        <li v-for="person in people" v-bind:key="person.guid">
            {{ person.name }}
            <router-link :to="{ name: 'person', params: { id: person.guid }}">View Details</router-link>
        </li>
    </ul>
</template>


  <script>
// Listing people component
export default {
    name: 'PeopleListing',
    props: ['people']
};
</script>