<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1 style="color: green;"><strong>{{ header }}</strong></h1>
            <h3>{{ subheader }}</h3>
          </div>

          <div class="modal-body">
            <div id="score">
              You answered
              <span class="highlight">
                {{
                  Math.floor(
                    (score.correctlyAnsweredQuestions / score.allQuestions) *
                      100
                  )
                }}
                % correctly!
              </span>
              You've got
              <span class="highlight">
                {{ score.correctlyAnsweredQuestions }} out of
                {{ score.allQuestions }}
              </span>
              questions.
            </div>
          </div>

          <div class="modal-footer">
            <button
              id="play-again"
              class="button-footer"
              @click="$emit('reload')"
            >
              Play Again
            </button>
            <button
              id="close-button"
              class="button-footer"
              @click="$emit('close')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    header: String,
    subheader: String,
    score: Object,
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 90vw;
  max-width: 650px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-header {
  text-align: center;
}
.modal-header h2 {
  color: rgb(0, 178, 72);
}
.modal-header h3 {
  color: rgb(0, 178, 72);
}
.modal-body {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  line-height: 3rem;
}
.modal-body > * {
  margin: 1rem 0;
  padding: 0.25rem 0.5rem;
}
.modal-footer {
  display: flex;
  justify-content: center;
}
/*
 Modal Transition
 */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.button-footer {
  padding: 5px;
  margin: 10px;
  border-radius: 7px;
  font-weight: bold;
  color: white;
  border: none;
}
#play-again {
  background-color: #3399ff;
}
#close-button {
  background-color: #ff0000;
}
.anchor-footer {
  color: black;
  text-decoration: none;
  cursor: default;
}
.button-footer:active,
.button-footer:focus {
  outline: none;
}
.button-footer:hover {
  transform: scale(1.02);
}
.highlight {
  color: #660066;
  font-weight: bold;

}
#score {
  color: black;
}
#chooseCategory {
  text-align: center;
}
</style>