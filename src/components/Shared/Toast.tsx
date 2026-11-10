import { createContext, useCallback, useContext, useState } from "react";
import { cx } from "../../styles/cx";
import { toast, toastError, toastStack, toastSuccess } from "../../styles/styles.css";

type Tone = "success" | "error";
type ToastItem = { id: number; tone: Tone; message: string };
type Push = (tone: Tone, message: string) => void;

const ToastContext = createContext<Push>(() => undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const push = useCallback<Push>((tone, message) => {
    const id = Date.now() + Math.random();
    setToasts((current) => [...current, { id, tone, message }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 5000);
  }, []);

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className={toastStack}>
        {toasts.map((item) => (
          <p
            key={item.id}
            role={item.tone === "error" ? "alert" : "status"}
            className={cx(toast, item.tone === "error" ? toastError : toastSuccess)}
          >
            {item.message}
          </p>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
