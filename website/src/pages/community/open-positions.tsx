import type { ReactNode } from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import Translate from '@docusaurus/Translate'
import React from 'react'
import CommunityLayout from '@site/src/components/community/CommunityLayout'
import styles from './community-page.module.css'

export default function OpenPositions(): ReactNode {
  return (
    <Layout
      title="Build with us — Open positions"
      description="Join the vLLM Semantic Router community through open roles, contributions, and partnerships."
    >
      <CommunityLayout
        activeKey="open-positions"
        title={<Translate id="community.openPositions.title">Build with us</Translate>}
        description={
          <Translate id="community.openPositions.subtitle">
            Open positions, contribution paths, and ways to partner with the project.
          </Translate>
        }
      >
        <div className={styles.main}>
          <section className={styles.section}>
            <div className={styles.intro}>
              <p>
                <Translate id="community.openPositions.intro">
                  vLLM Semantic Router is an open project. Whether you want a formal
                  role with a partner organization, or to contribute as a community
                  member, start here.
                </Translate>
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>
              <Translate id="community.openPositions.rolesHeading">Open positions</Translate>
            </h2>
            <div className={styles.intro}>
              <p>
                <Translate id="community.openPositions.rolesBody">
                  Formal openings are posted by participating organizations and
                  will be listed here as they become available. Check back soon, or
                  reach out through GitHub Discussions if you are exploring a
                  collaboration.
                </Translate>
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>
              <Translate id="community.openPositions.contributeHeading">Contribute now</Translate>
            </h2>
            <div className={styles.contributeGrid}>
              <div className={styles.card}>
                <h3>
                  <Translate id="community.openPositions.contributingCard.title">
                    Contributing guide
                  </Translate>
                </h3>
                <p>
                  <Translate id="community.openPositions.contributingCard.body">
                    Code, docs, evaluation, and operations contributions are welcome.
                  </Translate>
                </p>
                <Link to="/community/contributing">
                  <Translate id="community.openPositions.contributingCard.cta">
                    Read the contributing guide
                  </Translate>
                  {' '}↗
                </Link>
              </div>
              <div className={styles.card}>
                <h3>
                  <Translate id="community.openPositions.ecosystemCard.title">
                    Ecosystem & partnerships
                  </Translate>
                </h3>
                <p>
                  <Translate id="community.openPositions.ecosystemCard.body">
                    See the organizations building with and alongside the project.
                  </Translate>
                </p>
                <Link to="/community/ecosystem">
                  <Translate id="community.openPositions.ecosystemCard.cta">
                    View the ecosystem
                  </Translate>
                  {' '}↗
                </Link>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>
              <Translate id="community.openPositions.channelsHeading">Where to connect</Translate>
            </h2>
            <ul className={styles.contact}>
              <li>
                <a
                  href="https://github.com/vllm-project/semantic-router/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vllm-project/semantic-router/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Issues
                </a>
              </li>
              <li>
                <Link to="/docs/community/overview">Docs: Contributing overview</Link>
              </li>
            </ul>
          </section>
        </div>
      </CommunityLayout>
    </Layout>
  )
}
