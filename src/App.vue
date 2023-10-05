<template>
  <div class="weather-card">
    <div class="weather-header">
      <img :src="weatherIcon" alt="Weather Icon" />
      <h3>{{ cityName }}</h3>
    </div>
    <div class="weather-info">
      <p class="temperature">{{ temperature }}°C</p>
      <p class="description">{{ weatherDescription }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
require('dotenv').config();


export default {
  data() {
    return {
      cityName: "",
      temperature: 0,
      weatherDescription: "",
      weatherIcon: ""
    };
  },
  mounted() {
    this.fetchWeatherData();
  },
  methods: {
    async fetchWeatherData() {
      try {
        // Substitua 'YOUR_API_KEY' pela chave de acesso à API de previsão do tempo
        const apiKey = process.env.VUE_APP_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Limeira&appid=${apiKey}&units=metric`
        );

        this.cityName = response.data.name;
        this.temperature = Math.round(response.data.main.temp);
        this.weatherDescription = response.data.weather[0].description;
        this.weatherIcon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
      } catch (error) {
        console.error("Erro ao buscar dados de previsão do tempo:", error);
      }
    }
  }
};
</script>

<style scoped>
.weather-card {
  width: 300px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 16px;
  text-align: center;
}

.weather-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.weather-header img {
  width: 48px;
  height: 48px;
  margin-right: 8px;
}

.weather-info p {
  margin: 0;
}

.temperature {
  font-size: 24px;
  font-weight: bold;
}

.description {
  font-size: 14px;
  color: #666;
}
</style>
