import "./styles.css";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";
import { MenuBar } from "./toolbar";

export default () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <p>
        Hi there,
        Feel free to play around with the text!
      </p>
      <br>
      <p>
      So why just a bare-bones editor? This was mostly an experiment to see how difficult it would be to implement a text editing core. The last thing we want as a publishing platform is to spend all our time solving a problem that's been solved many times before. 

There are a few gaps:

*Basic text editor*

- Authentication
- Creating/saving a document
- Plugging real-time collaboration into a backend
- Export to .pdf, .docx, .txt

But as you know from our pitch, the big differentiator will be branching:

*Branching (& collaboration)*

- Combining a conflict-free replicated data type (CRDT) with Git
- Creating, merging, deleting branches
- Merge conflict handling
- Commenting

Once these are done (we consider that the “MVP”), we’ll work on consumption and publishing:

*Consumption*

- Reader view
- Reader authentication
- Bookmarking / saving
- Tipping (our first version of monetization) using Stripe, Bitcoin

*Publishing*

- Publish to Nebulae
- Export to .epub, etc.

All of this is a rough draft. If you’re interested in supporting us on this journey, consider investing in our [pre-seed]([https://pitch.com/v/nebulae-pre-seed-8w5gpb](https://pitch.com/v/nebulae-pre-seed-8w5gpb)) round. If you want to join us on this journey, send me an e-mail at john@nebulae.gg!

Cheers,

John
      </p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    `
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
