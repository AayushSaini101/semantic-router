import React from 'react'
import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage'
import { ECOSYSTEM_ORGANIZATIONS } from './organizations'
import styles from './EcosystemPanel.module.css'

export type EcosystemPanelProps = {
  /** Use h1 on dedicated Community page; h2 on homepage full section. */
  headingLevel?: 'h1' | 'h2'
  showWordmark?: boolean
  /** When false, CommunityLayout (or parent) owns title/tagline. */
  showHeading?: boolean
  footerHref?: string
  footerLabelId?: string
  footerLabelDefault?: string
  growingMessage?: boolean
}

export default function EcosystemPanel({
  headingLevel = 'h2',
  showWordmark = true,
  showHeading = true,
  footerHref = '/community/open-positions',
  footerLabelId = 'ecosystem.cta',
  footerLabelDefault = 'Build with us',
  growingMessage = true,
}: EcosystemPanelProps): React.JSX.Element {
  const assetPath = useBaseUrl('/img/ecosystem/')
  const HeadingTag = headingLevel

  return (
    <section
      id="ecosystem"
      className={styles.section}
      aria-labelledby={showHeading ? 'ecosystem-title' : undefined}
      aria-label={showHeading ? undefined : 'Ecosystem & partnerships'}
    >
      <div
        className={styles.atmosphere}
        style={{ backgroundImage: `url(${assetPath}atmosphere.webp)` }}
        aria-hidden="true"
      />
      <div className={styles.content}>
        {(showWordmark || showHeading) && (
          <header className={styles.heading}>
            {showWordmark && (
              <ThemedImage
                className={styles.wordmark}
                sources={{
                  light: `${assetPath}vllm-sr-wordmark-light.png`,
                  dark: `${assetPath}vllm-sr-wordmark-dark.png`,
                }}
                alt="vLLM Semantic Router"
                width={2160}
                height={690}
                loading="lazy"
              />
            )}
            {showHeading && (
              <>
                <HeadingTag id="ecosystem-title">
                  <Translate id="ecosystem.title">Ecosystem & partnerships</Translate>
                </HeadingTag>
                <p>
                  <Translate
                    id="ecosystem.description"
                    values={{
                      decisionLayer: (
                        <strong>
                          <Translate id="ecosystem.decisionLayer">decision layer</Translate>
                        </strong>
                      ),
                    }}
                  >
                    {'An open, programmable {decisionLayer} for models and compute.'}
                  </Translate>
                </p>
              </>
            )}
          </header>
        )}

        <ul className={styles.organizations}>
          {ECOSYSTEM_ORGANIZATIONS.map(organization => (
            <li
              className={styles.organization}
              key={organization.id}
              data-caption={organization.caption || undefined}
              style={{ '--logo-width': `${organization.width}px` } as React.CSSProperties}
            >
              <ThemedImage
                sources={{
                  light: `${assetPath}${organization.id}${organization.light ? '-light' : ''}.svg`,
                  dark: `${assetPath}${organization.id}.svg`,
                }}
                alt={organization.name}
                loading="lazy"
                decoding="async"
              />
              {organization.caption && (
                <span className={styles.logoCaption} aria-hidden="true">
                  {organization.name}
                </span>
              )}
            </li>
          ))}
        </ul>

        {(growingMessage || footerHref) && (
          <div className={styles.footer}>
            {growingMessage && (
              <p>
                <Translate id="ecosystem.growing">
                  And an open community still growing.
                </Translate>
              </p>
            )}
            {footerHref && (
              <Link to={footerHref}>
                <Translate id={footerLabelId}>{footerLabelDefault}</Translate>
                <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
