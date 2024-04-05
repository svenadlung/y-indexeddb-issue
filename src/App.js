import "./styles.scss";

import * as Y from "yjs";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import { IndexeddbPersistence } from "y-indexeddb";

import Editor from "./Editor";

// Increase for creating a new, empty document
const DOC_NAME_SUFFIX = 22;

const appId = "7j9y6m10";
const room = `room.${new Date().getFullYear().toString().slice(-2)}${
  new Date().getMonth() + 1
}${new Date().getDate()}-a-${DOC_NAME_SUFFIX}`;

const ydocA = new Y.Doc();
const providerA = new TiptapCollabProvider({
  appId: appId,
  name: room,
  document: ydocA,
});

// Offline persistence
if (ydocA) {
  new IndexeddbPersistence(`offline-data-${DOC_NAME_SUFFIX}`, ydocA);
}

const App = () => {
  return <Editor provider={providerA} ydoc={ydocA} room={room} />;
};

export default App;
