import { create } from "zustand";

export const userStore = create((set) => ({
  user: null,
  error: "",
  success: false,
  loading: false,

  setUser: async ({ user, password }) => {
    // Reset state before sending the API request
    set({ user: null, error: "", success: false, loading: true });

    try {
      const res = await fetch("/api/admin/login", { // ensure endpoint matches your API route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, password }),
      });

      const data = await res.json();

      if (res.ok) {
        set({ user: data.user || true, success: true, loading: false, error: "" });
      } else {
        set({ 
          error: data.error || "Login failed.", 
          success: false, 
          loading: false 
        });
      }
    } catch (err) {
      set({
        error: err.message || "An error occurred during login",
        success: false,
        loading: false,
      });
    }
  },

  logout: async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    set({ user: null, success: false, error: "", loading: false });
  },
}));