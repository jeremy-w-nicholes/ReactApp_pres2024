import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import fullpage from 'fullpage.js';
import { useInView } from 'react-intersection-observer';
import './App.css';
import section1 from './The-Stoic-Mindset-Insights-from-Marcus-Aurelius-e1686844253387.png';
import section2 from './meditations.jpg';
import section3 from './analyze.jpg';
import section5 from './Beartooth.jpg';
import section6 from './icegif-893.gif';
import section7 from './fin.jpg';


const githubHandle = "jeremy-w-nicholes";
const githubProfileUrl = `https://github.com/${githubHandle}`;
const githubProfileImage = `https://github.com/${githubHandle}.png`;

const sections = [
  { id: 1, title: "Living in The In Between ", content: "Marcus Aurelius' guide for what to do when \"Life Just Sucks\"", image: section1,
    imageSource: "https://successchaserschannel.com/the-stoic-mindset-insights-from-marcus-aurelius/" },

  {
    id: 2,
    title: "Meditations 12.1",
    content: (
      <>
        <p style={{ textIndent: '2em' }}>
          Everything you’re trying to reach—by taking the long way round— you could have right now, this moment. If you’d only stop thwarting your own attempts. If you’d only let go of the past, entrust the future to Providence, and guide the present toward reverence and justice. Reverence: so you’ll accept what you’re allotted. Nature intended it for you, and you for it. Justice: so that you’ll speak the truth, frankly and without evasions, and act as you should— and as other people deserve.
        </p>
        <p>
          Don’t let anything deter you: other people’s misbehavior, your own misperceptions, What People Will Say, or the feelings of the body that covers you (let the affected part take care of those). And if, when it’s time to depart, you shunt everything aside except your mind and the divinity within... if it isn’t ceasing to live that you’re afraid of but never beginning to live properly... then you’ll be worthy of the world that made you.
        </p>
        <p style={{ textIndent: '2em' }}>
          No longer an alien in your own land. No longer shocked by everyday events—as if they were unheard-of aberrations. No longer at the mercy of this, or that.
          <br /><br />
          <strong>Aurelius, Marcus, and Gregory Hays.</strong> <br />
           Meditations. New York, Modern Library, 6 May 2003.

‌
        </p>
      </>
    ),
    image: section2,
    imageSource: "https://www.amazon.com/Meditations-New-Translation-Marcus-Aurelius-ebook/dp/B0CRBB4R5R"
  },

  {
    id: 3,
    title: "Analysis",
    content: (
      <>
        <p style={{ textIndent: '2em' }}>
          In <strong>12.1</strong>, Marcus Aurelius reflects on people's tendency to complicate their lives by overlooking the fact that they already possess the things they need to be happy. He advises against getting caught up in the past or worrying about the future. He argues that by accepting what life gives you and by being virtuous, e.g., truthful and fair, you can live a fulfilling life despite the grievances and misfortunes life may throw your way.
        </p>
        <p style={{ textIndent: '2em' }}>
        By focusing on 'The Now' and realizing that you are in control of your own happiness, rather than dwelling on times past when you were happy or worrying about the future, you will be free and, hopefully, happy.
        </p>
      </>
    ),
    image: section3,
    imageSource: "https://pngtree.com/freebackground/black-textured-background-with-magnifying-glass-focus_13602863.html"
  },

  {
    id: 4,
    title: "The In Between",
    content: (
      <>
        <h3 className="text-2xl font-bold mb-4 text-center">Beartooth - "In Between" Lyrics</h3>
        {/* Three Column Layout for Lyrics */}
        <div className="columns-3 gap-8 p-4 text-sm leading-relaxed">
          <p><strong>[Verse 1]</strong><br />
            Life just sucks when all you know is the bottom<br />
            It's not your choice, there's no escaping it<br />
            Get up and run as far as you can<br />
            Head to higher ground while there's a chance to live
          </p>
  
          <p><strong>[Pre-Chorus]</strong><br />
            Don't run away, run away, runaway<br />
            Don't run away, run away, runaway (Run!)
          </p>
  
          <p><strong>[Chorus]</strong><br />
            Up on the mountain I see down below<br />
            It's easy to lose yourself I know<br />
            Can't hear what you're shouting, I'm deaf to your show<br />
            It's easy to lose your self-control<br />
            Everybody gets high, everybody gets low<br />
            Life can be such overdose<br />
            Up on the mountain I see down below<br />
            It's easy to lose yourself I know<br />
            In the in between
          </p>
  
          <p><strong>[Verse 2]</strong><br />
            Life's so dark when every day is a struggle<br />
            Why go out and see the world on fire<br />
            Don't let your mindset become what controls you<br />
            Speak right now and make the choice to grow
          </p>
  
          <p><strong>[Bridge]</strong><br />
            I won't let pain get in my way<br />
            I can't have silence claiming me<br />
            We have strength in numbers, strength in numbers<br />
            To get us through the day<br />
            No compromises to be made<br />
            This is a war we're gonna win<br />
            We have strength in numbers, strength in numbers<br />
            To get us through the day
          </p>
  
          <p><strong>[Chorus]</strong><br />
            Up on the mountain I see down below<br />
            It's easy to lose yourself I know<br />
            Can't hear what you're shouting, I'm deaf to your show<br />
            It's easy to lose your self-control<br />
            Everybody gets high, everybody gets low<br />
            Life can be such overdose<br />
            Up on the mountain I see down below<br />
            It's easy to lose yourself I know<br />
            In the in between
          </p>
        </div>
      </>
    ),
    videoId: "j2p_w409y-o"
  },

  {
    id: 5,
    title: "Personal Take",
    content: (
      <>
        <p style={{ textIndent: '2em' }}>
        Beartooth's song "In Between" captures the struggle of navigating life's extremes — the highs and lows — and finding strength in that middle ground. This aligns nearly perfectly with Marcus Aurelius' message in 12.1, where he discusses the importance of focusing on what is within your control: the present. .
        </p>
        <p style={{ textIndent: '2em' }}>
        The lyrics "Life just sucks when all you know is the bottom" mirrors the idea that we often let our mindset trap us in negativity by focusing on the past or stressing the future. It is very easy to get stuck in a cycle of negativity when coming off a peak in your life, and nothing seems to match that high.
        </p>
        <p style={{ textIndent: '2em' }}>
        One section of the song that also aligns with the 12.1 but is not explicitly mentioned in this section of text is "We have strength in numbers, strength in numbers / To get us through the day." This serves as a reminder that everyone has struggles, but by finding strength in yourself and others while adhering to the values of stoicism, things won't be so bleak.
        </p>
      </>
    ),
    image: section5,
    imageSource: "https://www.amazon.com/Disgusting-Beartooth/dp/B00JZ4XB3K"
  },

  {
    id: 6,
    title: "Walkaway",
    content: (
      <>
        <p style={{ textIndent: '2em' }}>
          The key takeaway from both Marcus Aurelius’ *Meditations* and Beartooth's song "In Between" is that true strength lies in how we respond to life’s challenges. Marcus teaches us that by focusing on the present moment and letting go of what we cannot control, we find inner peace. The song, reminds us that life’s struggles are inevitable, but we can choose to run away from them or face them head on.
        </p>
        <p style={{ textIndent: '2em' }}>
          Life is full of ups and downs, but it’s in the “in between” moments where we find our true resilience. By embracing the present, accepting our circumstances, and leaning on our inner strength (or the support of others), we can overcome whatever life throws at us.
        </p>
        <p style={{ textIndent: '2em' }}>
          Ultimately, both the song and the philosophy encourage us not to run away from difficulties but to face them head-on, using them as opportunities for growth.
          So the next time you find yourself staring "at the bottom" center yourself, and find your strength in the "in between."
        </p>
      </>
    ),
    image: section6,
    imageSource: "https://www.icegif.com/mic-drop-25/"
  },

  {
    id: 7,
    title: "Conclusion",
    content: (
      <>
        <p className="mt-4 text-lg">
        Remember when life "just sucks," we have the power to endure and find meaning.
        </p>
      </>
    ),
    image: section7,
    imageSource: "https://www.athensculturenet.com/en/event/fin"
  }
];

