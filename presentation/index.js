// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  formidagon: require("../assets/formidable-logo.svg"),
  goodWork: require("../assets/good-work.gif"),
  valuestream: require("../assets/valuestream.png"),
  leadtime: require("../assets/leadtime.png"),
  etsygraph: require("../assets/errorgraph.png"),
  phoenix: require("../assets/phoenixproject.png"),
  handbook: require("../assets/handbook.png")
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            DevOps for Front End Developers
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading>Have you ever experienced...</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Fear of deploying on a Friday at 5pm?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Issues merging in long lived feature branches?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Unplanned work get in the way of developing new features?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            Dev/Stage/Test/Prod environments show different behaviours?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            You constantly go to someone to ask how to do something, because you
            lack documentation
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            People blame or shame others for making mistakes
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Notes>
            Value stream comes from lean manufacturing - each point is a process
            that has constraints and bottlenecks. Identify these and try and
            make them more efficient
          </Notes>
          <Heading size={2}>
            Start thinking of your workplace as a factory
          </Heading>
          <Image src={images.valuestream} width={1000} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4}>
            Lead time - a measure of how competitive you are
          </Heading>
          <Image src={images.leadtime} width={1000} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              Even more important than daily work is the improvement of daily
              work.
            </Quote>
            <Cite margin="10px 0 0 30px">Mike Orzen</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">
            The Three Ways
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            The Principles of Flow
          </Heading>
          <Text size={6} textColor="secondary">
            Accelerate delivery of work from Feature Idea to Customer
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            The Principles of Feedback
          </Heading>
          <Text size={6} textColor="secondary">
            Create safe systems of work
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            The Principles of Continual Learning and Experimentation
          </Heading>
          <Text size={6} textColor="secondary">
            Foster a high-trust culture and a scientific approach to improving
            our daily work by taking risks
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading>1. Continuous Flow</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Do you understand your CI/CD pipeline?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Continuous Integration</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>git, CI (github actions, circle ci, travis ci)</Notes>
          <List>
            <ListItem>git repo</ListItem>
            <ListItem>CI runs tests on PRs</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Automated testing</Heading>
          <Text textColor="primary">
            Start with tests - do not end with tests
          </Text>
          <Text textColor="primary">PRs if applicable, must have tests</Text>
          <Notes>
            PRs applicable - means what if it's just a style change? Just
            include an image at different breakpoints
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem>
              Unit/Integration testing (jest + @testing-library/react)
            </ListItem>
            <ListItem>
              E2E testing (cypress + @testing-library/cypress)
            </ListItem>
            <ListItem>
              Accessibility testing (a11y) (cypress-axe / jest-axe)
            </ListItem>
            <ListItem>Performance testing (lighthouse)</ListItem>
            <ListItem>SEO testing (lighthouse)</ListItem>
            <ListItem>a11y testing (lighthouse)</ListItem>
            <ListItem>
              Visual regression testing (applitools w/ cypress)
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Continuous Delivery vs Continuous Deployment</Heading>
          <Notes>
            Continuous Delivery is having a build ready for deployment. This is
            where we click a button to deploy. Continuous Deployment is whenever
            a merge happens to master, it automatically gets deployed to a
            production environment
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            push to s3, setting up our DNS setting up cloudfront (or other edge
            network), setting up certificates for TSL, cloudfront distro, break
            cloudfront cache
          </Notes>
          <Heading>AWS context</Heading>
          <List>
            <ListItem>CI deploys on merges to master</ListItem>
            <ListItem>Our builds go to an s3 bucket</ListItem>
            <ListItem>Need to invalidate our CloudFront cache</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Small batch vs large batch PRs</Heading>
          <Text textColor="primary">
            Optimize for individual productivity vs optimizing for team
            productivity
          </Text>
          <Notes>
            - The faster we merge into master, the better. - Small PRS are
            easier to review, this is good for the team - Large PRs are harder
            to review, it's good for the individual but bad for team
            productivity
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            Dark launching - deploying a feature to production but not making it
            available to users
          </Notes>
          <Heading>Automate & Enable Low-Risk Releases</Heading>
          <List>
            <ListItem>Deploy vs Release</ListItem>
            <ListItem>Deploy once code is in master</ListItem>
            <ListItem>Use feature flags to toggle releases</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading>2. Feedback Loop</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>
            Create observability (o11y) in our app so we can see and solve
            problems early
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>What should I track?</Heading>
          <List>
            <ListItem>A/B test results</ListItem>
            <ListItem>API response times</ListItem>
            <ListItem>Errors</ListItem>
            <ListItem>How long the CI/CD pipeline takes</ListItem>
          </List>

          <Notes>
            CI/CD pipeline affects Mean Time to Recovery (MTTR). How fast can we
            fix our stuff?
          </Notes>
        </Slide>

        <Slide>
          <Image src={images.etsygraph} width={1000} />
          <Notes>
            Example from etsy. Main point is overlaying deploys with different
            metrics
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Follow your work downstream</Heading>

          <Text textColor="primary">
            Do you have customer service? Talk with them to hear what customers
            are saying about the product you work on
          </Text>
          <Notes>
            Build empathy. The work we do affects people. We should know how it
            helps or disrupts our users' lives
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading>3. Continuous Experimentation and Knowledge Sharing</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Making Mistakes is Okay</Heading>
          <Notes>
            We work with complex systems. Mistakes are inevitable. It's our duty
            to learn from these.
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Do Not Name, Blame and Shame</Heading>
          <Text textColor="primary">
            This just makes people dislike their job and prevents them from
            sharing information if they make a mistake
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Do Blameless Post-Mortems After Accidents</Heading>
          <Text textColor="primary">
            Learn from our mistakes! Be open and share everything. This is how
            we prevent this mistake from ever happening again
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Turn Local Discoveries into Global Improvements</Heading>
          <Text textColor="primary">
            Make mistakes -> Document this. Try something new -> Document this
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              Our goal at Etsy is to view mistakes, errors, slips, lapses, and
              so forth with a perspective of learning.
            </Quote>
            <Cite margin="10px 0 0 30px">John Allspaw, CTO of Etsy</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Institute Game Days to Rehearse Failures</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>
            Inject Production Failures to Enable Resilience And Learning
          </Heading>
          <Text textColor="primary">
            Chaos Monkey in Your Browser (Gremlin.JS)
          </Text>
          <Notes>
            There is a React Rally talk by Brian Holt that discusses this. Also
            an interesting library by asantos00/miragejs-caos. Simulates API
            failures
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>PD Days</Heading>
          <Text textColor="primary">
            Take one day off and learn something new to share with the team.
            Paid for by the company of course 😏
          </Text>
          <Text textColor="tertiary">Document and give a lunch and learn!</Text>
          <Notes>
            Imagine if everyone on your team took 1 day off a month to learn
            something new that will contribute to the team's success. How will
            this look a year later?
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>Pair Programming</Heading>
          <Text textColor="primary">
            Work with someone so you can share your knowledge or gain their
            knowledge
          </Text>
          <Text textColor="tertiary">Document what you've learned</Text>
        </Slide>

        <Slide>
          <Image src={images.phoenix} width={700} />
          <Notes>
            If you find any of this interesting, I highly suggest to read the
            phoenix project
          </Notes>
        </Slide>

        <Slide>
          <Image src={images.handbook} width={500} />
          <Notes>How to implement DevOps</Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading textColor="secondary">
            DevOps is not just a job title, it's a change in culture
          </Heading>
          <Notes>
            DevOps is a nice name. What it is just a bunch of behaviours that
            high performing tech companies do
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              The way to change culture is not to first change how people think,
              but instead to start by changing how people behave—what they do
            </Quote>
            <Cite margin="10px 0 0 30px">John Shook</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
