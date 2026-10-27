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
