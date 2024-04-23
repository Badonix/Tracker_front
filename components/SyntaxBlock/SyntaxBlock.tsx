import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const SyntaxBlock = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter
      className="rounded-md"
      language="javascript"
      style={atomOneDark}
    >
      {code}
    </SyntaxHighlighter>
  );
};
export default SyntaxBlock;
