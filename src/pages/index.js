import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

let codeblock = `
> npm install buildfire-cli -g
> buildfire init
> cd BuildFireSDK
> buildfire plugin init myPlugin
> buildfire run
`;

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img style={{ height: "200px" }} className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const FeatureRow = (props) => {
  return (
    <section className={`${styles.featureRow} ${props.odd ? styles.darkBackground : styles.lightBackground}`}>
      <div className={styles.featureContent}>
        {props.children}
      </div>
    </section>
  )
}

const ImagePreview = ({ src, centered }) => {
  return (
    <div className={styles.imagePreviewContainer}>
      <img className={centered ? "" : styles.imagePreviewImage} src={src} />
    </div>
  )
}

const TitleAndText = ({ title, text, small }) => {
  return (
    <div className={`${styles.titleAndText} ${small ? styles.smallTitleAndText : ""}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

const GiveItATry = () => {
  return (
    <section className={`${styles.giveItATry} ${styles.featureRow}`} >
      <h1>Give it a try</h1>
      <CodeBlock>{codeblock}</CodeBlock>
    </section>
  )
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--contained button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={`hero ${styles.videoSection}`}>
          <iframe src="https://www.youtube.com/embed/oF5TrLR5mNI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className={`${styles.features}`}>
            <TitleAndText small={true} title="Use the tools you already know" text="Build new features using Javascript, HTML and CSS. Add any framework you like." />
            <TitleAndText small={true} title="You Build We Deploy" text="Use our cutting edge deployment process to deploy you code to QA or Production all around the world instantly." />
            <TitleAndText small={true} title="No DevOps Needed" text="We take care of publishing to iOS and Android, No Server, Maintenance, No Cordova, Ionic, Titanium, React Native setup. Just start codding and let us take care of the rest." />
          </div>
          <Link
            className={clsx(
              'button button--contained button--primary button--lg',
              styles.getStarted,
            )}
            to={"https://dev.buildfire.com/pages/userAccount/register.html"}>
            Register as a developer
            </Link>
        </section>
        <FeatureRow>
          <ImagePreview src="/img/mcm.png" />
          <TitleAndText title="Develop custom functionality for your BuildFire mobile app" text="Use the tools you already know. Build new features using Javascript, HTML and CSS. Add any framework you like." />
        </FeatureRow>
        <FeatureRow odd={true}>
          <TitleAndText title="Use our existing infrastructure" text="With many built in tools such as: Database, Image server, File server, Analytics, Authentication, Notifications and many more, plugin development should be quick and painless." />
          <img src="/img/infrastructure.png" />
        </FeatureRow>
        <FeatureRow>
          <ImagePreview src="/img/macbook.png" centered={true} />
          <TitleAndText title="Access Native Device API's" text="Integrate with native device components accross multiple platforms with ease. Access GeoLocation, Camera, Filesystem, Bluetooth, iBeacon and other native features simply using buildfire.js apis." />
        </FeatureRow>
        <GiveItATry />
      </main>
    </Layout>
  );
}
