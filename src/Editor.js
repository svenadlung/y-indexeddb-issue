import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { Document as TiptapDocument } from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import Collaboration from "@tiptap/extension-collaboration";
// import TableOfContents from "@tiptap-pro/extension-table-of-contents";

// Custom document
// const CustomDocument = TiptapDocument.extend({
//   content: "heading block*",
// });

const Editor = ({ ydoc }) => {
  const editor = useEditor({
    extensions: [
      TiptapDocument,
      // CustomDocument,
      Paragraph,
      Text,
      Heading,
      Collaboration.configure({
        document: ydoc,
      }),
      // Extension that changes the content (setting globalAttrs of headings)
      // Same happens with TrailingNode extensions, see https://github.com/ueberdosis/tiptap/issues/3729
      // TableOfContents.configure({
      //   anchorTypes: ["title", "heading"],
      // }),
    ],
  });

  return <EditorContent className="editor__content" editor={editor} />;
};

export default Editor;
