import React, { useState } from "react";

export default function Modal({
  show,
  onHide
}: {
  show: boolean;
  onHide: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    await new Promise((r) => {
      setTimeout(() => {
        r(null);
      }, 1000);
    });
    setIsSubmitting(false);
    onHide();
  };
  return (
    <>
      {show && (
        <div>
          <button onClick={submit} disabled={isSubmitting}>
            Submit{isSubmitting ? "ting..." : ""}
          </button>
        </div>
      )}
    </>
  );
}
