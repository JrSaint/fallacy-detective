import type { Fallacy } from './types';

export const SCENARIOS: { dialogue: string[]; fallacyName: Fallacy['name'] }[] = [
  // ---------------- STRAWMAN ----------------
  {
    fallacyName: "Strawman",
    dialogue: [
      `Olivia: "Abstinence until marriage prevents emotional baggage and builds a foundation for commitment."`,
      `James: "So you just want teens to be sheltered forever and never understand relationships? That’s unrealistic."`,
      `Olivia: "No, I’m saying saving sex protects you. That’s not fear — it’s wisdom."`
    ]
  },
  {
    fallacyName: "Strawman",
    dialogue: [
      `Anna: "I think modesty standards help us focus on learning without unnecessary distractions."`,
      `Noah: "So you want students to dress like it’s the 1800s, covered from head to toe? That’s extreme."`,
      `Anna: "That’s not what I said. Modesty isn’t outdated clothing, it’s wisdom."`
    ]
  },
  {
    fallacyName: "Strawman",
    dialogue: [
      `Liam: "Parents should guide what media their kids consume. Not all movies are healthy."`,
      `Chloe: "So you want parents to censor everything and lock kids in a bubble? That’s controlling."`,
      `Liam: "No, I said guidance, not isolation. Parents protecting kids isn’t the same as control."`
    ]
  },
  {
    fallacyName: "Strawman",
    dialogue: [
      `Daniel: "I think marriage is the best context for lifelong commitment."`,
      `Mia: "So you’re saying people who don’t marry can’t love each other? That’s insulting."`,
      `Daniel: "I didn’t say that. I said marriage is God’s design for the strongest commitment."`
    ]
  },
  {
    fallacyName: "Strawman",
    dialogue: [
      `Caleb: "Cheating on tests ruins integrity and leaves you unprepared."`,
      `Derek: "So you’re saying anyone who ever looks at a friend’s homework is evil? That’s ridiculous."`,
      `Caleb: "I didn’t say evil. I said cheating destroys trust and hurts your future."`
    ]
  },

  // ---------------- FALSE CAUSE ----------------
  {
    fallacyName: "False Cause",
    dialogue: [
      `Liam: "My neighbor quit church, and now he’s happier. Clearly Christianity makes people miserable."`,
      `Daniel: "Or maybe he’s happier because of a new job or family changes. Happiness isn’t proof Christianity is false."`
    ]
  },
  {
    fallacyName: "False Cause",
    dialogue: [
      `Ethan: "I stopped reading my Bible at night, got more sleep, and my grades improved. Clearly the Bible was the problem."`,
      `Hannah: "Or maybe your planner and study habits helped. Scripture wasn’t holding you back."`
    ]
  },
  {
    fallacyName: "False Cause",
    dialogue: [
      `Jason: "Every time I pray before a test, I do well. So prayer automatically makes grades better."`,
      `Sophie: "Or maybe you studied harder those times. Prayer is good, but grades come from preparation too."`
    ]
  },
  {
    fallacyName: "False Cause",
    dialogue: [
      `Maya: "Since our town legalized marijuana, car accidents went down. So weed must make people drive safer."`,
      `Ben: "Or maybe police cracked down harder on DUIs that year. Correlation doesn’t equal causation."`
    ]
  },
  {
    fallacyName: "False Cause",
    dialogue: [
      `Chloe: "Our school banned energy drinks, and grades went up. Clearly, banning them caused smarter students."`,
      `Ethan: "Or maybe better teaching methods or tutoring programs improved performance. Don’t oversimplify."`
    ]
  },

  // ---------------- APPEAL TO EMOTION ----------------
  {
    fallacyName: "Appeal to Emotion",
    dialogue: [
      `Rachel: "I won’t vape. The Bible says be sober-minded."`,
      `Ethan: "But imagine being the only one at the party not doing it. You’ll feel left out forever."`,
      `Rachel: "Feeling left out doesn’t make sin okay."`
    ]
  },
  {
    fallacyName: "Appeal to Emotion",
    dialogue: [
      `Sophia: "We should protect unborn life. Every baby deserves a chance."`,
      `Emma: "But think of a girl terrified, alone, crying in a hospital. Isn’t her fear more important?"`,
      `Sophia: "Her pain matters, but it doesn’t justify ending life."`
    ]
  },
  {
    fallacyName: "Appeal to Emotion",
    dialogue: [
      `Tyler: "Cheating damages integrity."`,
      `Zach: "But think about the stress you’ll feel failing. Don’t you deserve relief, even if it means copying?"`,
      `Tyler: "Stress doesn’t make dishonesty right."`
    ]
  },
  {
    fallacyName: "Appeal to Emotion",
    dialogue: [
      `Noah: "Marriage is meant to be for life."`,
      `Ava: "But picture people stuck in unhappy relationships forever. Isn’t that cruel?"`,
      `Noah: "Difficult circumstances don’t erase God’s design."`
    ]
  },
  {
    fallacyName: "Appeal to Emotion",
    dialogue: [
      `Mason: "I don’t drink because I want to avoid regret."`,
      `Liam: "But imagine all the fun memories you’re missing. Isn’t that sad?"`,
      `Mason: "Fun isn’t worth lifelong regret."`
    ]
  },

  // ---------------- SLIPPERY SLOPE ----------------
  {
    fallacyName: "Slippery Slope",
    dialogue: [
      `Chloe: "Voluntary prayer groups should be allowed in schools."`,
      `Liam: "If we allow that, soon schools will force everyone to pray Christian prayers. Then other beliefs will be punished."`,
      `Chloe: "That’s not what I’m saying. Freedom doesn’t mean forcing others."`
    ]
  },
  {
    fallacyName: "Slippery Slope",
    dialogue: [
      `Sophia: "We should regulate explicit content on school Wi-Fi."`,
      `Mia: "If we start blocking sites, then the next step is banning normal websites, then censoring everything."`,
      `Sophia: "Guardrails don’t mean silencing truth."`
    ]
  },
  {
    fallacyName: "Slippery Slope",
    dialogue: [
      `Ethan: "Phones at lunch could help students connect with family."`,
      `Sophia: "If we allow phones at lunch, they’ll be used in class, then grades will drop, then teachers lose control."`,
      `Ethan: "That’s an exaggeration. We’re talking about lunch, not class."`
    ]
  },
  {
    fallacyName: "Slippery Slope",
    dialogue: [
      `Daniel: "Protecting unborn life in law is important."`,
      `Maya: "If abortion is banned, then contraception will be banned, then the government will control families."`,
      `Daniel: "Protecting life doesn’t mean controlling every choice."`
    ]
  },
  {
    fallacyName: "Slippery Slope",
    dialogue: [
      `Nina: "Parents guiding media choices helps kids."`,
      `Jack: "If parents guide media, then kids will be controlled in everything, then they’ll have no independence."`,
      `Nina: "Guidance isn’t the same as control."`
    ]
  },

  // ---------------- AD HOMINEM ----------------
  {
    fallacyName: "Ad Hominem",
    dialogue: [
      `Ben: "The resurrection is supported by eyewitnesses."`,
      `Trevor: "Of course you’d say that. You grew up in church. You’re biased."`,
      `Ben: "My background doesn’t change the evidence."`
    ]
  },
  {
    fallacyName: "Ad Hominem",
    dialogue: [
      `Ella: "Cheating ruins integrity and leaves you unprepared."`,
      `Jack: "Easy for you to say, Ella. You’re a nerd who studies all day."`,
      `Ella: "Insulting me doesn’t change the truth."`
    ]
  },
  {
    fallacyName: "Ad Hominem",
    dialogue: [
      `Sophia: "Abstinence prevents regret and honors commitment."`,
      `Mia: "You’ve never even dated, so you have no right to talk about relationships."`,
      `Sophia: "Experience isn’t required to recognize wisdom."`
    ]
  },
  {
    fallacyName: "Ad Hominem",
    dialogue: [
      `Noah: "Gossip divides friendships and dishonors truth."`,
      `Jacob: "You don’t even have many friends, so what do you know about it?"`,
      `Noah: "Even if I had none, gossip is still destructive."`
    ]
  },
  {
    fallacyName: "Ad Hominem",
    dialogue: [
      `Daniel: "Every life has value, even the unborn."`,
      `Tyler: "Of course you’d say that, you’re just a religious fanatic."`,
      `Daniel: "Labeling me doesn’t refute the point."`
    ]
  },

  // ---------------- PERSONAL INCREDULITY ----------------
  {
    fallacyName: "Personal Incredulity",
    dialogue: [
      `Emma: "It makes sense God exists outside of time and space."`,
      `Jordan: "I can’t imagine something outside time. If I can’t picture it, it must be impossible."`,
      `Emma: "Truth isn’t limited to what we can imagine."`
    ]
  },
  {
    fallacyName: "Personal Incredulity",
    dialogue: [
      `Liam: "Miracles are possible if God exists."`,
      `Ethan: "I just can’t believe in miracles. Everything has a natural explanation."`,
      `Liam: "Our limits don’t erase God’s ability."`
    ]
  },
  {
    fallacyName: "Personal Incredulity",
    dialogue: [
      `Hannah: "Absolute morality exists beyond culture."`,
      `Mia: "That doesn’t make sense. Everyone makes their own truth."`,
      `Hannah: "If morality is relative, then injustice is excusable. That’s not logical."`
    ]
  },
  {
    fallacyName: "Personal Incredulity",
    dialogue: [
      `Caleb: "It’s reasonable to believe life has purpose beyond survival."`,
      `Jack: "I just can’t see purpose. Life feels random, so it must be random."`,
      `Caleb: "Feeling random doesn’t prove it is."`
    ]
  },
  {
    fallacyName: "Personal Incredulity",
    dialogue: [
      `Sophia: "The soul is real, not just the brain."`,
      `Ethan: "I can’t imagine a soul. If I can’t see it, it must not exist."`,
      `Sophia: "Reality isn’t limited to what’s visible."`
    ]
  },

  // ---------------- NONE ----------------
  {
    fallacyName: "None",
    dialogue: [
      `Dad: "You need to be home by 10. Sleep matters, and late nights often lead to trouble."`,
      `Daughter: "I think I can handle staying out until 11 on weekends. I’m responsible."`,
      `Dad: "And I still think 10 is wiser. We disagree, but it’s not bad logic."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Teacher: "Phones should be banned in class to keep focus."`,
      `Student: "I think using them for research makes sense. They’re tools, not just distractions."`,
      `Teacher: "We see it differently, but both are valid arguments."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Mom: "I want you off social media. Too much of it is toxic."`,
      `Son: "But I’ve learned skills and connected with good friends through it. It’s not all bad."`,
      `Mom: "We disagree on the impact, but both points stand without fallacies."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Friend A: "I think playing violent games desensitizes people to real violence."`,
      `Friend B: "I think it’s just entertainment, not training for real life."`,
      `Friend A: "Strong disagreement, but both have logic."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Brother: "College is essential for success in today’s world."`,
      `Sister: "I think trade school or entrepreneurship can lead to success too."`,
      `Brother: "We disagree, but neither side is fallacious."`
    ]
  },
];
export const ACTIVE_FALLACIES = Array.from(
  new Set(SCENARIOS.map(s => s.fallacyName))
) as Fallacy['name'][];