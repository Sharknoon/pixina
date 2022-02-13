import { defineStore } from "pinia";

export const useLocaleStore = defineStore("locale", {
  state: () => {
    return {
      locale: "",
    };
  },
  actions: {
    changeLocale(locale: string) {
      this.locale = locale;
    },
  },
  persist: {
    // Keep backward compatability
    beforeRestore: () => {
      const locale: string | null = localStorage.getItem("locale");
      const vuex: string | null = localStorage.getItem("vuex");
      if (!locale && vuex) {
        try {
          const newLocale: string = JSON.parse(vuex).locale;
          localStorage.setItem("locale", JSON.stringify({ locale: newLocale }));
        } catch (e) {
          console.error(e);
        }
      }
    },
  },
});