const gradientColors = [
  'linear-gradient(135deg, #000000, #1a1a1a)',  // Black to dark grey
  'linear-gradient(135deg, #000000, #1a1a1a)',  // Black to dark grey
  'linear-gradient(135deg, #000000, #1a1a1a)',  // Black to dark grey
  'linear-gradient(135deg, #000000, #1a1a1a)',  // Black to dark grey
  'linear-gradient(135deg, #000000, #1a1a1a)',  // Black to dark grey
  'linear-gradient(135deg, #000000, #1a1a1a)',  // Black to dark grey

];

function useFullPage(setActiveSection) {
  useEffect(() => {
    // Initialize fullpage.js
    const fullpageInstance = new fullpage('#fullpage', {
      autoScrolling: true,
      fitToSection: true,
      scrollingSpeed: 700,
      navigation: true,
      navigationPosition: 'center',
      showPoweredBy: false,
      anchors: sections.map((section) => `section-${section.id}`),
      afterLoad: function (origin, destination) {
        setActiveSection(destination.anchor);
        document.body.style.background = gradientColors[destination.index % gradientColors.length];
      },
      
      
    });

    // Cleanup function to destroy fullpage instance on unmount
    return () => {
      if (fullpageInstance && fullpageInstance.destroy) {
        fullpageInstance.destroy('all');
      }
    };
  }, [setActiveSection]);
}


