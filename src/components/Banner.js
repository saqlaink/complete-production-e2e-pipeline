import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['DevOps Engineer', 'Cloud Engineer', 'Software Engineer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              {`Hi, I'm Saqlain Khan `}
              <span className="wrap">{text}</span>
            </h1>
            <br></br>
            <p>About Me!</p>
            <p className="text-white">
              I'm a curious and creative problem solver with a deep passion for
              technology and a constant hunger for learning. My journey in the
              world of DevOps engineering began with a fascination for computer
              systems and a knack for automating processes, evolving from a
              hobby into a career that brings me daily satisfaction.
            </p>
            <p className="text-white">
              I relish streamlining systems and traveling to connect with
              diverse people. Life's about balance; I infuse work with joy, a
              philosophy mirrored in my DevOps work, where efficiency and
              innovation harmonize.
            </p>
            <button
              onClick={() => {
                window.open('https://www.linkedin.com/in/saqlainmkhan/');
              }}
            >
              Let's Connect!
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
