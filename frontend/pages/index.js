import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "../styles/Home.module.css";

const modules = [
  { icon: "◇", title: "Logic Lab", detail: "Pattern recognition", progress: 72, tone: "violet" },
  { icon: "◉", title: "Memory Forge", detail: "Working memory", progress: 58, tone: "cyan" },
  { icon: "✦", title: "Focus Flow", detail: "Attention control", progress: 81, tone: "lime" },
];

const focusOptions = ["Memory", "Logic", "Focus"];
const timeOptions = ["5", "10", "15"];

export default function Home() {
  const [showPlan, setShowPlan] = useState(false);
  const [focus, setFocus] = useState("Logic");
  const [minutes, setMinutes] = useState("10");
  const [planReady, setPlanReady] = useState(false);
  const [challengeOpen, setChallengeOpen] = useState(false);
  const [answer, setAnswer] = useState(null);

  const challengeMessage = useMemo(() => {
    if (answer === null) return "Choose the number that completes the pattern.";
    if (answer === 48) return "Correct — each number doubles. Strong pattern recognition.";
    return "Not quite. Look at how each number changes from the one before it.";
  }, [answer]);

  function savePlan() {
    setPlanReady(true);
    setShowPlan(false);
  }

  return (
    <>
      <Head>
        <title>AI IQ Increaser</title>
        <meta
          name="description"
          content="Adaptive daily training for memory, logic, and focus."
        />
      </Head>

      <div className={styles.appShell}>
        <aside className={styles.sidebar}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>AI</span>
            <span>
              <strong>IQ Increaser</strong>
              <small>Train smarter daily</small>
            </span>
          </div>

          <nav className={styles.nav} aria-label="Primary navigation">
            <button className={`${styles.navItem} ${styles.activeNav}`} type="button">
              <span>⌂</span> Dashboard
            </button>
            <button className={styles.navItem} type="button">
              <span>△</span> Training
            </button>
            <button className={styles.navItem} type="button">
              <span>↗</span> Progress
            </button>
            <button className={styles.navItem} type="button">
              <span>◎</span> Achievements
            </button>
          </nav>

          <div className={styles.sidebarCard}>
            <span className={styles.spark}>✦</span>
            <strong>7-day momentum</strong>
            <p>One more session keeps your strongest streak alive.</p>
            <div className={styles.weekDots} aria-label="Six of seven training days complete">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <span className={day < 7 ? styles.dayDone : ""} key={day}>{day}</span>
              ))}
            </div>
          </div>

          <Link className={styles.statusLink} href="/test">
            <span className={styles.liveDot} /> System online
          </Link>
        </aside>

        <main className={styles.main}>
          <header className={styles.topbar}>
            <div>
              <p className={styles.eyebrow}>Tuesday, August 11</p>
              <h1>Good afternoon, Dan.</h1>
            </div>
            <button className={styles.avatar} aria-label="Open profile" type="button">DM</button>
          </header>

          <section className={styles.hero}>
            <div className={styles.heroGlow} />
            <div className={styles.heroCopy}>
              <span className={styles.pill}>{planReady ? "YOUR PLAN IS READY" : "TODAY’S COGNITIVE BOOST"}</span>
              <h2>{planReady ? `${focus} training, tuned to you.` : "Turn ten focused minutes into lasting progress."}</h2>
              <p>
                {planReady
                  ? `A ${minutes}-minute adaptive session is ready. Difficulty will adjust as you train.`
                  : "Adaptive exercises learn where you are strongest and build the skills that need attention."}
              </p>
              <div className={styles.heroActions}>
                <button className={styles.primaryButton} onClick={() => setChallengeOpen(true)} type="button">
                  Start today’s session <span>→</span>
                </button>
                <button className={styles.secondaryButton} onClick={() => setShowPlan(true)} type="button">
                  {planReady ? "Adjust plan" : "Personalize my plan"}
                </button>
              </div>
            </div>
            <div className={styles.scoreOrb} aria-label="Current cognitive score 742">
              <div className={styles.orbRing}>
                <span>742</span>
                <small>IQ SCORE</small>
              </div>
              <p><strong>+18</strong> this week</p>
            </div>
          </section>

          <section className={styles.statsGrid} aria-label="Weekly performance">
            <article className={styles.statCard}>
              <span className={`${styles.statIcon} ${styles.violet}`}>⚡</span>
              <div><small>TRAINING STREAK</small><strong>6 days</strong><p>Personal best: 12</p></div>
            </article>
            <article className={styles.statCard}>
              <span className={`${styles.statIcon} ${styles.cyan}`}>◷</span>
              <div><small>FOCUS TIME</small><strong>48 min</strong><p>+14% this week</p></div>
            </article>
            <article className={styles.statCard}>
              <span className={`${styles.statIcon} ${styles.lime}`}>↗</span>
              <div><small>WEEKLY GROWTH</small><strong>+8.4%</strong><p>Top 18% of learners</p></div>
            </article>
          </section>

          <div className={styles.contentGrid}>
            <section className={styles.panel}>
              <div className={styles.panelHeader}>
                <div><p className={styles.eyebrow}>YOUR TRAINING</p><h2>Strengthen every skill</h2></div>
                <button className={styles.textButton} type="button">View all →</button>
              </div>
              <div className={styles.moduleList}>
                {modules.map((module) => (
                  <button className={styles.moduleCard} key={module.title} type="button" onClick={() => setChallengeOpen(true)}>
                    <span className={`${styles.moduleIcon} ${styles[module.tone]}`}>{module.icon}</span>
                    <span className={styles.moduleCopy}>
                      <strong>{module.title}</strong><small>{module.detail}</small>
                      <span className={styles.progressTrack}><span style={{ width: `${module.progress}%` }} /></span>
                    </span>
                    <span className={styles.moduleScore}>{module.progress}<small>/100</small></span>
                  </button>
                ))}
              </div>
            </section>

            <section className={`${styles.panel} ${styles.progressPanel}`}>
              <div className={styles.panelHeader}>
                <div><p className={styles.eyebrow}>LAST 7 DAYS</p><h2>Momentum</h2></div>
                <span className={styles.trend}>↗ 8.4%</span>
              </div>
              <div className={styles.chart} aria-label="Training scores over the last seven days">
                {[44, 57, 51, 70, 66, 79, 86].map((height, index) => (
                  <div className={styles.barColumn} key={height + index}>
                    <span className={index === 6 ? styles.currentBar : ""} style={{ height: `${height}%` }} />
                    <small>{["W", "T", "F", "S", "S", "M", "T"][index]}</small>
                  </div>
                ))}
              </div>
              <div className={styles.insight}>
                <span>✦</span>
                <p><strong>AI insight</strong>Your focus score peaks after short logic sessions. We’ll use that sequence today.</p>
              </div>
            </section>
          </div>
        </main>
      </div>

      {showPlan && (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={() => setShowPlan(false)}>
          <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="plan-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowPlan(false)} aria-label="Close" type="button">×</button>
            <span className={styles.modalMark}>✦</span>
            <p className={styles.eyebrow}>PERSONALIZE YOUR PATH</p>
            <h2 id="plan-title">What would you most like to improve?</h2>
            <div className={styles.choiceGrid}>
              {focusOptions.map((option) => (
                <button className={focus === option ? styles.selectedChoice : ""} onClick={() => setFocus(option)} type="button" key={option}>{option}</button>
              ))}
            </div>
            <h3>How much time fits your day?</h3>
            <div className={styles.timeChoices}>
              {timeOptions.map((option) => (
                <button className={minutes === option ? styles.selectedChoice : ""} onClick={() => setMinutes(option)} type="button" key={option}>{option} min</button>
              ))}
            </div>
            <button className={`${styles.primaryButton} ${styles.fullButton}`} onClick={savePlan} type="button">Build my adaptive plan</button>
          </section>
        </div>
      )}

      {challengeOpen && (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={() => setChallengeOpen(false)}>
          <section className={`${styles.modal} ${styles.challengeModal}`} role="dialog" aria-modal="true" aria-labelledby="challenge-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setChallengeOpen(false)} aria-label="Close" type="button">×</button>
            <p className={styles.eyebrow}>DAILY LOGIC CHALLENGE · 1 OF 5</p>
            <h2 id="challenge-title">Complete the sequence</h2>
            <div className={styles.sequence}><span>3</span><span>6</span><span>12</span><span>24</span><span>?</span></div>
            <p className={answer === 48 ? styles.correctMessage : answer === null ? styles.challengeHint : styles.retryMessage} aria-live="polite">{challengeMessage}</p>
            <div className={styles.answerGrid}>
              {[36, 42, 48, 52].map((option) => (
                <button className={answer === option ? (option === 48 ? styles.correctAnswer : styles.wrongAnswer) : ""} onClick={() => setAnswer(option)} type="button" key={option}>{option}</button>
              ))}
            </div>
            {answer !== null && answer !== 48 && <button className={styles.textButton} onClick={() => setAnswer(null)} type="button">Try again</button>}
            {answer === 48 && <button className={`${styles.primaryButton} ${styles.fullButton}`} onClick={() => { setAnswer(null); setChallengeOpen(false); }} type="button">Continue training →</button>}
          </section>
        </div>
      )}
    </>
  );
}
