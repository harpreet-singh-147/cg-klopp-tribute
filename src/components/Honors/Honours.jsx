import './Honours.scss';

const Honours = () => {
  return (
    <section id='honours' className='bg-light honours'>
      <div className='container'>
        <div className='row text-center mb-5'>
          <div className='col-md-8 offset-md-2'>
            <h2>Jurgen Klopp’s honours as Liverpool manager</h2>
            <p className='lead'>
              Jurgen Klopp has announced he will leave Liverpool at the end of
              the 23/24 season, a moment which will bring to an end another
              successful chapter in the club’s history.
            </p>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='card mb-4 border-0 p-2'>
              <img
                src='https://res.cloudinary.com/cloudinary-h/image/upload/v1706369609/cg-klopp-tribute/klopp-prem.webp'
                className='card-img-top'
                alt='Jurgen Norbert Klopp with the premier league trophy'
              />
              <div className='card-body'>
                <h3 className='card-title h5 fw-bold'>
                  Premier League (2019/20)
                </h3>
                <p className='card-text'>
                  30 years of hurt was finally ended by Jurgen Klopp's
                  all-conquering Liverpool during the pandemic-hit 2019/20
                  Premier League season. The Reds romped to the title, finishing
                  18 points clear of Manchester City and accumulating an
                  astonishing 99 points from 38 league games.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='card mb-4 border-0 p-2'>
              <img
                src='https://res.cloudinary.com/cloudinary-h/image/upload/v1706369092/cg-klopp-tribute/klopp-cl.webp'
                className='card-img-top'
                alt='Jurgen Norbert Klopp with the european cup trophy'
              />
              <div className='card-body'>
                <h3 className='card-title h5 fw-bold'>
                  UEFA Champions League (2018/19)
                </h3>
                <p className='card-text'>
                  The first trophy Jurgen Klopp lifted at Liverpool was a fairly
                  big one - both in reputation and sheer scale of trophy. The
                  Reds came close to winning the Champions League in 2018 -
                  losing to Real Madrid in the final - but they were able to get
                  their hands on European football's biggest prize one year
                  later, with goals from Mohamed Salah and Divock Origi seeing
                  off Tottenham Hotspur in the final in Madrid.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='card mb-4 border-0 p-2'>
              <img
                src='https://res.cloudinary.com/cloudinary-h/image/upload/v1706370251/cg-klopp-tribute/klopp-fac.jpg'
                className='card-img-top'
                alt='Jurgen Norbert Klopp with the FA cup'
              />
              <div className='card-body'>
                <h3 className='card-title h5 fw-bold'> FA Cup (2021/22)</h3>
                <p className='card-text'>
                  One of the many, many things that's made Klopp's Liverpool
                  team so special has been their ability to dig in and win when
                  the pressure is really on. Perhaps the best example of this
                  ability was the 2021/22 FA Cup final, when Liverpool were able
                  to best Chelsea in a penalty shootout after a gruelling clash
                  at Wembley Stadium.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='card mb-4 border-0 p-2'>
              <img
                src='https://res.cloudinary.com/cloudinary-h/image/upload/v1706370189/cg-klopp-tribute/klopp-cara.jpg'
                className='card-img-top'
                alt='Jurgen Norbert Klopp with the carabao cup trophy'
              />
              <div className='card-body'>
                <h3 className='card-title h5 fw-bold'>Carabao Cup (2021/22)</h3>
                <p className='card-text'>
                  The 'Caoimhín Kelleher final'. The young Irish goalkeeper was
                  in inspired form in last season's Carabao Cup final clash with
                  Chelsea at Wembley Stadium, scoring a penalty kick in a
                  shootout to win the trophy for the Reds.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='card mb-4 border-0 p-2'>
              <img
                src='https://res.cloudinary.com/cloudinary-h/image/upload/v1706370082/cg-klopp-tribute/klopp-super.jpg'
                className='card-img-top'
                alt='Jurgen Norbert Klopp and his staff with the UEFA super cup trophy'
              />
              <div className='card-body'>
                <h3 className='card-title h5 fw-bold'>UEFA Super Cup (2019)</h3>
                <p className='card-text'>
                  Klopp's Liverpool firmly cemented their place as the best team
                  in Europe a few months after winning the Champions League,
                  besting Europa League winners Chelsea in the Super Cup. After
                  both sides played out a dramatic 2-2 draw, the Reds would
                  score all five of their penalty kicks to win yet another
                  European trophy.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='card mb-4 border-0 p-2'>
              <img
                src='https://res.cloudinary.com/cloudinary-h/image/upload/v1706370137/cg-klopp-tribute/klopp-clubwc.jpg'
                className='card-img-top'
                alt='Jurgen Norbert Klopp with the FIFA world cup trophy'
              />
              <div className='card-body'>
                <h3 className='card-title h5 fw-bold'>
                  FIFA Club World Cup (2019)
                </h3>
                <p className='card-text'>
                  After conquering Europe, Liverpool would go on to conquer the
                  rest of the world by the end of 2019. A fiercely contested
                  Club World Cup final meeting with Flamengo was eventually won
                  by an extra time goal from Roberto Firmino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Honours;
