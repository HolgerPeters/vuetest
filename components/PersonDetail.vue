  <template>
    <div>
        <router-link to="/">Homepage</router-link>
        <h1>
            <img :src="person.picture" :alt="person.name"> {{ person.name }}</h1>
        <h3>{{ person.company }}</h3>
        <ul>
            <li>Age: {{ person.age }}</li>
            <li>Eye Colour: {{ person.eyeColor }}</li>
            <li>Email:
                <a :href="'mailto:' + person.email">{{ person.email }}</a>
            </li>
        </ul>
        <h4>Address</h4>
        <p>{{ person.address }}</p>
        <h4>About {{ person.name }}</h4>
        <p>{{ person.about }}</p>
    </div>
</template>

<script>
export default {
    name: 'PersonDetail',
    props: ['people'],
    data: function () {
        var route = this.$route;
        return {
            person: this.people.filter(function (person) {
                return person.guid == route.params.id;
            })[0]
        };
    }
};
</script>
