<template>
	<section class="section">
		<h1 class="title">Create user</h1>
		<h2 class="subtitle">Make it possible to create a new project</h2>

		<div class="box">
			<div class="content">
				<div class="field">
					<label class="label">Name</label>
					<div class="control">
						<input
							class="input"
							type="text"
							placeholder="e.g Alex Smith"
						>
					</div>
				</div>

				<div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input
							class="input"
							type="email"
							placeholder="e.g. alexsmith@gmail.com"
						>
					</div>
				</div>

			</div>

			<form @submit.prevent="onSubmit">
				<div class="form-group">
					<label>Name</label>
					<input
						v-model="form.name"
						class="form-control"
						required
					/>
				</div>

				<div class="form-group mt-3">
					<label>Email</label>
					<input
						v-model="form.email"
						class="form-control"
						type="email"
						required
					/>
				</div>

				<button
					type="submit"
					class="btn btn-success mt-3"
				>
					Create User
				</button>
			</form>
		</div>
	</section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
            },
        };
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('users/create', this.form);
        },
    },
};

/*
import { createUser } from '../firebase.js'
import { reactive } from 'vue'
export default {
  setup() {
    const form = reactive({ name: '', email: '' })
    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.email = ''
    }
    return { form, onSubmit }
  }
}
*/
</script>
