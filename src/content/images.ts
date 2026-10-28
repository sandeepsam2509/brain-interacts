import type { Image } from "@/lib/types";

// Corporate Brain product screenshots. These are still served from Framer's CDN;
// copy them into /public before the Framer plan is cancelled.
const framer = (id: string) => `https://framerusercontent.com/images/${id}.jpg`;

const shot = (id: string, alt: string, height: number): Image => ({ src: framer(id), alt, width: 1200, height });

export const screenshots = {
  signIn: shot("wLkHSYnD9ium8Ah4ctJYzScO58", "Corporate Brain sign-in screen", 586),
  dashboard: shot("WH2TNmA9o1zko1VXCj2JsB0Ng", "Corporate Brain leadership dashboard", 577),
  board: shot("y0QWUDF7iGrOO0Edknkh2fm4ho", "Corporate Brain manager board view", 564),
  bench: shot("3GACTUoGJmVYxzlMDxNtaAIUkw", "Corporate Brain bench view with project fit scores", 577),
  people: shot("noAp6RGIBsuMrNIKULXvKR5xTI", "Corporate Brain people directory", 577),
  projects: shot("vCR1yzxS5Z2jGmmPDbYKFY2sx14", "Corporate Brain projects progress view", 577),
  candidates: shot("cXuPq7SPaYCvGvbEmF54s4qv5mU", "Corporate Brain hiring candidates view", 552),
  teamsReport: shot("qbqWKLvLLt0Ivw3ZSkovlOl7I8", "Corporate Brain teams report", 577),
  teamAnalytics: shot("dvVT5lqU5F3lS10EDL9MZO9kpk", "Corporate Brain team analytics", 577),
};

// 3D renders of the platform on transparent backgrounds (public/3d). Sample data only.
const render = (name: string, alt: string, width: number, height: number): Image => ({
  src: `/3d/${name}.webp`,
  alt,
  width,
  height,
  render: true,
});

export const renders = {
  home: render("home", "Corporate Brain leadership, manager and employee views in 3D", 1600, 910),
  leadership: render("lead", "Corporate Brain leadership dashboard with attrition risk and bench strength", 1600, 1138),
  managers: render("mgr", "Corporate Brain team board with team capability and a suggested assignment", 1600, 1062),
  employees: render("emp", "Corporate Brain employee profile with strengths and a growth path", 1600, 1015),
  flow: render("flow", "Employee, manager and leadership views stacked as layers", 1507, 1600),
  people: render("people", "Corporate Brain people directory with availability and assessment status", 1600, 978),
  bench: render("bench", "Corporate Brain bench view matching free people to delayed projects", 1600, 1050),
  hiring: render("hiring", "Corporate Brain hiring board with project fit scores", 1600, 1102),
  analytics: render("analytics", "Corporate Brain team analytics by team", 1600, 1117),
  reports: render("reports", "Corporate Brain leadership report with recommended next steps", 1600, 1132),
  assessments: render("assess", "Corporate Brain assessments overview", 1600, 1106),
};
