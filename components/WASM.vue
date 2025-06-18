<template>
  <div>
    <div class="flex flex-row items-center justify-center gap-4">
      <input
        class="border-2 p-3 rounded-xl"
        v-model.number="a"
        placeholder="a"
      />
      <input
        class="border-2 p-3 rounded-xl"
        v-model.number="b"
        placeholder="b"
      />
      <button class="border-2 p-3 rounded-xl" @click="callWasmAdd">
        Add via WASM
      </button>
    </div>
    <div class="pt-4 text-xl" v-if="result !== null">Result: {{ result }}</div>
    <div v-if="error" style="color: red">Error: {{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "WASM",
  data() {
    return {
      a: 0,
      b: 0,
      result: null,
      error: null,
      wasm: null,
    };
  },
  methods: {
    async loadWasm() {
      // Minimal WASM binary for: (a, b) => a + b
      // (module (func (export "add") (param i32 i32) (result i32) local.get 0 local.get 1 i32.add))
      const wasmCode = new Uint8Array([
        0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x07, 0x01, 0x60,
        0x02, 0x7f, 0x7f, 0x01, 0x7f, 0x03, 0x02, 0x01, 0x00, 0x07, 0x07, 0x01,
        0x03, 0x61, 0x64, 0x64, 0x00, 0x00, 0x0a, 0x09, 0x01, 0x07, 0x00, 0x20,
        0x00, 0x20, 0x01, 0x6a, 0x0b,
      ]);
      try {
        const { instance } = await WebAssembly.instantiate(wasmCode);
        this.wasm = instance.exports;
      } catch (e) {
        this.error = "Failed to load WASM: " + e.message;
      }
    },
    async callWasmAdd() {
      this.error = null;
      this.result = null;
      if (!this.wasm) {
        await this.loadWasm();
      }
      if (this.wasm && this.wasm.add) {
        this.result = this.wasm.add(this.a, this.b);
      } else {
        this.error = "WASM add function not available";
      }
    },
  },
};
</script>
