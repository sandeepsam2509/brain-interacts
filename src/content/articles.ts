// Long-form articles for the Resource Library. Written in the voice of the whitepapers and
// grounded in the research base of "The Behavioral Enterprise" monograph; every study cited
// here appears in the references below each article.

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "quote"; text: string }
  | { t: "list"; items: string[] }
  | { t: "steps"; items: { title: string; text: string }[] }
  | { t: "callout"; title: string; text: string }
  | { t: "compare"; headings: [string, string]; rows: [string, string][] };

export type Article = {
  slug: string;
  title: string;
  dek: string;
  topic: string;
  minutes: number;
  takeaways: string[];
  body: Block[];
  references: string[];
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "performance-problems-are-fit-problems",
    title: "Most performance problems are really fit problems",
    dek: "Why the right person on the wrong work looks like underperformance, and how managers can tell the difference before they act.",
    topic: "Teams & performance",
    minutes: 7,
    takeaways: [
      "The same trait score can describe two very different people. What matters is what sits beside it.",
      "A low score is not automatically a gap: another trait may be quietly compensating for it.",
      "Before treating underperformance as a capability problem, check whether the work fits how the person works.",
    ],
    body: [
      { t: "p", text: "Every manager has a story like this. A strong hire, praised in interviews and solid in their first months, starts to slip. Deadlines wobble. Their energy drops. A performance conversation follows, then a plan, then, often, an exit. Months later the person is thriving somewhere else, doing a job that looks remarkably similar on paper." },
      { t: "p", text: "It is tempting to call this a capability problem: the person could not do the job. More often, it is a fit problem. The person could do a job. They could not do this one, in this shape, under these conditions. The difference matters, because the two problems have different solutions, and treating one as the other is expensive." },
      { t: "h2", text: "Same score, different person" },
      { t: "p", text: "Consider two employees who both score 8 out of 10 on Ambition. The first also scores low on Self-Regulation. In calm periods, they are energetic and productive. Under pressure, their drive outruns their self-control: decisions become reactive, relationships suffer, and judgment slips in exactly the moments that matter most. The second pairs the same Ambition with strong Integrity. They pursue goals relentlessly but refuse to compromise standards to reach them." },
      { t: "p", text: "A report that reads each trait on its own describes these two people in almost the same words. The difference between them lives entirely in how their traits combine. Put the first person in a calm, structured role and they may excel. Put them in a role defined by constant pressure and the same drive becomes a liability." },
      { t: "quote", text: "The Ambition score is identical. The people are not." },
      { t: "h2", text: "Why fit problems look like performance problems" },
      { t: "p", text: "Fit problems disguise themselves well. The person's output falls, so the natural reading is that the person is the problem. But personality research gives a more useful lens. Traits predict performance most clearly when they match what the role demands. Conscientiousness predicts performance in almost every job, but Extraversion predicts it mainly in sales and management, Openness mainly in learning-heavy roles, and Agreeableness mainly in roles built on cooperation and service (Barrick and Mount, 1991; Barrick, Mount and Judge, 2001). No single trait is good everywhere." },
      { t: "p", text: "That means a person can be genuinely strong and still mismatched. A reflective, independent analyst moved into a role that is mostly meetings and stakeholder management will look less capable than they are. A sociable, persuasive seller asked to run a detailed compliance process will look careless. Neither has lost ability. Both have lost fit." },
      { t: "h2", text: "The low score that is not a gap" },
      { t: "p", text: "The reverse mistake is just as common. A low score on Ambition might describe a disengaged employee. Or it might describe a disciplined, reliable contributor whose strong Self-Regulation turns modest drive into steady delivery within a defined scope. Our research calls this pattern Compensation: one trait offsets the risk of another without removing it." },
      { t: "p", text: "Compensated weaknesses are usually invisible in everyday work. They appear only when the compensating trait is overloaded, for example when a disciplined but unambitious employee is handed an open-ended goal with no structure at all. Flag the low score as a gap without checking what sits beside it, and you can damage the prospects of one of your most dependable people." },
      { t: "callout", title: "A useful question", text: "When a low score seems inconsistent with someone's track record, ask what is compensating for it. Then ask how the person handles the situations that would normally expose the weakness." },
      { t: "h2", text: "Work also changes people" },
      { t: "p", text: "Fit is not fixed. A study that followed 1,049 employees across three surveys spanning 20 years found that sustained high workload led to increases in Openness, Extraversion and Agreeableness (Holman and Hughes, 2021). Organizations do not just select personalities; over years, they help shape them. A profile is a picture of current tendencies, not a permanent fact, which is why it should be dated and revisited." },
      { t: "h2", text: "Telling fit apart from capability" },
      { t: "p", text: "Before the performance plan, run a short fit check. It takes an hour and it changes the conversation from \"what is wrong with you\" to \"what is wrong with the match\"." },
      { t: "steps", items: [
        { title: "Describe what the role actually demands", text: "Not the job description: the real week. How much is collaboration versus deep work? How much pressure, ambiguity and structure is there?" },
        { title: "Look at the profile as combinations", text: "Read strengths alongside the traits that could amplify or limit them, and low scores alongside the traits that could compensate for them." },
        { title: "Find the friction points", text: "Where does what the role demands run against how the person prefers to work? That is usually where the slip began." },
        { title: "Change the work before you change the person", text: "Adjust scope, structure, check-in rhythm or the mix of tasks, and agree how you will both know whether it is working." },
        { title: "Then talk about development", text: "If the gap remains once the work fits, it is a genuine development need, and now you know exactly which one." },
      ] },
      { t: "h2", text: "What this means for leaders" },
      { t: "p", text: "Personality scores shift the odds; they do not settle the outcome. Even the strongest single traits correlate with job performance at around r = .20 to .25 (Barrick, Mount and Judge, 2001). That is valuable across hundreds of decisions and a weak guide for any one person on its own. The extra information sits in how traits combine and how well they fit the work." },
      { t: "p", text: "Used well, that information does not label anyone. It starts a better conversation: one that assumes the person is capable, and looks first at whether the work has been designed to let them show it." },
    ],
    references: [
      "Barrick, M. R., & Mount, M. K. (1991). The Big Five personality dimensions and job performance: A meta-analysis. Personnel Psychology, 44(1), 1–26.",
      "Barrick, M. R., Mount, M. K., & Judge, T. A. (2001). Personality and performance at the beginning of the new millennium. International Journal of Selection and Assessment, 9(1–2), 9–30.",
      "Holman, D. J., & Hughes, D. J. (2021). Transactions between Big-5 personality traits and job characteristics across 20 years. Journal of Occupational and Organizational Psychology, 94(3), 762–788.",
      "Sharma, S., & Kumar, S. The Behavioral Enterprise: Trait Interaction, the Big Five, and Workforce Intelligence. Brain Interacts.",
    ],
    related: ["team-mix-matters-more-than-star-players", "what-the-big-five-can-and-cant-tell-you-about-a-hire"],
  },
  {
    slug: "what-the-big-five-can-and-cant-tell-you-about-a-hire",
    title: "What the Big Five can, and can't, tell you about a hire",
    dek: "A plain guide to using personality data in hiring: what the evidence supports, where it stops, and the rules that keep it fair.",
    topic: "Hiring",
    minutes: 8,
    takeaways: [
      "The Big Five is the best-evidenced personality model for work, far ahead of type-based tools.",
      "Personality improves hiring decisions across many hires, but it is a weak guide for any one candidate on its own.",
      "Use it to inform structured interviews, weight only role-relevant traits, and never reject anyone on a score alone.",
    ],
    body: [
      { t: "p", text: "Personality assessment has a reputation problem in hiring. Some leaders treat it as a crystal ball. Others dismiss it as horoscopes for HR. Both are wrong, and both lead to bad decisions. The truth sits in between, and it is more useful than either extreme." },
      { t: "h2", text: "Start with the right model" },
      { t: "p", text: "Many organizations still use type-based tools such as the Myers-Briggs Type Indicator, DISC or the Enneagram. They are popular because they are easy to explain and give people a memorable label. But type models split continuous traits into boxes, so two people a single point apart can receive opposite labels while two people far apart receive the same one. The MBTI shows weak consistency of type, with many people receiving a different type when they retake it (Pittenger, 2005). DISC and the Enneagram have limited peer-reviewed evidence that they predict work outcomes." },
      { t: "p", text: "The Big Five measures five continuous dimensions: Openness, Conscientiousness, Extraversion, Agreeableness and Neuroticism. Among available models it has the strongest evidence for reliability, replication across cultures and prediction at work. If personality data is going to inform a hiring decision at all, it should come from a model like this." },
      { t: "compare", headings: ["Type-based tools", "The Big Five"], rows: [
        ["Puts people into boxes", "Measures continuous dimensions"],
        ["Labels can change between sittings", "Scores are stable over time"],
        ["Limited evidence of predicting work outcomes", "Decades of meta-analytic evidence"],
        ["Fine for team conversations", "Suitable to inform decisions, with safeguards"],
      ] },
      { t: "h2", text: "What it can tell you" },
      { t: "p", text: "A meta-analysis of 117 studies, covering almost 24,000 people, established Conscientiousness as the most consistent predictor of job performance across occupations (Barrick and Mount, 1991). Later work confirmed and refined the picture: Neuroticism (lower is better) predicts performance modestly in most jobs, Extraversion predicts performance in sales and management, Openness predicts how well people learn in training, and Agreeableness predicts success in roles built on cooperation and service (Barrick, Mount and Judge, 2001)." },
      { t: "p", text: "Leadership offers a lesson of its own. Extraversion is the strongest personality correlate of leadership (Judge, Bono, Ilies and Gerhardt, 2002), but it is especially strong for who emerges as a leader, not necessarily who leads well. Hire on confidence alone and you risk promoting the most visible people rather than the most effective ones." },
      { t: "h2", text: "What it cannot tell you" },
      { t: "p", text: "Single traits typically correlate with work outcomes at around r = .10 to .30 (Barrick, Mount and Judge, 2001; Roberts and others, 2007). Square a correlation of .25 and you get the share of variation it explains: about 6 per cent. Across hundreds of hires, that produces real, measurable gains. For one candidate, it is a weak guide." },
      { t: "quote", text: "If an assessment raises the chance of a good hire from 50 per cent to 60 per cent, it is valuable across a hundred hires and still wrong about many individuals." },
      { t: "p", text: "Personality also does not measure skill, knowledge or experience. It describes how someone tends to work, not what they can learn or do. And it is not a diagnosis of anything." },
      { t: "h2", text: "Candidates present their best selves" },
      { t: "p", text: "People answer differently when a job is at stake. Applicants tend to inflate their scores on desirable traits such as Conscientiousness and Emotional Stability (Birkeland and others, 2006). That does not make the data useless, but it does mean hiring results should be compared with hiring norms, not with scores collected for development, and that the assessment should never be the only source of evidence." },
      { t: "h2", text: "Five rules for fair use" },
      { t: "steps", items: [
        { title: "Inform, never decide", text: "Results feed a structured interview. No candidate is rejected automatically by a score." },
        { title: "Weight only what the role needs", text: "Give weight only to traits with a demonstrated link to the role, not to an ideal profile applied to everyone." },
        { title: "Keep wellbeing out of hiring", text: "Wellbeing and distress indicators belong in development and support, never in selection." },
        { title: "Check for adverse impact", text: "If any group's selection rate falls below 80 per cent of the highest group's, review how that trait is used (the four-fifths rule)." },
        { title: "Be open with candidates", text: "Tell them what is assessed and why, and let them see their results." },
      ] },
      { t: "h2", text: "Read the profile, not the scores" },
      { t: "p", text: "The most useful information is often in combinations. High Extraversion with high Integrity reads very differently from high Extraversion with low Integrity, which can produce a charismatic leader whose influence outruns their judgment. Strong drive with weak Self-Regulation can look impressive in an interview and derail under pressure. A good hiring conversation uses the profile to choose its questions: where might this person's strengths overrun, and what would we need to see to be confident they will not?" },
      { t: "callout", title: "The bottom line", text: "Use the Big Five, not type-based tools, as the base for people decisions. Treat it as one well-evidenced input among several, and keep the final judgment with someone who knows the role and has met the candidate." },
    ],
    references: [
      "Barrick, M. R., & Mount, M. K. (1991). The Big Five personality dimensions and job performance: A meta-analysis. Personnel Psychology, 44(1), 1–26.",
      "Barrick, M. R., Mount, M. K., & Judge, T. A. (2001). Personality and performance at the beginning of the new millennium. International Journal of Selection and Assessment, 9(1–2), 9–30.",
      "Birkeland, S. A., Manson, T. M., Kisamore, J. L., Brannick, M. T., & Smith, M. A. (2006). A meta-analytic investigation of job applicant faking on personality measures. International Journal of Selection and Assessment, 14(4), 317–335.",
      "Judge, T. A., Bono, J. E., Ilies, R., & Gerhardt, M. W. (2002). Personality and leadership: A qualitative and quantitative review. Journal of Applied Psychology, 87(4), 765–780.",
      "Pittenger, D. J. (2005). Cautionary comments regarding the Myers-Briggs Type Indicator. Consulting Psychology Journal, 57(3), 210–221.",
      "Roberts, B. W., Kuncel, N. R., Shiner, R., Caspi, A., & Goldberg, L. R. (2007). The power of personality. Perspectives on Psychological Science, 2(4), 313–345.",
      "Rust, J., Kosinski, M., & Stillwell, D. (2020). Modern psychometrics: The science of psychological assessment (4th ed.). Routledge.",
    ],
    related: ["games-vs-questionnaires", "performance-problems-are-fit-problems"],
  },
  {
    slug: "team-mix-matters-more-than-star-players",
    title: "Why team mix matters more than star players",
    dek: "What research says about how the make-up of a team, not just the talent in it, shapes what the team achieves.",
    topic: "Teams & performance",
    minutes: 7,
    takeaways: [
      "A team's average Conscientiousness and Agreeableness, and its lowest member's scores, predict team performance.",
      "Teams need people who explore and people who exploit, plus someone who connects the two.",
      "Look at team composition by its gaps, not only its averages.",
    ],
    body: [
      { t: "p", text: "When a team underdelivers, the instinct is to upgrade the talent: hire a star, replace the weakest link, bring in someone with a bigger reputation. Sometimes that works. Often it does not, because the problem was never the amount of talent in the team. It was the mix." },
      { t: "h2", text: "The lowest score matters" },
      { t: "p", text: "A meta-analysis of team composition found that a team's average Conscientiousness and Agreeableness predict its performance, and so do its lowest member's scores (Bell, 2007). The second finding is worth dwelling on. In work where everyone's contribution is needed, one person's low conscientiousness can hold back the whole team: the report that arrives late, the handover that never happens, the detail that is missed and has to be redone by someone else." },
      { t: "p", text: "Our research describes a similar pattern inside individuals, the Ceiling Effect: a low trait caps how far a high one can go. An excellent communicator who never listens will only get so far. Teams behave the same way. A team full of brilliant, creative people with no one who closes things out will produce a lot of ideas and very little delivery." },
      { t: "quote", text: "Analyse team composition not only by its averages, but by its gaps." },
      { t: "h2", text: "Explorers, exploiters and connectors" },
      { t: "p", text: "Any adaptive system has to balance two things: exploring widely for new possibilities, and making the most of what is already known. A recent theory of complementary cognition proposes that people differ in which of these they lean toward, and that groups adapt by combining people who lean different ways (Taylor, Fernandes and Wraight, 2021). It is a new and largely theoretical idea, so it should be treated as a useful frame rather than settled fact, but it matches what many leaders see in practice." },
      { t: "compare", headings: ["Leans toward exploring", "Leans toward exploiting"], rows: [
        ["Openness-led working styles", "Conscientiousness-led working styles"],
        ["Spots new opportunities and directions", "Turns plans into reliable delivery"],
        ["Risk: too many ideas, weak follow-through", "Risk: rigidity, resisting change"],
        ["Needs: problems, not instructions", "Needs: clear objectives and cadence"],
      ] },
      { t: "p", text: "A team made only of explorers drifts. A team made only of exploiters stagnates. And a team with both but no one to connect them argues. That is why we pay particular attention to integrators: people who think and deliver, and who coordinate people and priorities across the two camps." },
      { t: "h2", text: "Why stars disappoint" },
      { t: "p", text: "A star hired into the wrong mix often adds more of what the team already has. A brilliant strategist joining a team of strategists sharpens the debate but does not close the delivery gap. Worse, strong personalities with overlapping styles can compete for the same space. The team gets more talented on paper and less effective in practice." },
      { t: "p", text: "The same logic applies to promotions. Moving a team's only finisher into a leadership role can remove the one person who was quietly holding the delivery together. The team loses its floor at the moment it gains a manager." },
      { t: "h2", text: "How to look at your team" },
      { t: "steps", items: [
        { title: "Map the mix", text: "For each person, note their main and secondary working style. Do not stop at averages; look at the spread." },
        { title: "Find what is crowded", text: "Which styles does the team have too many of? Crowded styles compete for the same work and the same airtime." },
        { title: "Find what is missing", text: "Is anyone exploring? Is anyone closing things out? Is anyone connecting the two?" },
        { title: "Check the floor", text: "Where work depends on everyone, look at the lowest scores on reliability and cooperation, not just the team's best." },
        { title: "Hire and assign to fill gaps", text: "Fill the missing style before adding another star, and assign work by working style as well as availability." },
      ] },
      { t: "callout", title: "A note of caution", text: "Team-level claims about working-style diversity are still being tested. Treat them as design principles: practical, well-grounded, and worth checking against your own team's results." },
      { t: "h2", text: "The real advantage" },
      { t: "p", text: "Talent matters. But talent arranged well beats talent stacked high. The organizations that get the most from their people are rarely the ones with the most stars. They are the ones that know what each person does best, and build teams where those strengths cover for each other." },
    ],
    references: [
      "Bell, S. T. (2007). Deep-level composition variables as predictors of team performance: A meta-analysis. Journal of Applied Psychology, 92(3), 595–615.",
      "Taylor, Fernandes, & Wraight (2021). Complementary cognition. Cambridge Archaeological Journal, 32(1), 61–77.",
      "Sharma, S., & Kumar, S. The Behavioral Enterprise: Trait Interaction, the Big Five, and Workforce Intelligence. Brain Interacts.",
    ],
    related: ["performance-problems-are-fit-problems", "what-the-big-five-can-and-cant-tell-you-about-a-hire"],
  },
  {
    slug: "ability-to-pay-vs-willingness-to-pay",
    title: "Ability to pay vs. willingness to pay",
    dek: "How behavioural signals can add a careful second layer to credit decisions, and the guardrails that layer needs.",
    topic: "Financial risk",
    minutes: 7,
    takeaways: [
      "Traditional credit models are strong on ability to pay and weaker on willingness to pay.",
      "Research links personality to financial behaviour, but the evidence base is still developing.",
      "Behavioural signals should add to existing checks, with consent, transparency and fairness testing.",
    ],
    body: [
      { t: "p", text: "Every lending decision answers two questions. Can this person repay? And will they? The first is about ability to pay: income, cash flow, existing debt. The second is about willingness to pay: the habits, priorities and self-control that decide whether a repayment is made on time when money is tight and something else is competing for it." },
      { t: "p", text: "Credit systems have become very good at the first question. Bureau scores, bank statements and income checks measure ability with increasing precision. The second question is harder. A borrower with a thin credit file may be entirely reliable, yet look risky simply because there is little history to read." },
      { t: "h2", text: "What personality research says about money" },
      { t: "p", text: "A review aimed at financial advisers summarizes evidence that Conscientiousness relates to higher income, net worth and financial literacy, and to disciplined saving; that Neuroticism relates to lower income and wealth and to greater risk avoidance; that Extraversion relates to higher earnings but weaker conversion of income into wealth; and that Agreeableness relates to lower income and net worth (Campbell, Exley and Doyle, 2023). The review also proposes three broad profiles: resilient (disciplined and calm), under-controlled (impulsive and risk-seeking) and over-controlled (anxious and overly cautious)." },
      { t: "p", text: "The evidence needs careful handling. It is a narrative rather than a systematic review, two of its authors are linked to a commercial personality-based financial assessment firm, and several key findings come from the authors' own earlier work. The direction of the findings is consistent with wider personality research, but specific claims should be checked against primary sources before anyone builds a lending rule on them." },
      { t: "quote", text: "Behaviour can add a second layer to a credit decision. It should never replace the first." },
      { t: "compare", headings: ["Ability to pay", "Willingness to pay"], rows: [
        ["Income, cash flow, existing debt", "Habits, priorities, self-control"],
        ["Well measured by bureau and bank data", "Harder to see, especially with thin files"],
        ["Answers: can they repay?", "Answers: will they, when money is tight?"],
      ] },
      { t: "h2", text: "Where a behavioural layer can help" },
      { t: "list", items: [
        "Thin-file borrowers: first-time borrowers, young professionals and self-employed applicants who have little credit history but may be reliable.",
        "Borderline cases: applications that sit close to a cut-off, where an additional, independent signal can support a more considered decision.",
        "Portfolio insight: understanding the behavioural mix of a portfolio, and where support or early contact might prevent defaults.",
      ] },
      { t: "h2", text: "The guardrails it needs" },
      { t: "p", text: "Behavioural data is powerful and can be intrusive. Research has shown that digital records can predict private attributes, including protected characteristics, with uncomfortable accuracy (Kosinski, Stillwell and Graepel, 2013). Any lender using behavioural signals needs firm rules." },
      { t: "steps", items: [
        { title: "Consent and transparency", text: "Applicants know what is assessed, why, and how it is used, and agree to it. In India, this sits within the Digital Personal Data Protection Act, 2023." },
        { title: "No protected characteristics", text: "Models never infer, store or report characteristics such as religion, caste, ethnicity, health or political views, and are audited for proxies." },
        { title: "Additive, not decisive", text: "Behavioural signals supplement ability-to-pay checks and human review. They do not make the decision alone." },
        { title: "Fairness testing", text: "Outcomes are checked across groups for adverse impact, and rules are revised where they disadvantage a group without good reason." },
        { title: "Validate locally", text: "Relationships found in other countries and samples are tested on the lender's own population before being relied on." },
      ] },
      { t: "callout", title: "Why validation comes first", text: "Most personality norms come from Western samples. A signal that predicts repayment in one market may behave differently in another. Local validation is not a formality; it is the difference between a useful signal and an unfair one." },
      { t: "h2", text: "The opportunity" },
      { t: "p", text: "Used carefully, a behavioural layer can widen access to credit for reliable people who are invisible to traditional models, and help lenders understand risk more fully. Used carelessly, it can reproduce bias under a scientific label. The difference lies in consent, validation and a clear rule that behaviour informs decisions rather than making them." },
    ],
    references: [
      "Campbell, Exley, & Doyle (2023). The Big Five personality traits (OCEAN) and financial planning. Financial Services Review.",
      "Kosinski, M., Stillwell, D., & Graepel, T. (2013). Private traits and attributes are predictable from digital records of human behavior. PNAS, 110(15), 5802–5805.",
      "Rust, J., Kosinski, M., & Stillwell, D. (2020). Modern psychometrics: The science of psychological assessment (4th ed.). Routledge.",
      "Sharma, S., & Kumar, S. The Behavioral Enterprise: Trait Interaction, the Big Five, and Workforce Intelligence. Brain Interacts.",
    ],
    related: ["games-vs-questionnaires", "what-the-big-five-can-and-cant-tell-you-about-a-hire"],
  },
  {
    slug: "games-vs-questionnaires",
    title: "Games vs. questionnaires: what each really measures",
    dek: "When self-report is the right tool, when behaviour tells you more, and why the best assessment programmes use both.",
    topic: "Science & methods",
    minutes: 7,
    takeaways: [
      "Questionnaires are efficient, well validated and easy to compare, but people can shape their answers.",
      "Game-based assessments observe behaviour directly and are harder to fake, but their evidence base is younger.",
      "Use questionnaires for breadth and development, and add games where faking risk is high or behaviour under pressure matters.",
    ],
    body: [
      { t: "p", text: "There are two ways to find out how someone works. You can ask them, or you can watch them. Questionnaires ask. Game-based assessments watch. Each has real strengths, and each has blind spots the other can cover." },
      { t: "h2", text: "What questionnaires do well" },
      { t: "p", text: "A well-built personality questionnaire is remarkably efficient. In a few minutes it can measure broad traits reliably, with scores that are stable over time and comparable across large groups. The Big Five questionnaires used today rest on decades of research linking their scores to performance, leadership and wellbeing (Barrick and Mount, 1991)." },
      { t: "p", text: "Questionnaires are also transparent. People can see what is being asked, which makes them well suited to development: the person recognizes themselves in the results and can discuss them openly." },
      { t: "h2", text: "Where questionnaires struggle" },
      { t: "p", text: "Self-report depends on how people choose to describe themselves. When a job is at stake, applicants tend to present a more favourable picture, inflating desirable traits such as Conscientiousness and Emotional Stability (Birkeland and others, 2006). Some people also simply lack insight into how they behave under pressure. And a report people agree with is not proof that it is accurate: the Barnum effect means vague, flattering descriptions feel personally true to almost everyone (Rust, Kosinski and Stillwell, 2020)." },
      { t: "p", text: "Psychometricians have tools to manage this. Forced-choice formats, which ask people to pick between equally desirable statements, make faking harder, though they complicate comparisons between people. Separate norms for hiring and development help too. But the underlying limit remains: a questionnaire measures how people describe themselves." },
      { t: "quote", text: "Questionnaires tell you how people see themselves. Games show you how they behave." },
      { t: "h2", text: "What games add" },
      { t: "p", text: "Game-based assessments infer traits from choices and behaviour inside carefully designed tasks: how someone weighs risk against reward, how they respond when the rules change, how they recover from a setback mid-task. Because the person is responding to the task rather than describing themselves, the right answer is much harder to guess, and the experience is usually more engaging." },
      { t: "p", text: "Their evidence base is younger. Game-based assessment is a newer field, and its validity evidence is still developing. Each game needs to show that it measures what it claims and predicts what matters, in the same way any questionnaire must." },
      { t: "compare", headings: ["Questionnaires", "Game-based assessments"], rows: [
        ["Measure how people describe themselves", "Observe how people actually behave"],
        ["Efficient: many traits in minutes", "Rich data on a few behaviours"],
        ["Decades of validity evidence", "Evidence still developing"],
        ["Open to self-presentation", "Harder to fake"],
        ["Ideal for development conversations", "Strong for high-stakes and pressure-heavy roles"],
      ] },
      { t: "h2", text: "Choosing the right tool" },
      { t: "steps", items: [
        { title: "Development and coaching", text: "Start with a questionnaire. It is transparent, broad and invites reflection." },
        { title: "High-volume hiring", text: "Combine a questionnaire with a short game, so the decision does not rest on self-report alone." },
        { title: "Roles defined by pressure or risk", text: "Add a game that simulates the real decision, such as trade-offs under time pressure, and compare what people say with what they do." },
        { title: "Whatever you choose", text: "Check reliability, validity and fairness for your own population, and never let one tool make the decision alone." },
      ] },
      { t: "callout", title: "The best answer is both", text: "Where what people say and what they do agree, you can be confident. Where they differ, you have found the most useful question to ask in the interview." },
    ],
    references: [
      "Barrick, M. R., & Mount, M. K. (1991). The Big Five personality dimensions and job performance: A meta-analysis. Personnel Psychology, 44(1), 1–26.",
      "Birkeland, S. A., Manson, T. M., Kisamore, J. L., Brannick, M. T., & Smith, M. A. (2006). A meta-analytic investigation of job applicant faking on personality measures. International Journal of Selection and Assessment, 14(4), 317–335.",
      "Rust, J., Kosinski, M., & Stillwell, D. (2020). Modern psychometrics: The science of psychological assessment (4th ed.). Routledge.",
      "Sharma, S., & Kumar, S. The Behavioral Enterprise: Trait Interaction, the Big Five, and Workforce Intelligence. Brain Interacts.",
    ],
    related: ["what-the-big-five-can-and-cant-tell-you-about-a-hire", "ability-to-pay-vs-willingness-to-pay"],
  },
];

export const findArticle = (slug: string) => articles.find((a) => a.slug === slug);
