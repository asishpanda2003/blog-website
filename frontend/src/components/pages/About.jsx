import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Explore the fascinating world of web development and beyond! Our blog
          dives into the latest trends, tips, and technologies to help you
          navigate the dynamic landscape of the digital world. Whether you're
          passionate about coding, design, or the intricacies of full-stack
          development, we provide insights to fuel your journey.Discover
          in-depth articles on the MERN stack—MongoDB, Express.js, React, and
          Node.js—unveiling how these powerful tools seamlessly integrate to
          create robust, dynamic web applications. From front-end to back-end,
          we explore how JavaScript ties it all together, making your
          development process smoother and more efficient.Stay updated with our
          weekly newsletter, offering the latest blog articles and exclusive
          offers. Whether you're interested in lifestyle, technology, sports,
          travel, business, or the economy, we cover a wide array of topics to
          keep you informed and inspired.
        </p>
        <p>
          Discover the art of web development and the dynamic world of digital
          innovation. Our blog offers in-depth insights and practical advice for
          navigating the ever-evolving landscape of technology. From the latest
          trends to essential tips, we cover everything you need to stay
          ahead.Explore articles on the MERN stack—MongoDB, Express.js, React,
          and Node.js—and learn how these powerful tools seamlessly integrate to
          create robust, dynamic web applications. Dive into the intricacies of
          full-stack development, where JavaScript ties together front-end and
          back-end processes, ensuring a smooth and efficient workflow.
        </p>
        <p>
          Stay informed with our weekly newsletter, featuring the latest blog
          articles and exclusive offers. We cover a diverse range of topics,
          including lifestyle, technology, sports, travel, business, and the
          economy, ensuring there's something for everyone Join our community on
          social media! Follow us on Instagram, GitHub, Facebook, and LinkedIn
          for the latest updates, behind-the-scenes content, and more. Start
          your journey in the digital realm with us and let's build something
          amazing together!
        </p>
        <p>
          Our blog is dedicated to exploring the latest trends and advancements
          in web development, offering valuable insights and practical tips on
          mastering full-stack development with the MERN stack—comprising
          MongoDB, Express.js, React, and Node.js. In addition to our focus on
          technology, we strive to keep our readers well-informed on a variety
          of engaging topics including lifestyle, technology, sports, travel,
          business, and the economy. Our goal is to provide comprehensive
          content that empowers you to navigate and excel in the ever-evolving
          digital world.
        </p>
        <p>
          Our blog is your go-to source for discovering cutting-edge trends and
          developments in web development, offering expert advice and practical
          guidance on mastering full-stack development with the MERN
          stack—MongoDB, Express.js, React, and Node.js. We also provide our
          readers with a diverse range of topics, from lifestyle and technology
          to sports, travel, business, and the economy. Our aim is to equip you
          with the knowledge and tools you need to succeed and excel in the
          ever-changing digital world.
        </p>
      </div>
    </article>
  );
};

export default About;
