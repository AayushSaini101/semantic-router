import type { ReactNode } from 'react'
import Layout from '@theme/Layout'
import Translate from '@docusaurus/Translate'
import React from 'react'
import CommunityLayout from '@site/src/components/community/CommunityLayout'
import EcosystemPanel from '@site/src/components/ecosystem/EcosystemPanel'
import styles from './ecosystem.module.css'

export default function CommunityEcosystem(): ReactNode {
  return (
    <Layout
      title="Ecosystem & partnerships"
      description="An open, programmable decision layer for models and compute — partners and collaborators in the vLLM Semantic Router ecosystem."
    >
      <CommunityLayout
        activeKey="ecosystem"
        title={<Translate id="community.ecosystem.title">Ecosystem & partnerships</Translate>}
        description={
          <Translate
            id="community.ecosystem.subtitle"
            values={{
              decisionLayer: (
                <strong>
                  <Translate id="community.ecosystem.decisionLayer">decision layer</Translate>
                </strong>
              ),
            }}
          >
            {'An open, programmable {decisionLayer} for models and compute.'}
          </Translate>
        }
      >
        <div className={styles.panel}>
          <EcosystemPanel
            showHeading={false}
            showWordmark
            footerHref="/community/open-positions"
            footerLabelId="community.ecosystem.cta"
            footerLabelDefault="Build with us"
          />
        </div>
      </CommunityLayout>
    </Layout>
  )
}
