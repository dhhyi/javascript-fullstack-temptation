<template>
  <div>
    <button @click="startWorker">Start Worker</button>
    <div class="flex flex-wrap gap-2 mt-4">
      <span v-for="n in numbers" :key="n">{{ n }}</span>
    </div>
  </div>
</template>

<style scoped src="./components.css" />

<script>
export default {
  name: "WebWorker",
  data() {
    return {
      numbers: [],
    };
  },
  methods: {
    startWorker() {
      // Inline worker code as a Blob
      const workerCode = `
        self.onmessage = function(e) {
          console.log(e.data);
          for (let i = 1; i <= 10; i++) {
            self.postMessage(i);
            for (let j = 0; j < 1e9; j++) {
              // Simulate some work
            }
          }
          console.log('done')
          self.postMessage('done');
        };
      `;
      const blob = new Blob([workerCode], { type: "application/javascript" });
      const worker = new Worker(URL.createObjectURL(blob));
      worker.onmessage = (e) => {
        console.log("Worker message:", e.data);
        if (e.data === "done") {
          worker.terminate();
        } else {
          this.numbers.push(e.data);
        }
      };
      console.log("Worker created");
      worker.postMessage("start");
    },
  },
};
</script>
