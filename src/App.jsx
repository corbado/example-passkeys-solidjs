import { onMount } from "solid-js";
import Corbado from "@corbado/web-js";

function App() {
  onMount(async () => {
    try {
      await Corbado.load({
        projectId: import.meta.env.VITE_CORBADO_PROJECT_ID,
      });

      const authElement = document.getElementById("corbado-auth");
      Corbado.mountAuthUI(authElement, {
        onLoggedIn: () => {
          window.location.href = "/";
        },
      });
    } catch (error) {
      console.error("Error initializing Corbado:", error);
    }
  });

  return (
    <div>
      
      <div id="corbado-auth"></div>
    </div>
  );
}

export default App;
