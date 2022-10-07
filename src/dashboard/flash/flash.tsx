import React from "react";
import "./flash.css";


interface FlashProps {
  variant: "success" | "info" | "error";
  message: string;
}

export const Flash = ({variant = "info", message}: FlashProps) => {
  return (
    <section className={`flash flash-${variant}`}>
      <p>{ message }</p>
    </section>
  )
}
