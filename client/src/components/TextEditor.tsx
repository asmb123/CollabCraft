import Quill from "quill";
import { useCallback } from "react";
import "quill/dist/quill.snow.css";
import "@/editor.css"

export default function TextEditor() {
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