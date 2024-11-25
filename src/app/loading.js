import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-neutral-900 z-50">
      <div className="animate-spin w-10 h-10 border-4 border-white border-t-neutral-500 rounded-full"></div>
    </div>
  );
}
