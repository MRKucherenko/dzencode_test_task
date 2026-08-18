import { MouseEvent, ReactNode, useEffect } from "react";

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ onClose, children }: ModalProps) => {
  useEffect(() => {
    const closeByEscape = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", closeByEscape);
    return () => {
      window.removeEventListener("keydown", closeByEscape);
    };
  }, [onClose]);

  const closeByClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={closeByClick}>
      <div className="app-modal">
        <button className="app-modal__close" type="button" onClick={onClose}>
          ✕
        </button>
        <div className="app-modal__body">{children}</div>
      </div>
    </div>
  );
};
