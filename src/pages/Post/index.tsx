import { PostInfo } from "./components/PostInfo";
import { PostContent } from "./styles";

export const Post = () => {
  return (
    <main>
      <PostInfo />
      <PostContent>
        <p><b>Programming languages all have built-in data structures, but these often differ from one language to another.</b> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>

        <a>Dynamic typing</a>
        <p>JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:</p>

      </PostContent>
    </main>
  );
}
