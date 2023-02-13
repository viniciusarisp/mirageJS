<template>
  <div>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">''
        {{ user.name }}
      </li>
    </ul>
    <p v-else class="text-center">Carregando...</p>
    <form @submit.prevent="submit" class="d-flex flex-column">
      <input v-model="newUser.name" type="text" placeholder="Name">
      <input v-model="newUser.email" type="email" placeholder="Email">
    <button type="submit">Add User</button>
  </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newUser: {
        name: "",
        email: ""
      },
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      this.users = data[0].users;
    },
    async submit() {
      try {
        await axios.post("/api/users", this.newUser);
        this.newUser = {
          name: "",
          email: ""
        };
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>
