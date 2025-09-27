import type { Fallacy } from './types';

export const SCENARIOS: { dialogue: string[]; fallacyName: Fallacy['name'] }[] = [
  // STRAWMAN (4)
  {
    fallacyName: "Strawman",
    dialogue: [
      `Alyssa: "I think the school could benefit from extending lunch by ten minutes so students have more time to eat without rushing. A lot of kids end up throwing food away because they don’t finish in time, and it wastes money and food. Extending it slightly could make a big difference."`,
      `Marcus: "So you want to cut into class time so everyone can just sit around socializing for hours? If we do that, nobody will take academics seriously and the whole school day will lose focus."`
    ]
  },
  {
    fallacyName: "Strawman",
    dialogue: [
      `Diego: "I don’t think phones should be banned completely, but maybe they should be silenced during lectures so people can focus better. It would reduce distractions and make the classroom feel more respectful."`,
      `Rachel: "Right, so basically you want to treat us all like little kids who can’t be trusted at all. Next thing, you’ll probably argue we shouldn’t be allowed to bring our phones to school ever again."`
    ]
  },
  {
    fallacyName: "Strawman",
    dialogue: [
      `Jordan: "I think the cafeteria could add some healthier lunch options alongside the regular menu. That way students who want to eat better have choices without forcing it on everyone."`,
      `Sophie: "Oh, so you want to ban pizza, fries, and everything that makes lunch fun. You just want to turn the cafeteria into a health camp where no one is allowed to enjoy their food."`
    ]
  },
  {
    fallacyName: "Strawman",
    dialogue: [
      `Leo: "I think we should have more opportunities for project-based learning, because it helps people who don’t test well still show what they know. Tests are useful, but they shouldn’t be the only way to measure learning."`,
      `Hannah: "So you’re saying tests don’t matter at all? That’s basically like saying grades are meaningless and everyone should just get an easy A."`
    ]
  },

  // FALSE CAUSE (4)
  {
    fallacyName: "False Cause",
    dialogue: [
      `Kayla: "Our soccer team has been practicing harder and communicating better on the field lately. I think that’s why we’ve been winning more games."`,
      `Ethan: "No, it’s clearly because you’ve been drinking that new energy drink before practice. That’s the only explanation for our winning streak."`
    ]
  },
  {
    fallacyName: "False Cause",
    dialogue: [
      `Nora: "It feels like our internet has been more reliable lately. Maybe the service company finally upgraded their equipment."`,
      `Carter: "Nope, it’s because I switched to dark mode on my laptop. The black background makes the Wi-Fi run faster—ever since I changed it, the connection’s been perfect."`
    ]
  },
  {
    fallacyName: "False Cause",
    dialogue: [
      `Lena: "It’s been a really warm fall this year. Climate patterns must be shifting again."`,
      `Owen: "No, it started right after the school added those new solar panels on the roof. Clearly, the panels are heating up the whole area and causing the warm weather."`
    ]
  },
  {
    fallacyName: "False Cause",
    dialogue: [
      `Mia: "The school newspaper has been more popular since we redesigned the layout and started covering more events."`,
      `Tyler: "That’s because I joined the staff this semester. The popularity obviously comes from me, not the changes."`
    ]
  },

  // APPEAL TO EMOTION (4)
  {
    fallacyName: "Appeal to Emotion",
    dialogue: [
      `Maya: "I’m not sure it makes sense to add more school dances this year — the budget’s already tight."`,
      `Owen: "But think about how left out some kids will feel if we don’t. For some people, dances are the only time they feel noticed. Imagine how crushed they’ll be if that’s taken away."`
    ]
  },
  {
    fallacyName: "Appeal to Emotion",
    dialogue: [
      `Liam: "I think it’s reasonable to ask students to help clean up after lunch to keep the cafeteria tidy. It’s just a small responsibility that teaches respect for shared spaces."`,
      `Sophie: "How could you even suggest that? Imagine a kid who already feels invisible at school being forced to clean while everyone watches. That would humiliate them completely."`
    ]
  },
  {
    fallacyName: "Appeal to Emotion",
    dialogue: [
      `Ethan: "I think it would be good to make club funding more balanced so that smaller groups get some support too."`,
      `Rachel: "But think about the big clubs! They’ve worked so hard to get where they are, and if they lose funding it’ll be devastating. You can’t take that away from them."`
    ]
  },
  {
    fallacyName: "Appeal to Emotion",
    dialogue: [
      `Naomi: "We should probably review how much money is going into sports versus academics to make sure things are balanced."`,
      `Caleb: "So you want to be the one who tells the team they can’t afford uniforms this year? Can you imagine the heartbreak of players who’ve dreamed about representing their school? That would crush their spirits."`
    ]
  },

  // SLIPPERY SLOPE (4)
  {
    fallacyName: "Slippery Slope",
    dialogue: [
      `Tyler: "I think seniors should be allowed to leave campus for lunch if their grades are good."`,
      `Hannah: "If we let seniors do that, then juniors will demand it too, then sophomores, and eventually the whole school will be gone during the day. Classes will fall apart completely."`
    ]
  },
  {
    fallacyName: "Slippery Slope",
    dialogue: [
      `Grace: "It might help if teachers gave us one free homework pass per semester for emergencies. Sometimes things just pile up too much at once."`,
      `Logan: "If we start giving passes, students will expect two, then three, and soon homework won’t matter anymore. Nobody will take assignments seriously at all."`
    ]
  },
  {
    fallacyName: "Slippery Slope",
    dialogue: [
      `Ava: "I think the school could allow hats in class. It doesn’t really hurt anyone, and it helps some kids feel more comfortable."`,
      `Ryan: "If we allow hats, next people will want hoodies up, then sunglasses, and before long students will be showing up in costumes instead of real clothes."`
    ]
  },
  {
    fallacyName: "Slippery Slope",
    dialogue: [
      `Isabella: "It would be nice if students had more freedom to pick electives earlier in high school."`,
      `Connor: "If that happens, students will just avoid harder subjects completely. Then colleges will lower their standards, and soon high school diplomas won’t even mean anything."`
    ]
  },

  // AD HOMINEM (4)
  {
    fallacyName: "Ad Hominem",
    dialogue: [
      `Emily: "I think recycling bins should be placed in every classroom to make it easier for people to build better habits."`,
      `Ryan: "Of course you’d say that — you always try to act like you’re smarter than everyone else about the environment. You just want attention, so why should anyone listen to you?"`
    ]
  },
  {
    fallacyName: "Ad Hominem",
    dialogue: [
      `Darius: "I think school uniforms could make things easier by reducing pressure to keep up with fashion."`,
      `Olivia: "Please, you can’t even dress yourself without your mom’s help. Nobody’s going to take your opinion on clothing seriously."`
    ]
  },
  {
    fallacyName: "Ad Hominem",
    dialogue: [
      `Leah: "I think later start times might help students learn better since so many teenagers struggle with sleep."`,
      `Evan: "You’re literally the laziest person in the whole class. You just want to sleep in longer, so why should we believe you care about learning?"`
    ]
  },
  {
    fallacyName: "Ad Hominem",
    dialogue: [
      `Mason: "I think we should organize a community cleanup day to make our neighborhood look better."`,
      `Sofia: "That’s funny coming from you. You can’t even keep your own locker clean, so nobody should trust your ideas about cleaning up anything bigger."`
    ]
  },

  // NONE (8)
  {
    fallacyName: "None",
    dialogue: [
      `Lena: "I think the library should be open later so students have more time to study after practice. A lot of kids don’t get home until late, and they lose the chance to work in a quiet space."`,
      `Mark: "That makes sense. It would also give students without internet at home a better chance to finish their assignments on time."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Sophie: "We should organize a tutoring program where upperclassmen help younger students in math and science. It would build connections and help everyone succeed."`,
      `Diego: "Yeah, and it could also give older students a way to earn service hours while gaining leadership experience."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Maya: "I think the school could add water bottle refill stations in the hallways. It would cut down on plastic waste and help students stay hydrated."`,
      `Owen: "That’s true. It would also be cheaper in the long run since students wouldn’t have to keep buying bottled water."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Tyler: "It would be great if our school had more outdoor seating areas for lunch. Some kids prefer fresh air, and it might make lunchtime less crowded inside."`,
      `Hannah: "I agree. Plus, it could create a better atmosphere for students who need a break from the noise of the cafeteria."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Naomi: "We should think about adding more bike racks near the school. A lot of people live close enough to ride, but they don’t because there’s no safe place to leave their bikes."`,
      `Caleb: "That’s a good point. If more students biked, it would also help with traffic during drop-off and pick-up times."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Darius: "I think we should rotate the types of electives offered each year so students get more variety. That way people can try new things they might not have considered."`,
      `Olivia: "That’s a good idea. It could also make scheduling easier because not every elective would be overcrowded at the same time."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Emily: "If the school added a quiet study room, it could help students who don’t work well in noisy environments. Sometimes the library gets too busy."`,
      `Ryan: "Yeah, that would be helpful. It would give people who need silence a reliable option without disrupting others."`
    ]
  },
  {
    fallacyName: "None",
    dialogue: [
      `Grace: "I think having a student-run newsletter would be fun. It could highlight events, share creative writing, and give students a voice."`,
      `Logan: "That sounds great. It would also look good on college applications for the students who contribute."`
    ]
  }
];
// This creates a list of only the fallacies that are actually in SCENARIOS
export const ACTIVE_FALLACIES = Array.from(
  new Set(SCENARIOS.map(s => s.fallacyName))
);
