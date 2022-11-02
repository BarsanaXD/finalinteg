<template>
    <h1>Axios Demo Getting Free-to-Play Games Database FROM RAPID API</h1>

    <div class="col">
	  <div class="card" style="border-radius:50px;">
		  <div class="card-header" style="border-radius:50px; background-color: rgb(82, 190, 252);" >
			  <h1 style="text-align: center; padding: 10px;">{{covidData.title}}</h1>
			  
		  </div>
		
		</div>
    <div class="container">
  <div class="content">
    <h1>What is {{covidData.title}}</h1>
    <h3>{{covidData.description}}</h3>
  </div>
  <div class="content">
    <h1>Genre</h1>
    <h3>{{covidData.genre}}</h3>
  </div>
</div>
	</div>


    <v-img fill-height
		  src={{covidData.thumbnail}}
		  class="mb-5">
  
		</v-img>
    
      
    
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'

 
  const  covidData=ref([])

   
  async function getCovidData () {
       axios({
                method:'get',
                url:'https://free-to-play-games-database.p.rapidapi.com/api/game', 
                params: {id: '452'},
                headers: {
                    'X-RapidAPI-Key': '6337a3b3b6mshdf42295427ad5d6p15a551jsn6a13088ebfa4',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                        }  
            }).then( response => {
       covidData.value=(response.data)
       console.log(covidData.value)
      })
  
  }


  
   onMounted( async () => {
       await getCovidData()
   })

  
</script>


<style lang="scss">
.col {
  padding-left: 50px;
  padding-right: 50px;
  border: 1px solid rgba(76, 175, 79, 0);
}
.row {

  padding-left: 50px;
  padding-right: 50px;
  border: 1px solid rgba(76, 175, 79, 0);
}
	input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}


</style>