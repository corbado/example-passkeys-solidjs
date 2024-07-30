import { onMount, createEffect } from "solid-js";
import Corbado from "@corbado/web-js";
import { createSignal } from "solid-js";
import styles from "./Profile.module.css";

function Profile() {
  const [userId, setUserId] = createSignal(null);
  const [userEmail, setUserEmail] = createSignal(null);
  const [isLoading, setIsLoading] = createSignal(true);

  onMount(async () => {
    try {
      await Corbado.load({
        projectId: import.meta.env.VITE_CORBADO_PROJECT_ID,
      });

      if (Corbado.user) {
        setUserId(Corbado.user.sub);
        setUserEmail(Corbado.user.email);
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error loading Corbado:", error);
    } finally {
      setIsLoading(false);
    }
  });

  const handleLogout = async () => {
    try {
      await Corbado.logout();
      window.location.href = "/";
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  createEffect(() => {
    if (!isLoading() && userId() && userEmail()) {
      const passkeyListElement = document.getElementById("passkey-list");
      if (passkeyListElement) {
        Corbado.mountPasskeyListUI(passkeyListElement);
      }
    }
  });

  return (
    <div class={styles["profile-container"]}>
      <h1>Profile Page</h1>
      {isLoading() ? (
        <p>Loading user information...</p>
      ) : userId() && userEmail() ? (
        <div>
          <p class={styles["profile-info"]}>User ID: {userId()}</p>
          <p class={styles["profile-info"]}>Email: {userEmail()}</p>
          <button id="logout-button" class={styles["logout-button"]} onClick={handleLogout}>
            Logout
          </button>
          <div id="passkey-list" class={styles["passkey-list"]}></div>
        </div>
      ) : (
        <p>Error fetching user information.</p>
      )}
    </div>
  );
}

export default Profile;
