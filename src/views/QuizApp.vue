<template>
  <div id="app">
    <center>
      <v-card id="quizCard" class="ma-10 pa-5" width="1000" elevation="10" color="white">
        <v-card-title>
          <h1  id="quiz"><strong>E Paano Kung Perfect Ka? </strong>
          <br>
         <strong>Quiz Genre: Game</strong>
        </h1>
        </v-card-title>

        <v-card-text class="ma-4">
          <quiz id="quiz" @quiz-completed="handleQuizCompleted" :key="quizKey"  />
          <quiz-modal v-show="showModal" id="quiz" header="Congratulations!" subheader="You've completed the Quiz!" :score="score"
            @reload="updateQuiz" @close="showModal = false" />
        </v-card-text>

      </v-card>

    </center>
  </div>
</template>

<script>
import QuizModal from "../components/QuizModal.vue";
import Quiz from "../components/Quiz.vue";

export default {
  components: { Quiz, QuizModal },
  name: "App",
  data() {
    return {
      quizKey: 0,
      showModal: false,
      score: {
        allQuestions: 0,
        answeredQuestions: 0,
        correctlyAnsweredQuestions: 0,
      },
    };
  },
  methods: {
    handleQuizCompleted(score) {
      this.score = score;
      this.showModal = true;
    },
    updateQuiz() {
      this.showModal = false;
      this.quizKey++;
    },
  },
};
</script>
<style>
  #quiz{
    color: white;
   }
   #quizCard {
    background-image: url("https://preview.redd.it/pahingi-namang-context-para-sa-caloocan-boy-meme-v0-w8jys7vnupq91.jpg?auto=webp&s=7fa9fad3d2893891d930b736726e71d6fb18fed4");
   }
   #finishCard {
    background-image: url("https://preview.redd.it/pahingi-namang-context-para-sa-caloocan-boy-meme-v0-w8jys7vnupq91.jpg?auto=webp&s=7fa9fad3d2893891d930b736726e71d6fb18fed4");
   }

</style>