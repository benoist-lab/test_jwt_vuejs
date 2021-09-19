<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

			<form>
				<div class="form-group">
					<label for="login">ID</label>
					<input id="login" v-model="formConnection.username" class="form-control">
				</div>

				<div class="form-group">
					<label for="password">ID</label>
					<input id="password" v-model="formConnection.password" class="form-control">
				</div>
				
				<div class="d-flex flex-row-reverse m-3">
					<div v-on:click.stop="connecter" class="btn btn-primary">Connecter</div>
				</div>

			</form>
			
			<p>message connexion: {{ messageConnexion }}</p>
			<p>token: {{ token }}</p>
    

			<div v-on:click.stop="getMessageServeur" class="btn btn-primary">Message Serveur</div>
			<p>message serveur: {{ messageServeur }}</p>

    
    
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
		return {
			formConnection: {
				username: "javainuse",
				password: "password"
			},
			messageConnexion: "aucun",
			token: "",
			messageServeur: ""
		}
	},
	methods: {
		connecter: function () {
			console.log ("DEBUT CONNECTION");
			

			
			
			axios.post ("http://localhost:8080/authenticate",this.formConnection)
			.then (response=>{
				console.log ("connection acceptee")
				console.log (response);
				
				this.messageConnexion="connection OK";
				this.token=response.data.jwttoken
				
			})
			.catch (exception =>{
				console.log(exception)
				
				this.messageConnexion="connection ERREUR";

			})
			
		},
		getMessageServeur: function () {
			console.log ("DEBUT MESSAGE SERVEUR");
				
/* 			const config = {
					headers: {
						//Accept: 'application/json',
						//'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    
		"Access-Control-Allow-Origin": "*",
		"access-control-allow-credentials": "true",
		
						Authorization: "Bearer "+this.token
					}
			}; */

			
			const config = {
					headers: {
						Authorization: "Bearer "+this.token
					}
			};
			
			console.log ("config="+config.headers.Authorization);

			
			axios.get ("http://localhost:8080/hello",config)
			.then (response=>{
				console.log ("message recu")
				console.log (response);
				
				this.messageServeur=response.data
				
			})
			.catch (exception =>{
				console.log(exception)
				
				this.messageConnexion="message serveur ERREUR";

			})
			
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
