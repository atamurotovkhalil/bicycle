import { create } from "zustand";

export const usePopupStore = create((set) => ({
  detailPopup: false,
  product: {},
  popup: false,
  setPopup: (state: any) => set({ popup: state }),
  closePopup: () => set({ popup: false }),
  // confirm: () => {
  //   set({ popup: true });
  //   setTimeout(() => {
  //     set({ popup: false });
  //   }, 1500);
  // },
  confirmedOrder: () => {
    set({ popup: true });
    set({ detailPopup: false });
  },
  confirmDetail: (product: any) => {
    set({ detailPopup: true });
    set({ product: product });
    set({popup: false})
  },
  closeDetail: () => {
    set({ detailPopup: false });
  }

}));
