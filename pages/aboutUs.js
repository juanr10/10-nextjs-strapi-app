import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/AboutUs.module.css';

const AboutUs = () => {
  return (
    <Layout pageName="About us">
      <main className="container">
        <h4 className="heading">About us</h4>

        <div className={styles.content}>
          <Image
            src="/img/aboutUs.jpg"
            layout="responsive"
            width={600}
            height={450}
            alt="image about us"
          />
          <div>
            <p className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium nobis ipsum enim natus illo id error tempore,
              cupiditate placeat ipsam suscipit sunt ea voluptatem dolore porro
              in aut atque veniam repellendus molestiae vitae perspiciatis
              doloremque. Voluptates saepe illo tenetur eligendi excepturi,
              porro molestias, modi nostrum, dolorum incidunt sunt dolor quaerat
              accusantium necessitatibus veritatis odit sint. Voluptatibus,
              aperiam, nulla mollitia iusto inventore eveniet accusamus eligendi
              reiciendis a vitae est dolorem quia accusantium ipsa voluptates
              minus velit ad dolore? Neque fuga modi cumque in adipisci quidem
              corrupti, quasi deserunt laboriosam inventore dolore sint
              voluptas. Reprehenderit, consequatur! Deleniti aliquid deserunt
              sunt molestiae quos.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
