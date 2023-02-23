import styles from "@styles/Home.module.css";
import LeftSidebar from "@components/left-sidebar";
import Editor from "@components/editor";

export default function Home() {
  return (
    <>
      <LeftSidebar />
      <Editor />
    </>
  );
}
