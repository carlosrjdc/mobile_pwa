
import { create } from "zustand";

interface QrCodePageState {
  qrCodeSku: boolean;
  qrCodEndereco:boolean;
  UPDATE_QR_SKU: (by: boolean) => void;
  UPDATE_QR_ENDERECO: (by: boolean) => void;
}

export const useQrCodeState = create<QrCodePageState>((set) => ({
    qrCodEndereco:false,
    qrCodeSku:false,
    UPDATE_QR_SKU(by) {
        set((state)=>({
            qrCodEndereco:state.qrCodEndereco,
            qrCodeSku: by
        }))
  },
  UPDATE_QR_ENDERECO(by){
    set((state)=> ({
        qrCodEndereco:by,
        qrCodeSku: state.qrCodeSku

    }))
  }
}));

