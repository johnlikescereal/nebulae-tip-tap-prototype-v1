import "./styles.css";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";
import { MenuBar } from "./toolbar";

export default () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <p>
      <p>Hey there,</p>
      <p>So why just a bare-bones editor? This was mostly an experiment to see how difficult it would be to implement a text editing core. The last thing we want as a publishing platform is to spend all our time solving a problem that&#39;s been solved many times before. </p>
      <p>There are a few gaps:</p>
      <p><em>Basic text editor</em></p>
      <ul>
      <li>Authentication</li>
      <li>Creating/saving a document</li>
      <li>Plugging real-time collaboration into a backend</li>
      <li>Export to .pdf, .docx, .txt</li>
      </ul>
      <p>But as you know from our pitch, the big differentiator will be branching:</p>
      <p><em>Branching (&amp; collaboration)</em></p>
      <ul>
      <li>Combining a conflict-free replicated data type (CRDT) with Git</li>
      <li>Creating, merging, deleting branches</li>
      <li>Merge conflict handling</li>
      <li>Commenting</li>
      </ul>
      <p>Once these are done (we consider that the “MVP”), we’ll work on consumption and publishing:</p>
      <p><em>Consumption</em></p>
      <ul>
      <li>Reader view</li>
      <li>Reader authentication</li>
      <li>Bookmarking / saving</li>
      <li>Tipping (our first version of monetization) using Stripe, Bitcoin</li>
      </ul>
      <p><em>Publishing</em></p>
      <ul>
      <li>Publish to Nebuly</li>
      <li>Export to .epub, etc.</li>
      </ul>
      <p>All of this is a rough draft. If you’re interested in supporting us on this journey, consider investing in our <a href="[https://pitch.com/v/nebulae-pre-seed-8w5gpb](https://pitch.com/v/nebulae-pre-seed-8w5gpb">pre-seed</a>) round. If you want to join us on this journey, send me an e-mail at <a href="mailto:john@nebuly.gg">john@nebu.ly</a>.</p>
      <p>Cheers,</p>
      <p>John</p>
      <br>
    `
  });

  return (
    <div>
      <h1>Nebuly editor</h1>
      <p>
        Welcome to the Nebuly, a collaborative text editor and
        publishing platform that allows authors to co-create stories and share
        revenue from earnings based on their contribution. This is our
        ever-evolving demo.
      </p>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
