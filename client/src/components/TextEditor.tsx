import Quill from "quill";
import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useParams } from "react-router";
import "quill/dist/quill.snow.css";
import "@/editor.css"

export default function TextEditor() {

  const { id } = useParams();
  const [socket, setSocket] = useState<Socket>();
  const [quill, setQuill] = useState<Quill>();

  useEffect(() => {
    const s = io("http://localhost:3000");
    setSocket(s);
    s.emit('join-room', id);

    return () => {
      s.disconnect();
    }
  }, [id])

  useEffect(() => {
    quill?.on('text-change', (delta, _oldDelta, source) => {
      if (source !== 'user') return;
      socket?.emit('send-changes', id, delta);
    })

    return () => {
      quill?.off('text-change', (delta, _oldDelta, source) => {
        if (source !== 'user') return;
        socket?.emit('send-changes', id, delta);
      });
    }
  }, [socket, quill, id])

  useEffect(() => {
    socket?.on('receive-changes', (delta) => {
      quill?.updateContents(delta);
    })

    return () => {
      socket?.off('receive-changes', (delta) => {
        quill?.updateContents(delta);
      })
    }
  }, [socket, quill])

  const wrapperRef = useCallback((wrapper: HTMLDivElement) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement('div');
    wrapper.append(editor);
    const q = new Quill(editor, { theme: 'snow' });
    setQuill(q);
  }, [])
  return (
    <div className="container mx-auto text-black" id="container" ref={wrapperRef}>
    </div>
  )
}