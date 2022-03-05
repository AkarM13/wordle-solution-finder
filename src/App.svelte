<script>
  import Layout from "./routes/__layout.svelte";
  import { DateInput } from "date-picker-svelte";
  import { getSolution } from "./wordle-logic";

  let date = new Date();
  let solution = getSolution(date);
  $: {
    solution = getSolution(date);
  }
</script>

<nav class="navigation"><h3>Wordle Solver</h3></nav>
<Layout>
  <main>
    <div class="form-control">
      <h2>Select a date</h2>
      <DateInput bind:value={date} format={"yyyy-MM-dd"} />
    </div>
    <p class="solution">
      The solution at that date is <span>{solution}</span>
    </p>
  </main>
</Layout>

<style>
  :root {
    --shadow-color: 0deg 0% 0%;
    --shadow-elevation-low: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
      0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.1),
      1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.1);
    --shadow-elevation-medium: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.11),
      0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.11),
      2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.11),
      5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.11);
    --shadow-elevation-high: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.1),
      1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.1),
      2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.1),
      4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.1),
      7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.1),
      11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.1),
      17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.1),
      25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.1);

    --primary-color: #a2f6cf;
    --secondary-color: #0a1e31;

    --date-picker-background: var(--secondary-color);
    --date-picker-foreground: var(--primary-color);

    --date-picker-selected-color: var(--primary-color);
    --date-picker-selected-background: var(--secondary-color);

    --date-picker-highlight-border: var(--primary-color);
  }

  .solution {
    font-size: 24px;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .solution span {
    font-weight: bold;
    color: var(--primary-color);
    margin-top: 1rem;
    font-size: 48px;
  }
  .form-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  .form-control h2 {
    margin-bottom: 1rem;
    color: white;
  }
  .navigation {
    display: flex;
    justify-content: center;
    padding: 1.25rem 2rem;
    background: var(--secondary-color);
    color: var(--primary-color);
    width: 100%;
    box-shadow: var(--shadow-elevation-medium);
  }

  .navigation h3 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }
  main {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
