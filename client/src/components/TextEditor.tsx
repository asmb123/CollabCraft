import Quill from "quill";
import { useCallback, useEffect } from "react";
import { io } from "socket.io-client";
import "quill/dist/quill.snow.css";
import "@/editor.css"

export default function TextEditor() {

  useEffect(() => {
    const socket = io("http://localhost:3000");

    return () => {
      socket.disconnect();
    }
  })
  const wrapperRef = useCallback((wrapper: HTMLDivElement) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement('div');
    wrapper.append(editor);
    new Quill(editor, { theme: 'snow' })
  }, [])
  return (
    <div className="container mx-auto" id="container" ref={wrapperRef}>
    </div>
  )
}