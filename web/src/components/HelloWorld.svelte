<script lang="ts">
  import { visibility } from '../store/stores';
  import { fetchNui } from '../utils/fetchNui';

  interface ReturnData {
    x: number;
    y: number;
    z: number;
  }

  let clientData: ReturnData;

  const handleClientData = () => {
    fetchNui('getClientData')
      .then((returnData) => {
        clientData = returnData;
      })
      .catch((e) => {
        clientData = { x: 100, y: 100, z: 100 };
      });
  };

  const closeDialog = () => {
    visibility.set(false);
    fetchNui('hideUI');
  };
</script>

<div class="flex flex-col h-screen w-full max-w-4xl mx-auto justify-center items-center">
  <div class="flex flex-col bg-red-500 p-4 text-white rounded-md items-center justify-center">
    <h2 class="text-4xl">Svelte NUI Popup!</h2>
  <div>Player coords: {JSON.stringify(clientData) || ''}</div>
  <div class="flex flex-row space-x-4">
    <button on:click={handleClientData} class="bg-white text-black py-1.5 px-2"> Get client coords </button>
    <button on:click={closeDialog} class="bg-white text-black py-1.5 px-2">Close popup</button>
  </div>
  <span>Or press the escape key!</span>
  </div>
</div>
