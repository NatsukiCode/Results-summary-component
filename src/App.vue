<template>
  <main>
      <div class="main__result">
        <h3>Your Result</h3>
        <div class="result-circle">
          <p class="result-score">76</p>
          <p>of 100</p>
        </div>
        <h3 class="result-rank">Great</h3>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div class="main__summary">
        <h3>Summary</h3>

        <section>
          <div class="summary-topic reaction">
            <div class="topic-title">
              <img src="assets/images/icon-reaction.svg" alt="reaction icon" />
              <h3>Reaction</h3>
            </div>
            <div class="topic-score">
              <p><span>80</span>/ 100</p>
            </div>
          </div>
        </section>

        <section>
          <div class="summary-topic memory">
            <img src="assets/images/icon-memory.svg" alt="memory icon" />
            <h3>Memory</h3>
            <p><span>92</span>/ 100</p>
          </div>
        </section>

        <section>
          <div class="summary-topic verbal">
            <img src="assets/images/icon-verbal.svg" alt="verbal icon" />
            <h3>Verbal</h3>
            <p><span>61</span>/ 100</p>
          </div>
        </section>

        <section>
          <div class="summary-topic visual">
            <img src="assets/images/icon-visual.svg" alt="visual icon" />
            <h3>Visual</h3>
            <p><span>72</span>/ 100</p>
          </div>
        </section>
        
        <button class="summary-btn">Continue</button>
      </div>
    </main>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&display=swap');

  #root, #__next {
    isolation: isolate;
  }

  :root {
    --clr-background-slateBlue: hsl(252, 100%, 67%);
    --clr-background-royalBlue: hsl(241, 81%, 54%);

    --clr-circle-violetBlue: hsla(256, 72%, 46%, 1);
    --clr-circle-persianBlue: hsla(241, 72%, 46%, 0);

    --clr-topic-red:hsl(0, 100%, 67%);
    --clr-topic-orange:hsl(39, 100%, 56%);
    --clr-topic-green: hsl(166, 100%, 37%);
    --clr-topic-blue: hsl(234, 85%, 45%);

    --clr-score100-paleBlue: hsl(221, 100%, 96%);
    --clr-context-lavender: hsl(241, 100%, 89%);
    --clr-continueBtn-darkGray: hsl(224, 30%, 27%);

    --ff: 'Hanken Grotesk', sans-serif;

    --fw-extraBold: 800;
    --fw-bold: 700;
    --fw-regular: 500;
  }

  main {
    max-width: 375px;
    font-family: var(--ff);
  }

  .main__result {
    background-image: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
    text-align: center;
    padding: 2rem 2.5rem;
    border-radius: 0 0 2rem 2rem;
    color: var(--clr-context-lavender);
    font-size: 1rem;
  }

  .result-circle {
    display: inline-grid;
    align-content: center;
    margin: 1rem 0;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-image: linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0) );
  }

  .result-score {
    font-size: 3.6rem;
    font-weight: var(--fw-extraBold);
  }

  .result-score, .result-rank {
    color: white;
  }

  .main__summary {
    padding: 1.2rem;
  }

  .summary-topic {
    display: flex;
    justify-content: space-between; 
    margin: 1rem 0;
    width: 100%;
    height: 50px;
    background-color: bisque; 
  }

  .topic-title {
    display: flex;
  }

  .main__summary .reaction {
    color: var(--clr-topic-red);
  }

  .main__summary .memory {
    color: var(--clr-topic-orange);
  }

  .main__summary .verbal {
    color: var(--clr-topic-green);
  }

  .main__summary .visual {
    color: var(--clr-topic-blue)
  }

  .summary-btn {
    color: var(--clr-continueBtn-darkGray);
  }

</style>
