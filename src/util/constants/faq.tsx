import Link from "../../components/Link";

export const FAQS = [
  {
    question: "What is current tech stack you are working with",
    answer:
      "Currently I'm mostly working with React.js on front-end and Spring Boot framework on back-end.",
  },
  {
    question: "What did you use to build your website",
    answer: (
      <>
        This website is built with React.js. If you are interested in source
        code, you can find it{" "}
        <Link label="here" href="https://github.com/k-rade/portfolio" />.
      </>
    ),
  },
  {
    question: "I have a project for you, are you available",
    answer:
      "At this moment I'm full time employed. What I could offer is a few hours of my services per week , if this suits you.",
  },
  {
    question: "How to pronounce your name correctly",
    answer:
      "When pronounced correctly my first name sounds something like ra-dee-woh-ye.",
  },
];