function AnimatedSection({ section, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    } else {
      controls.start({ x: index % 2 === 0 ? 200 : -200, opacity: 0 });
    }
  }, [controls, inView, index]);

  const isEven = index % 2 === 0;
  const initialX = isEven ? 200 : -200;

  return (
    <div className="section" ref={ref}>
      <div className="section-content min-h-screen flex items-center justify-center bg-secondary text-white p-10">
        <div className={`flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-8 md:space-y-0 ${isEven ? 'md:gap-12' : 'md:gap-16'}`}>
          {/* Media (Image or YouTube Video) */}
          <motion.div
            className={`w-full md:w-1/2 ${isEven ? 'order-1' : 'order-2'} md:pl-8`}
            initial={{ x: initialX, opacity: 0 }}
            animate={controls}
          >
          {section.videoId ? (
            <div className="relative w-full max-w-5xl mx-auto h-0 overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${section.videoId}`}
                title={section.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
            ) : (
              <>
              <img src={section.image} alt={section.title} className="w-full h-auto rounded-lg shadow-lg" />
                {/* Image Source Attribution */}
                {section.imageSource && (
                  <p className="text-sm text-gray-400 mt-2">
                    Image source: <a href={section.imageSource} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">{section.imageSource}</a>
                  </p>
                )}
              </>
            )}
          </motion.div>
          {/* Text section */}
          <motion.div
            className={`w-full md:w-1/2 ${isEven ? 'order-2' : 'order-1'} text-center md:text-left md:pr-8`}
            initial={{ opacity: 0 }}
            animate={controls}
          >
            <h2 className="text-4xl font-bold text-accent">{section.title}</h2>
            <p className="text-muted mt-4">{section.content}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('section-1');

  useFullPage(setActiveSection); // Pass setActiveSection to useFullPage

  return (
    <>
      <nav className="fixed top-0 w-full bg-primary bg-opacity-95 backdrop-blur-md shadow-lg z-20 flex items-center justify-between px-4 py-2">
        <ul className="flex space-x-10 justify-center">
          {/* Links to Other Sections */}
          {sections.map((section) => (
            <li key={section.id} className="text-muted font-semibold">
              <a
                href={`#section-${section.id}`}
                className={`cursor-pointer px-4 py-2 rounded transition-colors ${
                  activeSection === `section-${section.id}`
                    ? 'bg-accent text-white'
                    : 'hover:bg-accent hover:text-white'
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>

        {/* GitHub Profile Button */}
        <a
          href={githubProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-accent hover:bg-secondary px-3 py-1 rounded-full"
        >
          <img src={githubProfileImage} alt={`${githubHandle}'s profile`} className="w-8 h-8 rounded-full" />
          <span className="text-white font-semibold">{githubHandle}</span>
        </a>
      </nav>
      <div id="fullpage">
        {sections.map((section, index) => (
        <AnimatedSection key={section.id} section={section} index={index} />
        ))}
      </div>
    </>
  );
}

export default App;
