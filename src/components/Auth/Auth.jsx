import { onMount } from "solid-js";
import Corbado from "@corbado/web-js";
import styles from "./Auth.module.css";

function Auth() {
  onMount(async () => {
    try {
      await Corbado.load({
        projectId: import.meta.env.VITE_CORBADO_PROJECT_ID,
      });

      const authElement = document.getElementById("corbado-auth");
      Corbado.mountAuthUI(authElement, {
        onLoggedIn: () => {
          window.location.href = "/profile";
        },
      });
    } catch (error) {
      console.error("Error initializing Corbado:", error);
    }
  });

  return (
    <div class={styles["auth-container"]}>
      <div id="corbado-auth"></div>
    </div>
  );
}

export default Auth;
