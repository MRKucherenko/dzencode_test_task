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
    <div onClick={closeByClick}>
      <div>
        <button type="button" onClick={onClose}></button>

        <div>{children}</div>
      </div>
    </div>
  );
};
