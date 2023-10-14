import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl text-slate-950 pb-5 font-medium">About Me</h1>
      <p className="pb-2 text-lg text-slate-600">
        My name is Muhammad Elang Permadani, u can call me Elang.
      </p>
      <p className="text-lg text-slate-600 mb-5">
        I'm a student at{" "}
        <a
          href="https://www.itera.ac.id/"
          className="text-blue-500 hover:text-blue-600"
        >
          Institute Technology of Sumatera
        </a>
        , majoring in Informatics Engineering
      </p>
      <hr />
      <p className="text-lg text-slate-600 mt-5">
        I'm a person who love to learn about technology, especially in
        progamming. my favorite programming language is{" "}
        <span className="text-blue-500">Javascript</span> and{" "}
        <span className="text-blue-500">Typescript</span>, but i also like to
        learn other programming language like{" "}
        <span className="text-blue-500">Dart</span>. Framework that i use for
        frontend is <span className="text-blue-500">React</span> for web and{" "}
        <span className="text-blue-500">Flutter</span> for mobile development.
        For backend i use <span className="text-blue-500">ExpressJS</span> and{" "}
        <span className="text-blue-500">NestJS</span>.{" "}
      </p>
      <p className="text-lg text-slate-600 mt-2">
        Now my focus is to learn about{" "}
        <span className="text-blue-500">Flutter</span> for mobile development,
        and <span className="text-blue-500">NestJS</span> for backend
        development.
      </p>
    </div>
  );
};

export default AboutPage;
