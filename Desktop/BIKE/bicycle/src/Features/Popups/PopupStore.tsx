import { create } from "zustand";
import {SpareParts} from "@/Shared/Types/SpareParts.ts";

export interface PopupStore {
    detailPopup: boolean;
    popup: boolean;
    product: SpareParts | null;
    setPopup: (state: boolean) => void;
    closePopup: () => void;
    confirmOrder: () => void;
    confirmDetail: (product: SpareParts) => void;
    closeDetail: () => void;
}

export const usePopupStore = create<PopupStore>((set) => ({
    detailPopup: false,
    popup: false,
    product: null,

    setPopup: (state: boolean) => set({ popup: state }),

    closePopup: () => set({ popup: false }),

    confirmOrder: () =>
        set({
            popup: true,
            detailPopup: false,
        }),

    confirmDetail: (product: SpareParts | null) =>
        set({
            detailPopup: true,
            product,
            popup: false,
        }),

    closeDetail: () =>
        set({
            detailPopup: false,
        }),
}));
