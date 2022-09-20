import "./styles.css";

// import Collaboration from '@tiptap/extension-collaboration'
// import StarterKit from "@tiptap/starter-kit";
// import { EditorContent, useEditor } from "@tiptap/react";
// import { MenuBar } from "./toolbar";

import Collaboration from '@tiptap/extension-collaboration'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Placeholder from '@tiptap/extension-placeholder'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import React from 'react'
import { WebrtcProvider } from 'y-webrtc'
import * as Y from 'yjs'

// Adding collaboration
const ydoc = new Y.Doc()
const provider = new WebrtcProvider('tiptap-collaboration-extension', ydoc)

export default () => {
  const editor = useEditor({
    extensions: [
      // StarterKit,
      Document,
      Paragraph,
      Text,
      Collaboration.configure({
        document: ydoc,
      }),
      Placeholder.configure({
        placeholder:
          'Write something … It’ll be shared with everyone else looking at this example.',
      }),
    ],
  });

  return (
    <div>
      <h1>Nebulae editor</h1>
      <p>
        Welcome to the Nebulae, a collaborative text editor and
        publishing platform that allows authors to co-create stories and share
        revenue from earnings based on their contribution. This is our
        ever-evolving demo.
      </p>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
