import { create } from "zustand";

const useServiceStore = create((set) => ({
  services: [],
  loading: false,
  error: null,
  route: null,

  fetchServices: async () => {
    // Reset error, clear old data, and start loading spinner state
    set({ error: null, services: [], loading: true });
    try {
      const res = await fetch("/api/booked-service");

      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          set({ error: "Unauthorized", route: "/admin/login", loading: false });
          return;
        }
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      
      set({
        services: data.data || [],
        loading: false,
      });

    } catch (error) {
      set({ 
        error: error.message || "Something went wrong", 
        loading: false 
      });
    }
  },
}));

export default useServiceStore;
