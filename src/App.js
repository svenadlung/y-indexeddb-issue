import "./styles.scss";

import React, { useEffect, useMemo } from "react";
import { Editor, EditorContent } from "@tiptap/react";
import { Collaboration } from "@tiptap/extension-collaboration";
import { StarterKit } from "@tiptap/starter-kit";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import { IndexeddbPersistence } from "y-indexeddb";
import * as Y from "yjs";

const DOC_NAME_SUFFIX = 135;

const room = `room.${new Date().getFullYear().toString().slice(-2)}${
  new Date().getMonth() + 1
}${new Date().getDate()}-a-${DOC_NAME_SUFFIX}`;

const App = () => {
  const ydoc = useMemo(() => new Y.Doc(), []);

  useEffect(() => {
    new TiptapCollabProvider({
      appId: "7j9y6m10",
      name: room,
      document: ydoc,
    });

    new IndexeddbPersistence(`offline-data-${DOC_NAME_SUFFIX}`, ydoc);
  }, []);

  const editor = new Editor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Collaboration.configure({
        document: ydoc,
      }),
    ],
  });

  return <EditorContent className="editor-content" editor={editor} />;
};

export default App;
