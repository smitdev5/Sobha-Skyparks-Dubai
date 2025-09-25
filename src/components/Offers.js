import React from "react";

export default function Section({ id, title }) {
  return (
    <section id={id} className="h-screen flex items-center justify-center bg-gray-100">
      <h2 className="text-4xl font-bold">{title} Section</h2>
    </section>
  );
}
